import { json, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { createUserSession } from "~/utils/auth.server";
import { validateEmail, validatePassword } from "~/utils/validation";
import { getDb } from "~/utils/db.server";

export async function action({ request }: { request: Request }) {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const password = form.get("password");

  const errors: any = {};
  if (!name || typeof name !== "string") {
    errors.name = "Name is required";
  }
  if (!email || typeof email !== "string" || !validateEmail(email)) {
    errors.email = "Email is required";
  }
  if (
    !password ||
    typeof password !== "string" ||
    !validatePassword(password)
  ) {
    errors.password = "Password is required";
  }

  if (Object.keys(errors).length) {
    return json({ errors }, { status: 400 });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const db = await getDb();
    await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, passwordHash]
    );
    // TODO: Get the user id from the database
    const userId = "someUserId"; // Replace with actual user ID
    return createUserSession(userId, "/");
  } catch (e: any) {
    console.error(e);
    errors.email = "Email already exists";
    return json({ errors }, { status: 400 });
  }
}

import { json, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { createUserSession } from "~/utils/auth.server";
import { validateEmail, validatePassword } from "~/utils/validation";
import { getDb } from "~/utils/db.server";

export async function action({ request }: { request: Request }) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");

  const errors: any = {};
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
    const db = await getDb();
    const [users] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    const user: any = Array.isArray(users) && users.length > 0 ? users[0] : null;

    if (!user) {
      errors.email = "Invalid credentials";
      return json({ errors }, { status: 400 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      errors.email = "Invalid credentials";
      return json({ errors }, { status: 400 });
    }

    return createUserSession(user.id.toString(), "/");
  } catch (e: any) {
    console.error(e);
    errors.email = "Invalid credentials";
    return json({ errors }, { status: 400 });
  }
}

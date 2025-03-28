function validateEmail(email: string) {
  return typeof email === "string" &&
    email.length > 3 &&
    email.includes("@")
}

function validatePassword(password: string) {
  return typeof password === "string" && password.length > 6;
}

export { validateEmail, validatePassword };

"use client"
import { signIn } from "next-auth/react";

export default function Login() {
  return <button
    onClick={() => signIn("keycloak")}
    className="text-blue-800">
Login  </button>
}

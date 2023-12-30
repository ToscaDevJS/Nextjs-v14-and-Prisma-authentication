"use client";

import { signIn } from "next-auth/react";

export default function SigninWithGoogle() {
  return (
    <>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: `${window.location.origin}`,
          })
        }
        className="mt-6 p-3 bg-zinc-700 rounded-lg"
      >
        Login with Google
      </button>
    </>
  );
}

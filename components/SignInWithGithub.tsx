"use client";

import { signIn } from "next-auth/react";

export default function SigninWithGithub() {
  return (
    <button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-6 p-3 bg-zinc-700 rounded-lg"
    >
      Login with Github
    </button>
  );
}

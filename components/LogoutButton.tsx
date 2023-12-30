"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="mt-6 p-3 bg-zinc-700 rounded-lg"
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/auth`,
        })
      }
    >
      Log out
    </button>
  );
}

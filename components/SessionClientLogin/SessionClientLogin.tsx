"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export const SessionClientLogin = () => {
  const { data: session } = useSession();

  return (
    <section>
      <h2>Login Client more Provider</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
};

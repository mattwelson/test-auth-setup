"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

export default function Home() {
  const { signIn } = useAuthActions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthLoading>Loading...</AuthLoading>
      <Authenticated>Logged in</Authenticated>
      <Unauthenticated>
        Not logged in{" "}
        <button onClick={() => signIn("github")}>Log in with Github</button>
      </Unauthenticated>
    </main>
  );
}

"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function UserAccountNav() {
  return (
    <Button
      variant='destructive'
      onClick={() => {
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        });
      }}
    >
      Sign Out
    </Button>
  );
}

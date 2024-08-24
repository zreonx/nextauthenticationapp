import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button, buttonVariants } from "./ui/button";
import { Lock } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signOut } from "next-auth/react";
import UserAccountNav from "./user-account-nav";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div className=' py-2 shadow dark:border-b fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <Lock />
          <span className='mt-1 font-bold '>NextAuth</span>
        </Link>

        <div className='flex items-center gap-4'>
          {session?.user ? (
            <UserAccountNav />
          ) : (
            <Link href='/sign-in' className={buttonVariants()}>
              Sign In
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { Lock } from "lucide-react";

export default function Navbar() {
  return (
    <div className=' py-2 shadow dark:border-b fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <Lock />
          <span className='mt-1 font-bold '>NextAuth</span>
        </Link>

        <div className='flex items-center gap-4'>
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <h2 className='text-2xl'>
        Admin page - welcome back {session?.user.username || session.user.name}
      </h2>
    );
  }
  return <h2 className='text-2xl'>Please Login to see this admin page</h2>;
}

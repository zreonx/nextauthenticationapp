import React, { Children, ReactNode } from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

type GoogleSignInButtonProps = {
  children: ReactNode;
};

export default function GoogleSignInButton({
  children,
}: GoogleSignInButtonProps) {
  const loginWithGoogle = () => {
    console.log("logged in with google");
  };
  return (
    <Button
      onClick={loginWithGoogle}
      className='w-full flex items-center gap-4'
    >
      <FcGoogle size={24} />
      {children}
    </Button>
  );
}

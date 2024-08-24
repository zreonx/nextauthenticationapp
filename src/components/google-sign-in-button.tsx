import React, { Children, ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";

type GoogleSignInButtonProps = {
  children: ReactNode;
};

export default function GoogleSignInButton({
  children,
}: GoogleSignInButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "http://localhost:3000/admin" });
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      onClick={loginWithGoogle}
      className='w-full flex items-center gap-4'
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          Please wait
        </>
      ) : (
        <>
          <FcGoogle size={24} />
          {children}
        </>
      )}
    </Button>
  );
}

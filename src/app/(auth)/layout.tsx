import React, { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='bg-slate-100 dark:bg-transparent dark:border dark:border-slate-800 px-8 py-6 rounded-md w-full sm:max-w-md mt-10'>
      {children}
    </div>
  );
}

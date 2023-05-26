"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#DC143C] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://res.cloudinary.com/drwhcke2v/image/upload/v1684964117/chatgpt-logo-clone_mumqep.svg"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={()=> signIn('google')} className="text-white font-bold text-3xl animate-pulse">
        Sign In to use ChatGPT ~ Clone
      </button>
    </div>
  );
}

export default Login;

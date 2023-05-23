"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#e11d48] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://res.cloudinary.com/drwhcke2v/image/upload/v1684823681/chatgpt-logo-clone_x1rqef.svg"
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

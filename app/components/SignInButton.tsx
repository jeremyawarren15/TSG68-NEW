'use client'
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  const handleAuth = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <button onClick={handleAuth}>
      {session ? 'Sign Out' : 'Sign In'}
    </button>
  );
}

export default SigninButton;
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Page() {
  const session = useSession();

  return (
    <div className="h-screen m-4">
      <div className="flex justify-between items-center border border-white p-2 px-4 rounded-lg">
        <h1>
          Welcome to the home page
           this is test app for Nexy-auth.js
        </h1>
        {session.data?.user && (
          <p>
            Hello {session.data.user.name}
          </p>
        )}
        {session.data?.user && (
          <button onClick={() => signOut()}>Sign out</button>
        )}
        {!session.data?.user && (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </div>
    </div>
  );
}
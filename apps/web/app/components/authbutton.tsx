"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "./Button";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* <p>{session.user?.email}</p> */}
        <div className="flex items-center gap-2">
          <div>
        {<p className="font-bold text-center">{session.user?.name}</p>}
        <Button handler={signOut} content={"Logout"} />
          </div>
        {<img src={session.user?.image} className="h-10 w-10 rounded-2xl"/>}
        </div>
      </>
    );
  }

  return (
    <Button handler={signIn} content={"SignIn"} />
  );
}
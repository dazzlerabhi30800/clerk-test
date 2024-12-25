import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      {/* <SignInPage /> */}
      <SignIn />
    </div>
  );
};

export default SignInPage;

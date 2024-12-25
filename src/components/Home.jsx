import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-1 h-full w-full flex justify-center items-center text-3xl font-bold">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link className="text-xl font-bold text-blue underline" to="/sign-in">
          Sign In
        </Link>
      </SignedOut>
    </div>
  );
};

export default Home;

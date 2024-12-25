import { UserButton } from "@clerk/clerk-react";
import React from "react";

const FeedPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-10 justify-center items-center">
      This is a Feed Page
      <UserButton />
    </div>
  );
};

export default FeedPage;

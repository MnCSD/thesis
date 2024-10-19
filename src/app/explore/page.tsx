"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import React from "react";

const ExplorePage = () => {
  const { signOut } = useAuthActions();

  return (
    <div>
      ExplorePage
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default ExplorePage;

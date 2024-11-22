"use client";

import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { Sidebar } from "./components/sidebar";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Doc } from "../../../convex/_generated/dataModel";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: user, isLoading } = useCurrentUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-main w-full h-[100vh] overflow-hidden flex items-center justify-center pl-[0!important]">
        <ClimbingBoxLoader color="#55DC49" className="rotate-45" />
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#0F0F0F]">
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-10 h-10 text-white bg-[#55DC49] hover:text-white"
        >
          <Menu className="w-[30px!important] h-[30px!important]" />
        </Button>
      </div>
      <div className="flex h-[100%]">
        <Sidebar
          user={user as Doc<"users">}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="flex-1 overflow-y-auto pt-10 md:pt-0">{children}</main>
      </div>
    </div>
  );
}

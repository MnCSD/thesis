import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, Settings } from "lucide-react";

export function Header() {
  return (
    <header className="h-[51px] border-b border-[#55DC49] border-opacity-10 bg-[#0F0F0F]">
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-2xl font-bold text-white">
          AI Tutor
        </Link>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <Settings className="h-5 w-5" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-[#55DC49] flex items-center justify-center">
            <span className="text-sm font-medium text-white">JS</span>
          </div>
        </div>
      </div>
    </header>
  );
}

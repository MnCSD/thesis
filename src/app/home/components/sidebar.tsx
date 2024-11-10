"use client";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  LayoutDashboard,
  MessageSquare,
  Trophy,
  CircleUser,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Doc } from "../../../../convex/_generated/dataModel";

const navigation = [
  { name: "Dashboard", href: "/home", icon: LayoutDashboard },
  { name: "Topics", href: "/topics", icon: BookOpen },
  { name: "Chat", href: "/home/chat", icon: MessageSquare },
  { name: "Progress", href: "/home/progress", icon: Trophy },
];

interface SidebarProps {
  user?: Doc<"users">;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ user, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {/* {isOpen && (
        // <div
        //   className="fixed inset-0 bg-black/20 z-40 md:hidden"
        //   onClick={onClose}
        // />
      )} */}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static w-72 border-r border-[#55DC49]/10 p-6 bg-[#0F0F0F] flex-col h-full z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex justify-end md:hidden mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="w-8 h-8 text-white hover:bg-[#55DC49]/10 hover:text-white"
          >
            <X className="w-[20px!important] h-[20px!important]" />
          </Button>
        </div>

        <nav className="space-y-4 flex-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={onClose}>
                <Button
                  variant="ghost"
                  className={`
                    w-full h-[56px] justify-start text-lg font-medium
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-[#55DC49]/10 text-[#55DC49]"
                        : "text-gray-400 hover:translate-x-1 hover:text-[#55DC49]"
                    }
                    group relative overflow-hidden rounded-xl
                  `}
                >
                  <div
                    className={`
                    absolute inset-0 bg-gradient-to-r from-[#55DC49]/10 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  `}
                  />
                  <item.icon
                    className={`
                    w-6 h-6 mr-4 transition-all duration-300
                    ${isActive ? "text-[#55DC49]" : "group-hover:text-[#55DC49]"}
                    group-hover:scale-110 group-hover:rotate-3
                  `}
                  />
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                    {item.name}
                  </span>
                  {isActive && (
                    <div className="absolute left-0 top-0 w-1.5 h-full bg-[#55DC49] rounded-r" />
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="pt-4 mt-4 border-t border-[#55DC49]/10">
          <Link href="/home/account" onClick={onClose}>
            <Button
              variant="ghost"
              className="w-full h-[56px] justify-start text-lg font-medium
                text-gray-400 hover:text-[#55DC49] group relative overflow-hidden rounded-xl
                hover:bg-[#55DC49]/10 transition-all duration-300"
            >
              <div className="flex items-center w-full">
                {user?.image ? (
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-4 ring-2 ring-[#55DC49]/20">
                    <img
                      src={user.image}
                      alt={user.name || "User"}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <CircleUser className="w-8 h-8 mr-4 text-[#55DC49]" />
                )}
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-white">
                    {user?.name || "Account"}
                  </span>
                  <span className="text-xs text-gray-400">View Profile</span>
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

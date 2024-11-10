import { CircleUser } from "lucide-react";
import Image from "next/image";
import { Doc } from "../../../../../convex/_generated/dataModel";

interface ProfileHeaderProps {
  user?: Doc<"users">;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {user?.image ? (
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#55DC49]/20">
            <img
              src={user.image}
              alt={user.name || "Profile"}
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-[#55DC49]/10 flex items-center justify-center ring-4 ring-[#55DC49]/20">
            <CircleUser className="w-16 h-16 text-[#55DC49]" />
          </div>
        )}
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          {user?.name || "Your Profile"}
        </h1>
        <p className="text-gray-400 mt-2">
          Manage your account settings and preferences
        </p>
      </div>
    </div>
  );
}

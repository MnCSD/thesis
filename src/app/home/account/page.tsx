"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Loader2 } from "lucide-react";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

import { ProfileHeader } from "./components/profile-header";
import { ProfileForm } from "./components/profile-form";
import { Doc } from "../../../../convex/_generated/dataModel";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useGetPreferences } from "@/features/preferences/use-get-preferences";
import { useUpdatePreference } from "@/features/preferences/use-update-preference";

export default function AccountPage() {
  const { data: user, isLoading } = useCurrentUser();

  const { data: preferences, isLoading: isLoadingPreferences } =
    useGetPreferences();

  if (!preferences) {
    return null;
  }

  if (isLoading && isLoadingPreferences) {
    return (
      <div className="bg-main w-full h-[100vh] overflow-hidden flex items-center justify-center pl-[0!important]">
        <ClimbingBoxLoader color="#55DC49" className="rotate-45" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <ProfileHeader user={user as Doc<"users">} />
        <Card className="p-6 bg-white/5 border-0">
          <ProfileForm
            user={user as Doc<"users">}
            preferences={preferences[0] as unknown as Doc<"preferences">}
          />
        </Card>
      </div>
    </div>
  );
}

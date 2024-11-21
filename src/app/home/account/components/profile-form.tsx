import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Loader2,
  Mail,
  User,
  BookOpen,
  Clock,
  GraduationCap,
} from "lucide-react";
import { Doc } from "../../../../../convex/_generated/dataModel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LearningFrequency,
  LearningLevel,
  SubjectType,
} from "@/features/auth/types";
import { useUpdatePreference } from "@/features/preferences/use-update-preference";
import { toast } from "sonner";

interface ProfileFormProps {
  user?: {
    name?: string;
    email?: string;
    bio?: string;
    location?: string;
    website?: string;
    github?: string;
    twitter?: string;
  };
  preferences?: Doc<"preferences">;
}

export function ProfileForm({ user, preferences }: ProfileFormProps) {
  const [isSaving, setIsSaving] = useState(false);
  const { mutate: updatePreference } = useUpdatePreference();
  const [subject, setSubject] = useState<SubjectType>(
    preferences?.subject || "Mathematics"
  );
  const [learningLevel, setLearningLevel] = useState<LearningLevel>(
    preferences?.learningLevel || "beginner"
  );
  const [learningFrequency, setLearningFrequency] = useState<LearningFrequency>(
    preferences?.learningFrequency || "daily"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferences?._id) {
      toast.error("No preference ID found");
      return;
    }

    setIsSaving(true);
    try {
      await updatePreference(
        {
          id: preferences._id,
          subject,
          learningLevel,
          learningFrequency,
        },
        {
          onSuccess: () => {
            toast.success("Preferences updated successfully");
          },
          onError: (error: Error) => {
            toast.error("Failed to update preferences: " + error.message);
          },
        }
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Your name"
                defaultValue={user?.name}
                className="bg-white/5 border-white/10 text-white pl-10 focus:border-[#55DC49] focus:ring-[#55DC49]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                placeholder="your@email.com"
                defaultValue={user?.email}
                className="bg-white/5 border-white/10 text-white pl-10 focus:border-[#55DC49] focus:ring-[#55DC49]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2">
            Learning Preferences
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">
                Subject
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                <Select
                  value={subject}
                  onValueChange={(value) => setSubject(value as SubjectType)}
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white pl-10 focus:border-[#55DC49] focus:ring-[#55DC49]">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/10">
                    <SelectItem
                      value="Mathematics"
                      className="text-white hover:bg-white/10"
                    >
                      Mathematics
                    </SelectItem>
                    <SelectItem
                      value="Science"
                      className="text-white hover:bg-white/10"
                    >
                      Science
                    </SelectItem>
                    <SelectItem
                      value="Computer Science"
                      className="text-white hover:bg-white/10"
                    >
                      Computer Science
                    </SelectItem>
                    <SelectItem
                      value="Language Arts"
                      className="text-white hover:bg-white/10"
                    >
                      Language Arts
                    </SelectItem>
                    <SelectItem
                      value="Other"
                      className="text-white hover:bg-white/10"
                    >
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">
                Learning Level
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                <Select
                  value={learningLevel}
                  onValueChange={(value) =>
                    setLearningLevel(value as LearningLevel)
                  }
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white pl-10 focus:border-[#55DC49] focus:ring-[#55DC49]">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/10">
                    <SelectItem
                      value="beginner"
                      className="text-white hover:bg-white/10"
                    >
                      Beginner
                    </SelectItem>
                    <SelectItem
                      value="intermediate"
                      className="text-white hover:bg-white/10"
                    >
                      Intermediate
                    </SelectItem>
                    <SelectItem
                      value="advanced"
                      className="text-white hover:bg-white/10"
                    >
                      Advanced
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">
                Learning Frequency
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                <Select
                  value={learningFrequency}
                  onValueChange={(value) =>
                    setLearningFrequency(value as LearningFrequency)
                  }
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white pl-10 focus:border-[#55DC49] focus:ring-[#55DC49]">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/10">
                    <SelectItem
                      value="daily"
                      className="text-white hover:bg-white/10"
                    >
                      Daily
                    </SelectItem>
                    <SelectItem
                      value="weekly"
                      className="text-white hover:bg-white/10"
                    >
                      Weekly
                    </SelectItem>
                    <SelectItem
                      value="monthly"
                      className="text-white hover:bg-white/10"
                    >
                      Monthly
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-6 border-t border-white/10">
        <Button
          type="submit"
          disabled={isSaving}
          className="bg-[#55DC49] hover:bg-[#4bc73f] text-white min-w-[140px] h-11"
        >
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </div>
    </form>
  );
}

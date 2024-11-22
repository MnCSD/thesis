import { Card } from "@/components/ui/card";
import { SubjectType } from "@/features/auth/types";
import { useModuleProgress } from "@/features/modules/use-module-progress";
import { useGetPreferences } from "@/features/preferences/use-get-preferences";
import { format, eachDayOfInterval, subDays } from "date-fns";
import { Flame } from "lucide-react";

export function ActivityCard() {
  const { data: preferences } = useGetPreferences();
  const topicId =
    preferences?.[0]?.subject || (undefined as unknown as SubjectType);

  const { progress: introProgress } = useModuleProgress(
    "Introduction to the Basics",
    topicId
  );

  const { progress: coreProgress } = useModuleProgress(
    "Core Concepts",
    topicId
  );

  const { progress: advancedProgress } = useModuleProgress(
    "Advanced Topics",
    topicId
  );

  const { progress: practicalProgress } = useModuleProgress(
    "Practical Applications",
    topicId
  );

  // Get the last 7 days
  const lastSevenDays = eachDayOfInterval({
    start: subDays(new Date(), 6),
    end: new Date(),
  });

  // Check if a date matches any lastAccessedAt from any module
  const wasActiveDayAt = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    const modules = [
      introProgress,
      coreProgress,
      advancedProgress,
      practicalProgress,
    ];

    return modules.some((module) => {
      if (!module?.progress?.lastAccessedAt) return false;
      const lastAccessed = new Date(module.progress.lastAccessedAt);
      return format(lastAccessed, "yyyy-MM-dd") === dateStr;
    });
  };

  return (
    <Card className="p-8 bg-white/5 border-0">
      <div className="flex flex-col space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Weekly Activity
          </h3>
          <p className="text-gray-400 text-sm">
            Track your learning consistency throughout the week
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
          {lastSevenDays.map((date, i) => {
            const isActive = wasActiveDayAt(date);
            const dayName = format(date, "EEE");
            const dateStr = format(date, "MMM d");
            return (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400">{dayName}</span>
                  <span className="text-xs text-gray-400">{dateStr}</span>
                </div>
                <div
                  className={`aspect-square w-full rounded-md ${
                    isActive
                      ? "bg-[#55DC49]/30 border-[#55DC49]"
                      : "bg-[#55DC49]/10 border-[#55DC49]/20"
                  } border relative group hover:scale-105 transition-transform`}
                >
                  {isActive && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Flame className="h-5 w-5 text-[#55DC49] mb-1" />
                      <span className="text-xs text-[#55DC49] font-medium">
                        Active
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

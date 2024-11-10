import { Card } from "@/components/ui/card";

export function ActivityCard() {
  return (
    <Card className="p-6 bg-white/5 border-0">
      <h3 className="text-lg font-semibold text-white mb-4">Weekly Activity</h3>
      <div className="grid grid-cols-7 gap-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-md bg-[#55DC49]/10 border border-[#55DC49]/20"
          />
        ))}
      </div>
    </Card>
  );
}

"use client";

import { motion } from "framer-motion";
import { ModuleHeader } from "../components/module-header";
import { ModuleReview } from "../components/module-review";
import { ModuleContent } from "../components/module-content";
import { ModuleSidebar } from "../components/module-sidebar";

export default function ModuleDetail({
  params,
}: {
  params: { topicId: string; moduleId: string };
}) {
  const topicId = decodeURIComponent(params.topicId);
  const moduleId = decodeURIComponent(params.moduleId);

  // Mock data - in a real app, fetch this from your API
  const moduleStatus =
    moduleId === "Introduction to the Basics" ? "completed" : "in-progress";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]"
    >
      <ModuleHeader
        topicId={topicId}
        moduleId={moduleId}
        status={moduleStatus}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {moduleStatus === "completed" ? (
              <ModuleReview moduleId={moduleId} />
            ) : (
              <ModuleContent moduleId={moduleId} />
            )}
          </div>
          <div className="lg:col-span-1">
            <ModuleSidebar moduleId={moduleId} status={moduleStatus} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

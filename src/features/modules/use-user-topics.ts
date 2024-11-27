import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const useUserTopics = () => {
  const topics = useQuery(api.modules.getUserTopics);
  return topics;
};

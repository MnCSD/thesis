import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DatabaseZapIcon } from "lucide-react";

export const useGetPreferences = () => {
  const data = useQuery(api.preferences.get);
  const isLoading = data === undefined;

  return {
    data,
    isLoading,
  };
};

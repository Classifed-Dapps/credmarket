import { getViewsData } from "@/lib/action";
import { useQuery } from "@tanstack/react-query";

export function useView() {
  const {
    data: views,
    status,
    error,
  } = useQuery<Views[]>({
    queryKey: ["views"],
    queryFn: getViewsData,
  });
  return { views, status, error };
}

import {useQuery} from "@tanstack/vue-query";
import {fetchItems} from "@/services/api.ts";

export const useQualityItems = (page: number) => {
  return useQuery({
    queryKey: ['items', page],
    queryFn: () => fetchItems(page),
  });
}
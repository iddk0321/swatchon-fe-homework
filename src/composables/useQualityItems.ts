import {useQuery} from "@tanstack/vue-query";
import {fetchItems} from "@/services/api.ts";
import type {Ref} from "vue";

export const useQualityItems = (page: Ref<number>) => {
  return useQuery({
    queryKey: ['items', page],
    queryFn: () => fetchItems(page.value),
  });
}
import {useQuery} from "@tanstack/vue-query";
import {fetchCartBadgeCount} from "@/services/api.ts";

export const useCartBadgeCount = () => {
  return useQuery({
    queryKey: ['cartBadgeCount'],
    queryFn: () => fetchCartBadgeCount(),
  });
}
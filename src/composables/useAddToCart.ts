import {useMutation, useQueryClient} from "@tanstack/vue-query";
import {addToCart} from "@/services/api.ts";

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (qualityId: number) => addToCart(qualityId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cartBadgeCount']
      })
    }
  })
}
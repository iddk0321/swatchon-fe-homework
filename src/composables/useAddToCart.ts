import {useMutation} from "@tanstack/vue-query";
import {addToCart} from "@/services/api.ts";

export const useAddToCart = () => {
  return useMutation({
    mutationFn: (qualityId: number) => addToCart(qualityId)
  })
}
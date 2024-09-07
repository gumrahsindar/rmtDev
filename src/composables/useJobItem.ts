import { computed, Ref } from "vue"
import { useQuery } from "@tanstack/vue-query"
import { useFetchJobItem } from "./useFetchJobItem"

const { fetchJobItem } = useFetchJobItem()

export function useJobItem(id: Ref<number | null>) {
  const jobId = computed(() => id.value)
  const enabled = computed(() => !!jobId.value)
  const {
    data: jobItem,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["job", jobId], // Use id.value here to ensure stability
    queryFn: () => fetchJobItem(jobId.value),
    enabled,
    staleTime: 1000 * 60 * 60, // 1 hour
  })

  return { jobItem, isLoading, error }
}

import { computed, Ref } from "vue"
import { JobItemExtended } from "../types"
import { useQuery } from "@tanstack/vue-query"

type TJobItemApiResponse = {
  public: boolean
  jobItem: JobItemExtended
}

const fetchJobItem = async (id: number | null): Promise<JobItemExtended> => {
  const res = await fetch(`${import.meta.env.VITE_BASE_API_URL}/${id}`)
  if (!res.ok) {
    const errorData = await res.json()
    console.error(errorData.description)
    throw new Error(errorData.description)
  }
  const data: TJobItemApiResponse = await res.json()
  return data.jobItem
}

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

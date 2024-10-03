import { computed, Ref, watch } from 'vue'
import { JobItem } from '../types'
import { useQuery } from '@tanstack/vue-query'
import { toast, type ToastOptions } from 'vue3-toastify'

type TJobItemsApiResponse = {
  jobItems: JobItem[]
  public: boolean
  sorted: boolean
}

type TSearchText = Ref<string | unknown>

const fetchJobItems = async (
  searchText: TSearchText
): Promise<JobItem[] | undefined> => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}?search=${searchText.value}`
  )
  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.description)
  }
  const data: TJobItemsApiResponse = await res.json()
  return data.jobItems
}

export function useSearchQuery(searchText: TSearchText) {
  const searchTextKey = computed(() => searchText.value)
  const enabled = computed(() => !!searchText.value)
  const { data, isLoading, error } = useQuery({
    queryKey: ['jobItems', searchTextKey],
    queryFn: () => fetchJobItems(searchText),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled,
    retry: 1,
  })

  watch(
    error,
    (newError) => {
      if (newError) {
        toast(newError.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        } as ToastOptions)
      }
    },
    { immediate: true }
  )

  return { jobItems: data, isLoading, error }
}

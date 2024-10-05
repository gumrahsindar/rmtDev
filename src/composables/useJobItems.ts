import { useQueries } from '@tanstack/vue-query'
import { useFetchJobItem } from './useFetchJobItem'
import { computed } from 'vue'

const { fetchJobItem } = useFetchJobItem()

export const useJobItems = (ids: number[]) => {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['job', id],
      queryFn: () => fetchJobItem(id),
      staleTime: Infinity,
      enabled: !!id, // id'nin geçerli olup olmadığını kontrol eder
    })),
  })

  const bookmarkedJobItems = computed(() =>
    results.value
      .map((result) => result.data)
      .filter((jobItem) => jobItem !== undefined)
  )

  const isLoading = computed(() =>
    results.value.some((result) => result.isLoading)
  )

  return { bookmarkedJobItems, isLoading }
}

import { computed, ref, watchEffect } from "vue"
import { JobItem } from "../types"

export function useJobItems(searchText: { value: string }) {
  const jobItems = ref<JobItem[]>([])
  const isLoading = ref(false)

  watchEffect(async () => {
    if (!searchText.value) return

    const fetchData = async () => {
      isLoading.value = true
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}?search=${searchText.value}`
        )
        const data = await res.json()
        jobItems.value = data.jobItems
      } catch (error) {
        console.error(error)
      } finally {
        isLoading.value = false
      }
    }

    fetchData()
  })

  const JobItemsSliced = computed(() => {
    return jobItems.value.slice(0, 7)
  })

  return { jobItems: JobItemsSliced, isLoading }
}

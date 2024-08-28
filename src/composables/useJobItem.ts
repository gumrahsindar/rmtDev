import { ref, watch, Ref } from "vue"
import { JobItemExtended } from "../types"

export function useJobItem(id: Ref<number | null>) {
  const jobItem = ref<null | JobItemExtended>(null)
  const isLoading = ref(false)

  const fetchData = async () => {
    if (!id.value) return

    isLoading.value = true
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/${id.value}`
      )
      const data = await res.json()
      console.log(data.jobItem)
      jobItem.value = data.jobItem
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  watch(id, fetchData)

  return { jobItem, isLoading }
}

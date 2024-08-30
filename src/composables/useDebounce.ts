import { Ref, ref, watch, UnwrapRef } from "vue"

export function useDebounce<T>(searchText: Ref<T>, delay = 750) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debounceSearchText = ref<UnwrapRef<T> | unknown>()
  watch(searchText, () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      debounceSearchText.value = searchText.value as UnwrapRef<T> | unknown
    }, delay)
  })

  return { debounceSearchText }
}

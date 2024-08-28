import { onMounted, onUnmounted, ref } from "vue"

export function useActiveId() {
  const activeId = ref<null | number>(null)

  const handleHashChange = () => {
    const id = window.location.hash.slice(1)
    activeId.value = id ? parseInt(id) : null
  }

  onMounted(() => {
    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
  })

  onUnmounted(() => {
    window.removeEventListener("hashchange", handleHashChange)
  })

  return { activeId }
}

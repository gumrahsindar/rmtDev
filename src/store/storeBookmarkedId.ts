import { ref } from "vue"
import { useLocalStorage } from "../composables/useLocalStorage"

const bookmarkedIds = ref<number[]>([])
const { setItem } = useLocalStorage<number[]>(
  "bookmarkedIds",
  bookmarkedIds.value
)

const toggleBookmark = (id: number) => {
  if (bookmarkedIds.value.includes(id)) {
    bookmarkedIds.value = bookmarkedIds.value.filter((i) => i !== id)
  } else {
    bookmarkedIds.value.push(id)
  }

  setItem(bookmarkedIds)
}

export const storeBookmarkedId = {
  bookmarkedIds,
  toggleBookmark,
}

// export const storeBookmarkedId = reactive({
//   bookmarkedIds: [] as number[],
//   toggleBookmark(id: number) {
//     if (this.bookmarkedIds.includes(id)) {
//       this.bookmarkedIds = this.bookmarkedIds.filter((i) => i !== id)
//     } else {
//       this.bookmarkedIds.push(id)
//     }
//   },
// })

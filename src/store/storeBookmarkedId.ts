import { ref, watchEffect } from "vue"

const bookmarkedIds = ref<number[]>([])

const toggleBookmark = (id: number) => {
  if (bookmarkedIds.value.includes(id)) {
    bookmarkedIds.value = bookmarkedIds.value.filter((i) => i !== id)
  } else {
    bookmarkedIds.value.push(id)
  }

  watchEffect(() => {
    localStorage.setItem(
      "bookmarkedIds",
      JSON.stringify(storeBookmarkedId.bookmarkedIds.value)
    )
  })
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

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BookmarksPopover from './BookmarksPopover.vue'

const isOpen = ref(false)
const popoverRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (
    popoverRef.value &&
    !popoverRef.value.contains(event.target as Node) &&
    buttonRef.value &&
    !buttonRef.value.contains(event.target as Node)
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <section>
    <button ref="buttonRef" @click="isOpen = !isOpen" class="bookmarks-btn">
      Bookmarks
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
      </svg>
    </button>

    <div ref="popoverRef">
      <BookmarksPopover v-if="isOpen" />
    </div>
  </section>
</template>

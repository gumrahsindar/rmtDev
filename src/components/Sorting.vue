<script setup lang="ts">
import { SortBy } from "../types"

// const sortBy = defineModel("sortBy")

// const handleSortBy = (value: string) => {
//   sortBy.value = value
// }
defineProps<{
  sortBy: string
  handleSortBy: (value: SortBy) => void
}>()
</script>

<template>
  <section class="sorting">
    <pre>{{ sortBy }}</pre>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00000099"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="cursor: pointer"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 3l0 18" />
      <path d="M10 18l-3 3l-3 -3" />
      <path d="M7 21l0 -18" />
      <path d="M20 6l-3 -3l-3 3" />
    </svg>

    <button
      @click="handleSortBy('relevant')"
      class="sorting__button sorting__button--relevant"
      :class="{ 'sorting__button--active': sortBy === 'relevant' }"
    >
      Relevant
    </button>

    <button
      @click="handleSortBy('recent')"
      class="sorting__button sorting__button--recent"
      :class="{ 'sorting__button--active': sortBy === 'recent' }"
    >
      Recent
    </button>
  </section>
</template>

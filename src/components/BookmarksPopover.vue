<script setup lang="ts">
import { useJobItems } from "../composables/useJobItems"
import { storeBookmarkedId } from "../store/storeBookmarkedId"
import JobList from "./JobList.vue"

const { bookmarkedIds } = storeBookmarkedId
const { bookmarkedJobItems, isLoading } = useJobItems(bookmarkedIds.value)
</script>

<template>
  <div class="bookmarks-popover">
    <JobList :jobItems="bookmarkedJobItems" :isLoading="isLoading" />
  </div>
</template>

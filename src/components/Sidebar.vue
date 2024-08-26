<script setup lang="ts">
import JobList from "./JobList.vue"
import PaginationControls from "./PaginationControls.vue"
import ResultsCount from "./ResultsCount.vue"
import Sorting from "./Sorting.vue"

defineProps(["jobItems"])
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <ResultsCount />
      <Sorting />
    </div>

    <JobList :jobItems="jobItems" />

    <PaginationControls />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import JobListItem from "./JobListItem.vue"
import Spinner from "./Spinner.vue"
import type { JobItem } from "../types"
import { useActiveId } from "../composables/useActiveId"

type JobListProps = {
  jobItems: JobItem[]
  isLoading: boolean
}

defineProps<JobListProps>()

const { activeId } = useActiveId()
</script>

<template>
  <ul class="job-list">
    <Spinner v-if="isLoading" />
    <JobListItem
      v-else
      v-for="jobItem in jobItems"
      :key="jobItem.id"
      :jobItem="jobItem"
      :isActive="jobItem.id === activeId"
    />
  </ul>
</template>

<style scoped></style>

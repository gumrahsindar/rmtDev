<script setup lang="ts">
import JobListItem from "./JobListItem.vue"

defineProps(["jobItems"])
</script>

<template>
  <ul class="job-list" v-for="jobItem of jobItems">
    <JobListItem :jobItem="jobItem" :key="jobItem.id" />
  </ul>
</template>

<style scoped></style>

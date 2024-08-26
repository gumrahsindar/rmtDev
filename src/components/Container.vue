<script setup lang="ts">
import JobItemContent from "./JobItemContent.vue"
import Sidebar from "./Sidebar.vue"

defineProps(["jobItems"])
</script>

<template>
  <div class="container">
    <Sidebar :jobItems="jobItems" />
    <JobItemContent />
  </div>
</template>

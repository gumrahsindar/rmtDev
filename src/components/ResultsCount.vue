<script setup lang="ts">
defineProps<{ totalNumberOfResults: number }>()
</script>

<template>
  <p class="count">
    <b>{{ totalNumberOfResults }}</b> results
  </p>
</template>

<style scoped></style>

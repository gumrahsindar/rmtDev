<script setup lang="ts">
import type { JobItem } from "../types"
import BookmarkIcon from "./BookmarkIcon.vue"

type JobListItemProps = {
  jobItem: JobItem
  isActive: boolean
}

defineProps<JobListItemProps>()
</script>

<template>
  <li class="job-item" :class="{ 'job-item--active': isActive }">
    <a :href="`#${jobItem.id.toString()}`" class="job-item__link">
      <div class="job-item__badge">{{ jobItem.badgeLetters }}</div>

      <div class="job-item__middle">
        <h3 class="third-heading">{{ jobItem.title }}</h3>
        <p class="job-item__company">{{ jobItem.company }}</p>
      </div>

      <div class="job-item__right">
        <BookmarkIcon />
        <time class="job-item__time">{{ jobItem.daysAgo }}d</time>
      </div>
    </a>
  </li>
</template>

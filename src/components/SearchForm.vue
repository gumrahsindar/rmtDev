<script setup lang="ts">
const searchText = defineModel<string>()
</script>

<template>
  <form @submit.prevent action="#" class="search">
    <button type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>

    <input
      v-model="searchText"
      spellCheck="false"
      type="text"
      required
      placeholder="Find remote developer jobs..."
    />
  </form>
</template>

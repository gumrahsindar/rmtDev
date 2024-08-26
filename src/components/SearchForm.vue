<script setup lang="ts">
const searchText = defineModel<string>()
</script>

<template>
  <form
    @submit.prevent="
      (e) => {
        e.preventDefault()
      }
    "
    action="#"
    class="search"
  >
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

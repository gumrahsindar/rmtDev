<script setup lang="ts">
import BookmarksButton from "./BookmarksButton.vue"
import Logo from "./Logo.vue"
import SearchForm from "./SearchForm.vue"

const searchText = defineModel<string>()
</script>

<template>
  <header class="header">
    <div class="header__top">
      <Logo />
      <BookmarksButton />
    </div>

    <SearchForm v-model="searchText" />
  </header>
</template>

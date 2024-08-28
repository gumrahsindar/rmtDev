<script setup lang="ts">
import { ref } from "vue"
import Background from "./components/Background.vue"
import Container from "./components/Container.vue"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
import Logo from "./components/Logo.vue"
import BookmarksButton from "./components/BookmarksButton.vue"
import SearchForm from "./components/SearchForm.vue"
import Sidebar from "./components/Sidebar.vue"
import JobItemContent from "./components/JobItemContent.vue"
import ResultsCount from "./components/ResultsCount.vue"
import Sorting from "./components/Sorting.vue"
import JobList from "./components/JobList.vue"
import PaginationControls from "./components/PaginationControls.vue"
import { useJobItems } from "./composables/useJobItems"
import { useActiveId } from "./composables/useActiveId"
import { useJobItem } from "./composables/useJobItem"

const searchText = ref("")
const { jobItems, isLoading } = useJobItems(searchText)
</script>

<template>
  <Background />

  <Header>
    <div class="header__top">
      <Logo />
      <BookmarksButton />
    </div>

    <SearchForm v-model="searchText" />
  </Header>

  <Container>
    <Sidebar>
      <div class="sidebar__top">
        <ResultsCount />
        <Sorting />
      </div>

      <JobList :jobItems="jobItems" :isLoading="isLoading" />

      <PaginationControls />
    </Sidebar>
    <JobItemContent />
  </Container>

  <Footer />
</template>

<style scoped></style>

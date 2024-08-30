<script setup lang="ts">
import { computed, ref } from "vue"
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
import { useDebounce } from "./composables/useDebounce"

// state
const searchText = ref("")
const { debounceSearchText } = useDebounce(searchText)
const { jobItems, isLoading } = useJobItems(debounceSearchText)
const currentPage = ref(1)

// computed
const jobItemsSliced = computed(() => {
  return jobItems.value
    ? jobItems.value.slice((currentPage.value - 1) * 7, currentPage.value * 7)
    : []
})
const totalNumberOfResults = computed(() => {
  return jobItems.value ? jobItems.value.length : 0
})

const totalPages = computed(() => {
  return Math.ceil(totalNumberOfResults.value / 7)
})

// methods
</script>

<template>
  <Background />

  <Header>
    <pre>
      {{ currentPage }}
    </pre>
    <div class="header__top">
      <Logo />
      <BookmarksButton />
    </div>

    <SearchForm v-model="searchText" />
  </Header>

  <Container>
    <Sidebar>
      <div class="sidebar__top">
        <ResultsCount :totalNumberOfResults="totalNumberOfResults" />
        <Sorting />
      </div>

      <JobList :jobItems="jobItemsSliced" :isLoading="isLoading" />

      <PaginationControls
        v-model:currentPage="currentPage"
        :totalPages="totalPages"
      />
    </Sidebar>
    <JobItemContent />
  </Container>

  <Footer />
</template>

<style scoped></style>

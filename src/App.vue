<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
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
import { SortBy } from "./types"
import { storeBookmarkedId } from "./store/storeBookmarkedId"
import { useLocalStorage } from "./composables/useLocalStorage"

// state
const searchText = ref("")
const { debounceSearchText } = useDebounce(searchText)
const { jobItems, isLoading } = useJobItems(debounceSearchText)
const currentPage = ref(1)
const sortBy = ref<SortBy>("relevant")
const { storedValue: bookmarkedIds, getItem } = useLocalStorage(
  "bookmarkedIds",
  storeBookmarkedId.bookmarkedIds
)

// computed
const jobItemSorted = computed(() => {
  return jobItems.value
    ? [...jobItems.value].sort((a, b) => {
        if (sortBy.value === "relevant") {
          return b.relevanceScore - a.relevanceScore
        } else {
          return a.daysAgo - b.daysAgo
        }
      })
    : []
})

const jobItemsSortedAndSliced = computed(() => {
  return jobItemSorted.value.slice(
    (currentPage.value - 1) * 7,
    currentPage.value * 7
  )
})

const totalNumberOfResults = computed(() => {
  return jobItems.value ? jobItems.value.length : 0
})

const totalPages = computed(() => {
  return Math.ceil(totalNumberOfResults.value / 7)
})

// methods
const handleSortBy = (value: SortBy) => {
  currentPage.value = 1
  sortBy.value = value
}

// get bookmarkedIds from localStorage
onMounted(() => {
  getItem()
})
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
        <ResultsCount :totalNumberOfResults="totalNumberOfResults" />
        <!-- <Sorting v-model:sortBy="sortBy" /> -->
        <Sorting :handleSortBy="handleSortBy" :sortBy="sortBy" />
      </div>

      <JobList :jobItems="jobItemsSortedAndSliced" :isLoading="isLoading" />

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

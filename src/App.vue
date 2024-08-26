<script setup lang="ts">
import { ref, watchEffect } from "vue"
import Background from "./components/Background.vue"
import Container from "./components/Container.vue"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"

const jobItems = ref([])
const searchText = ref("")

watchEffect(async () => {
  if (!searchText.value) return

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}?search=${searchText.value}`
      )
      const data = await res.json()
      jobItems.value = data.jobItems

      console.log(jobItems.value)
    } catch (error) {
      console.error(error)
    }
  }

  fetchData()
})
</script>

<template>
  <Background />

  <Header v-model="searchText" />

  <Container :jobItems="jobItems" />

  <Footer />
</template>

<style scoped></style>

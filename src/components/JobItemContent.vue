<script setup lang="ts">
import { useActiveId } from "../composables/useActiveId"
import { useJobItem } from "../composables/useJobItem"
import BookmarkIcon from "./BookmarkIcon.vue"
import EmptyJobContent from "./EmptyJobContent.vue"
import Spinner from "./Spinner.vue"

const { activeId } = useActiveId()
const { jobItem, isLoading } = useJobItem(activeId)
</script>
<template>
  <section v-if="isLoading" class="job-details">
    <div>
      <Spinner />
    </div>
  </section>
  <EmptyJobContent v-else-if="!jobItem" />
  <section v-else class="job-details">
    <div>
      <img :src="jobItem.coverImgURL" alt="#" />

      <a
        class="apply-btn"
        href="https://fictional9thtechwebsite.com/"
        target="_blank"
      >
        Apply
      </a>

      <section class="job-info">
        <div class="job-info__left">
          <div class="job-info__badge">{{ jobItem.badgeLetters }}</div>
          <div class="job-info__below-badge">
            <time class="job-info__time">{{ jobItem.daysAgo }}d</time>

            <BookmarkIcon :id="jobItem.id" />
          </div>
        </div>

        <div class="job-info__right">
          <h2 class="second-heading">{{ jobItem.title }}</h2>
          <p class="job-info__company">{{ jobItem.company }}</p>
          <p class="job-info__description">
            {{ jobItem.description }}
          </p>
          <div class="job-info__extras">
            <p class="job-info__extra">
              <i class="fa-solid fa-clock job-info__extra-icon"></i>
              {{ jobItem.duration }}
            </p>
            <p class="job-info__extra">
              <i class="fa-solid fa-money-bill job-info__extra-icon"></i>
              {{ jobItem.salary }}
            </p>
            <p class="job-info__extra">
              <i class="fa-solid fa-location-dot job-info__extra-icon"></i
              >{{ jobItem.location }}
            </p>
          </div>
        </div>
      </section>

      <div class="job-details__other">
        <section class="qualifications">
          <div class="qualifications__left">
            <h4 class="fourth-heading">Qualifications</h4>
            <p class="qualifications__sub-text">
              Other qualifications may apply
            </p>
          </div>
          <ul class="qualifications__list">
            <li
              class="qualifications__item"
              v-for="(qualification, index) in jobItem.qualifications"
              :key="index"
            >
              {{ qualification }}
            </li>
          </ul>
        </section>

        <section class="reviews">
          <div class="reviews__left">
            <h4 class="fourth-heading">Company reviews</h4>
            <p class="reviews__sub-text">Recent things people are saying</p>
          </div>
          <ul class="reviews__list">
            <li
              class="reviews__item"
              v-for="(reviews, index) in jobItem.reviews"
              :key="index"
            >
              {{ reviews }}
            </li>
          </ul>
        </section>
      </div>

      <footer class="job-details__footer">
        <p class="job-details__footer-text">
          If possible, please reference that you found the job on
          <span class="u-bold">rmtDev</span>, we would really appreciate it!
        </p>
      </footer>
    </div>
  </section>
</template>

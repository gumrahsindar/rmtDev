<script setup lang="ts">
import { useActiveId } from "../composables/useActiveId"
import { useJobItem } from "../composables/useJobItem"
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

            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
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

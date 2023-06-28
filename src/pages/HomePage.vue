<template>
  <q-page>
    <q-header class="header default-shadow">
      <div class="full-width row q-py-md q-pa-md">
        <div class="col">
          <q-avatar>
            <img alt="user-photo" src="https://avatars.githubusercontent.com/u/61440136?v=4">
          </q-avatar>
          <div class="text-subtitle1">Gerssivaldo Santos</div>
        </div>
        <div class="col">
          <q-linear-progress :value="progress" class="progress-bar" color="primary" size="25px" stripe>
            <div class="absolute-full flex flex-center">
              <div class="text-subtitle1 text-bold text-white">{{ progress * 100 }}%</div>
            </div>
          </q-linear-progress>
          <div class="q-pa-sm text-caption flex-center ">Weekly Progress</div>
        </div>
      </div>
      <div class="row">
        <div class="title text-h4 q-pl-lg q-pb-lg text-bold">
          Home
        </div>
      </div>

    </q-header>

    <div class="cards-wrapper">
      <RouteCard
        v-for="routeCard in routeCards"
        :key="routeCard.name"
        :icon="routeCard.icon"
        :name="routeCard.name"
        class="card"
        @click="router.push(routeCard.route)"
      />
    </div>
  </q-page>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import RouteCard from 'components/RouteCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routeCards = [
  {
    name: 'Weight Resume',
    icon: 'fitness_center',
    route: '/list-weight'
  }/*,
  {
    name: 'Diet',
    icon: 'restaurant'
  },
  {
    name: 'Goals',
    icon: 'sports_score'
  },
  {
    name: 'Friends',
    icon: 'groups'
  } */
]

const progress = ref(0.77)

</script>

<style lang="scss" scoped>

.title {
  color: rgba(255, 255, 255, 0.32);
}

.q-page {
  flex-direction: column;
  justify-content: start !important;
}

.cards-wrapper {
  width: 100%;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  justify-items: center;
  overflow-y: hidden;
  height: 100%;
}

.header {
  background-color: var(--q-dark-page);
}

.progress-bar {
  border-radius: 10px;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.q-card {
  width: 80%;
}

.logo-section {
  justify-content: center;
  display: flex;
}

</style>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer class="footer default-shadow">
      <q-toolbar class="q-pt-xs">
        <q-btn
          flat
          dense
          round
          size="1.3rem"
          icon="home"
          class="bg-primary default-shadow"
          aria-label="Menu"
          @click="onClickHome"
        />
        <q-space/>
        <q-btn
          class="middle-button default-shadow"
          dense
          round
          size="1.3rem"
          icon="note_add"
          aria-label="Add training"
          @click="onClickAddTraining"
        />
        <q-space/>
        <q-btn
          flat
          dense
          round
          size="1.3rem"
          class="bg-primary default-shadow"
          icon="fact_check"
          aria-label="Resume"
          @click="null"
        />
      </q-toolbar>
    </q-footer>

    <router-view v-slot="{ Component, route }">
      <q-page-container>
        <component :is="Component" :key="route.path" />
      </q-page-container>
    </router-view>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onClickAddTraining = () => {
  router.push('add-workout')
}

const onClickHome = () => {
  router.push('/')
}

</script>

<style lang="scss" scoped>

.footer {
  background-color: var(--q-dark-page);
}
.middle-button {
  background-color: var(--q-primary);
  width: 5rem;
  height: 5rem;
  position: absolute;
  left: calc(50% - 2.5rem);
  bottom: -0.5rem
}
</style>

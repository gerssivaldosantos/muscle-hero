<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer class="footer default-shadow">
      <q-toolbar class="q-pt-xs">
        <q-btn
          aria-label="Menu"
          class="bg-primary default-shadow"
          dense
          flat
          icon="home"
          round
          size="1.3rem"
          @click="onClickHome"
        />
        <q-space/>
        <q-btn
          aria-label="Add training"
          class="middle-button default-shadow"
          dense
          icon="note_add"
          round
          size="1.3rem"
          @click="onClickAddTraining"
        />
        <q-space/>
        <q-btn
          aria-label="Resume"
          class="bg-primary default-shadow"
          dense
          flat
          icon="fact_check"
          round
          size="1.3rem"
          @click="null"
        />
      </q-toolbar>
    </q-footer>

    <router-view v-slot="{ Component, route }">
      <q-page-container>
        <component :is="Component" :key="route.path"/>
      </q-page-container>
    </router-view>
  </q-layout>
</template>

<script lang="ts" setup>
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

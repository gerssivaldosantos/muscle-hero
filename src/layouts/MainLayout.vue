<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer class="footer shadow-5">
      <q-toolbar class="q-pt-xs">
        <q-btn
          flat
          dense
          round
          size="1.3rem"
          icon="home"
          class="bg-primary shadow-5"
          aria-label="Menu"
          @click="onClickHome"
        />
        <q-space/>
        <q-btn
          class="middle-button"
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
          class="bg-primary"
          icon="fact_check"
          aria-label="Resume"
          @click="null"
        />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onClickAddTraining = () => {
  router.push('add-training')
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
  -webkit-box-shadow: 0 0 14px -3px rgba(0,0,0,0.45);
  -moz-box-shadow: 0 0 14px -3px rgba(0,0,0,0.45);
  box-shadow: 0 0 14px -3px rgba(0,0,0,0.45);
  background-color: var(--q-primary);
  width: 5rem;
  height: 5rem;
  position: absolute;
  left: calc(50% - 2.5rem);
  bottom: -0.5rem
}
</style>

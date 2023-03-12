<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="Menu"
          @click="onClickHome"
        />
        <q-space/>
        <q-btn
          flat
          dense
          round
          icon="note_add"
          aria-label="Add training"
          @click="onClickAddTraining"
        />
        <q-space/>
        <q-btn
          flat
          dense
          round
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

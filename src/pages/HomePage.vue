<template>
  <q-page>
    <q-header class="q-ma-md bg-transparent">
      <q-linear-progress  size="25px" :value="progress" color="primary">
        <div class="absolute-full flex flex-center">
         <p class="text-subtitle1 text-bold text-white">{{progress * 100}}%</p>
        </div>
      </q-linear-progress>
      <div class="text-caption">Progresso semanal</div>
    </q-header>
  </q-page>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const progress = ref(0.5)

</script>

<style scoped lang="scss">
.q-page{
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

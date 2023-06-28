<template>
  <q-page class="container">

          <q-slide-item @right="onDelete" v-for="{id,value, createdAt} in weights" :key="id" class="slide">
            <template v-slot:right>
              <div class="row items-center">
                Delete <q-icon right name="delete" />
              </div>
            </template>
            <q-item>
              <q-item-section class="weight-value">
                {{value}}
              </q-item-section>
              <q-item-section class="weight-date">{{createdAt.toDate().toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}}</q-item-section>
            </q-item>

          </q-slide-item>

    <q-btn class="add-weight-button" round size="1.5rem" icon="add" @click="router.push('/add-weight')" color="accent" />
  </q-page>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { weightRepositoryInstance } from 'src/core/weight/repository'
import { useRouter } from 'vue-router'

const router = useRouter()
const weights = ref()

const onDelete = (callback:any) => {
  setTimeout(() => { alert('delete'); callback.reset() }, 2000)
}

const onLoad = async () => {
  weights.value = await weightRepositoryInstance.findMany({})
}

onMounted(onLoad)

</script>

<style lang="scss">
.container {
  padding: 0.5rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.weight-card {

}

.weight-value {
  font-size: 1.4rem;
  font-weight: bold;
}

.add-weight-button {
  position: fixed;
  bottom: 5rem;
  right: 20px;
}
.slide {
  background-color: var(--q-primary);
  width: calc(100% - 2rem);
  margin: 0.5rem 0.5rem;
  height: 100%;
}
</style>

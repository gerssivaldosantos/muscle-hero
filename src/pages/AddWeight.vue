<template>
  <q-page>
    <q-form>
      <q-input v-model="weight" label="Your Weight" type="number"/>
      <q-btn color="primary" label="Save" @click="saveWeight"/>
    </q-form>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { weightRepositoryInstance } from 'src/core/weight/repository'
import { WeightModel } from 'src/core/weight/model/weight.model'
import { useRouter } from 'vue-router'

const weight = ref()
const router = useRouter()
const saveWeight = async () => {
  await weightRepositoryInstance.insert(new WeightModel({ createdAt: new Date(), value: weight.value }))
  await router.push('/list-weight')
}

</script>

<style scoped>

</style>

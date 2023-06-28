<template>
  <q-page>
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-toolbar-title>
          Adicionar Treino
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-form
      class="q-pa-xl q-gutter-lg"
    >
      <q-input
        v-model="name"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        filled
        hint="Name and surname"
        label="Your name *"
        lazy-rules
      />

      <q-input
        v-model="age"
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
        filled
        label="Your age *"
        lazy-rules
        type="number"
      />

      <q-toggle v-model="accept" label="I accept the license and terms"/>

      <div>
        <q-btn color="primary" label="Submit" type="submit"/>
        <q-btn class="q-ml-sm" color="primary" flat label="Reset" type="reset"/>
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts" setup>

</script>

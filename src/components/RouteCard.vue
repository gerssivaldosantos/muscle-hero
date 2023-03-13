<template>
  <q-btn class="button bg-primary q-pa-sm row">
      <div class="side text-subtitle1 col">
        {{props.name}}
      </div>
      <div class="col  ">
        <q-icon class="icon" size="3.5rem" :name="props.icon"/>
      </div>
  </q-btn>

</template>

<script setup lang="ts">

const props = defineProps({
  name: {
    type: String,
    default: () => ''
  },
  icon: {
    type: String,
    default: () => ''
  }
})

</script>

<style lang="scss" scoped>
.button {
  border-radius: 1rem;
  width: 100%;
  height: 8rem
}
.icon {
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
  color: rgba(255, 255, 255, 0.31);
}
</style>

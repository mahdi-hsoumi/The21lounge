import { default } from '../Gem.vue';
<script lang="ts" setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="'/' + id">
    <div
      class="card-shadow ease-in duration-100 bg-white text-dark rounded-[30px] pb-2.5 pt-5 px-5 border border-borderLight cursor-pointer hover:bg-secondary hover:bg-secondary hover:text-white"
    >
      <div>
        <div
          class="mr-5 rounded-[30px] card-image"
          :style="`background-image: url(${image});`"
        ></div>
        <h3 class="text-lg font-bold pt-1 text-center">{{ title }}</h3>
      </div>
      <slot />
    </div>
  </NuxtLink>
</template>
<style scoped>
.card-image {
  height: 100px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

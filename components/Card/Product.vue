import { default } from '../Gem.vue';
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
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
  <div
    class="card-shadow flex h-[165px] ease-in duration-100 bg-white text-dark rounded-[30px] p-5 border border-borderLight cursor-pointer hover:bg-secondary hover:bg-secondary hover:text-white"
  >
    <div
      class="mr-5 rounded-[30px] card-image"
      :style="`background-image: url(${image});`"
    ></div>
    <div class="flex flex-col justify-between">
      <div>
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <p class="text-base two-line-ellipsis" style="">
          {{ description }}
        </p>
      </div>
      <p class="text-lg">{{ price }}</p>
    </div>
    <slot />
  </div>
</template>
<style scoped>
.card-image {
  height: 100%;
  min-width: 120px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.two-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

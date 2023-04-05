<script setup>
import categories from '~/content/products'
const route = useRoute()
// composable

// compiler macro
const id = route.params.id * 1 - 1
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'pages.blank.title',
  meta: [
    {
      name: 'description',
      content: 'pages.blank.description',
    },
  ],
}))
const currentProduct = useState('currentProduct', () => null)
</script>

<template>
  <div>
    <div class="container">
      <div class="px-5 pt-5 text-dark">
        <NuxtLink to="/" class="absolute top-[45px]">
          <IconMdi:arrowLeft class="text-xl cursor-pointer" />
        </NuxtLink>
        <div
          v-for="category in Object.keys(categories[id])"
          :key="category"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5"
        >
          <h3 class="pb-2.5 text-2xl font-bold text-center capitalize">
            {{ category }}
          </h3>
          <CardProduct
            v-for="product in categories[id][category]"
            :id="product.id"
            :key="product.id"
            :title="product.title"
            :image="product.image"
            :description="product.description"
            :price="product.price"
            @click="currentProduct = product"
          />
        </div>
      </div>
    </div>
    <div v-if="currentProduct" class="fixed top-0 h-[100vh] w-[100vw]">
      <div
        class="absolute z-10 top-0 h-[100%] w-[100%] w-full bg-black/50 flex items-end"
        @click="currentProduct = null"
      ></div>
      <div
        class="absolute z-20 bottom-0 p-5 w-full h-[65vh] bg-white rounded-t-[30px] flex flex-col justify-between"
      >
        <div>
          <div
            class="mr-5 rounded-[30px] modal-image"
            :style="`background-image: url(${currentProduct.image});`"
          ></div>
          <h3 class="text-lg font-bold mt-5">{{ currentProduct.title }}</h3>
          <p class="text-base two-line-ellipsis" style="">
            {{ currentProduct.description }}
          </p>
          <p class="text-lg">{{ currentProduct.price }}</p>
        </div>
        <div
          class="w-100% text-center bg-secondary py-2 rounded-3xl font-bold text-lg text-white hover:bg-secondary/25"
          @click="currentProduct = null"
        >
          Close
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.modal-image {
  height: 35vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<script setup>
import products from '~/content/products'
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
      <div class="px-5 pt-10 text-dark">
        <div class="flex items-center w-full pb-10">
          <NuxtLink to="/">
            <IconMdi:arrowLeft class="text-xl cursor-pointer" />
          </NuxtLink>

          <h1 class="w-full text-lg font-bold text-center">Coffee</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
          <CardProduct
            v-for="product in products[id]"
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
    <div
      v-if="currentProduct"
      class="fixed top-0 h-[100vh] w-full bg-black/50 flex items-end"
    >
      <div
        class="p-5 w-full h-[70vh] bg-white rounded-t-[30px] flex flex-col justify-between"
      >
        <div>
          <img :src="currentProduct.image" class="rounded-[30px]" />
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

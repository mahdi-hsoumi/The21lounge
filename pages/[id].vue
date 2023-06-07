<script setup>
import categoriesNames from '~/content/categories'
import categories from '~/content/products'
const route = useRoute()
// composable

// compiler macro
const id = route.params.id * 1 - 1

definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'The 21 Lounge - ' + categoriesNames[id].title,
  meta: [
    {
      name: 'description',
      content: 'The 21 Lounge - ' + categoriesNames[id].title,
    },
  ],
}))
const disableScroll = () => {
  const body = document.getElementsByTagName('body')[0]
  body.classList.add('overflow-hidden')
}

// call this to Enable
const enableScroll = () => {
  const body = document.getElementsByTagName('body')[0]
  body.classList.remove('overflow-hidden')
}
const currentProduct = useState('currentProduct', () => null)
onMounted(() => {
  currentProduct.value = null
  enableScroll()
})
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <div>
    <div class="container">
      <div class="px-5 pt-5 text-dark">
        <div
          v-if="Object.keys(categories[id]).length > 2"
          class="nav-cat overflow-x-scroll flex w-90vw"
        >
          <div class="flex flex-nowrap gap-3">
            <div
              v-for="category in Object.keys(categories[id])"
              :key="
                categories[id][category][categories[id][category].length - 1].id
              "
              class="w-[140px] ease-in duration-100 bg-white text-dark rounded-[20px] pb-2.5 pt-2.5 px-2.5 border border-borderLight cursor-pointer hover:bg-secondary hover:bg-secondary hover:text-white"
            >
              <a :href="'#' + category">
                <div>
                  <div
                    class="mr-5 rounded-[20px] card-image"
                    :style="`background-image: url(${categories[id][category][0].image});`"
                  ></div>
                  <p class="text-xs font-bold pt-1 text-center">
                    {{ category }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <NuxtLink
          to="/"
          class="absolute"
          :class="
            Object.keys(categories[id]).length > 2
              ? 'top-[155px]'
              : 'top-[45px]'
          "
        >
          <IconMdi:arrowLeft class="text-xl cursor-pointer" />
        </NuxtLink>
        <div
          v-for="category in Object.keys(categories[id])"
          :id="category"
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
            @click="
              () => {
                currentProduct = product
                disableScroll()
              }
            "
          />
        </div>
      </div>
    </div>

    <div v-if="currentProduct" class="fixed left-0 top-0 h-[100vh] w-full">
      <div
        class="absolute z-10 left-0 top-0 h-[100%] w-full w-full bg-black/50 flex items-end"
        @click="
          () => {
            currentProduct = null
            enableScroll()
          }
        "
      ></div>
      <div
        class="absolute z-20 left-0 bottom-0 w-full p-5 bg-white rounded-t-[30px] flex flex-col justify-between"
      >
        <div class="relative">
          <button
            style="padding: 10px"
            class="absolute top-[-45px] right-[-15px] rounded-[50%] arrow-top bg-secondary text-white"
            @click="
              () => {
                currentProduct = null
                enableScroll()
              }
            "
          >
            <IconMdi:close class="text-lg cursor-pointer" />
          </button>
          <img
            :src="currentProduct.image"
            class="rounded-[30px]"
            style="margin: auto;"
            alt=""
          />
          <!-- <div
            class="mr-5 rounded-[30px] modal-image"
            :style="`background-image: url(${});`"
          ></div> -->
          <h3 class="text-2xl mb-3 font-bold mt-5 text-center">
            {{ currentProduct.title }}
          </h3>
          <p class="text-base two-line-ellipsis" style="">
            {{ currentProduct.description }}
          </p>
          <p class="text-lg font-bold mt-3 text-right">
            {{ currentProduct.price }}
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="Object.keys(categories[id]).length > 2"
      class="p-5 fixed bottom-0 right-0"
    >
      <button
        class="rounded-[50%] arrow-top bg-secondary"
        @click="scrollToTop()"
      >
        <IconMdi:arrowTop class="text-xl cursor-pointer text-white" />
      </button>
    </div>
  </div>
</template>
<style scoped>
.arrow-top {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  transition: all 0.2s;
}
.arrow-top:active {
  transform: scale(1.2);
}
.nav-cat::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.nav-cat {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.modal-image {
  height: 35vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-image {
  height: 70px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

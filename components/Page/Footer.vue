<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import p from './../../package.json'
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <footer class="">
    <section
      class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"
    >
      <div class="w-full py-4 text-center md:text-left">
        <div class="mb-1 text-xl">
          {{ app.name }}
        </div>

        <a
          class="underline underline-offset-4"
          href="https://goo.gl/maps/mLWxYPYsoKWmA4q96"
          target="_blank"
          >Address</a
        >
        <div class="mt-1">Follow us on</div>
        <div>
          <IconMdi:facebook class="text-xl cursor-pointer" />
          <a href="https://www.instagram.com/the21_lounge/" target="_blank">
            <IconMdi:instagram class="text-xl cursor-pointer" />
          </a>
        </div>
        <div class="text-xs text-gray-600 mt-1 dark:text-gray-400">
          Copyright © 2023 Quick Menu
          >. All rights reserved. Made with
          <span class="text-red-500">❤</span>
        </div>
      </div>
    </section>
  </footer>
</template>

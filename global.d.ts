import { ModuleOptions as NuxtWindiCssModuleOptions } from 'nuxt-windicss';

import { ModuleOptions as NuxtContentModuleOptions } from '@nuxt/content';

declare module '@nuxt/schema' {
  interface AppConfigInput {
    name: string
    author: {
      name: string
      link: string
    }
  }
}

declare module 'nuxt/config' {
  interface NuxtConfig {
    windicss?: NuxtWindiCssModuleOptions
    content?: Partial<NuxtContentModuleOptions>
  }
}

export {}

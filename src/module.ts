import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  agent: 'Clippy' | 'Bonzi' | 'F1' | 'Genie' | 'Genius' | 'Links' | 'Merlin' | 'Peedy' | 'Rocky' | 'Rover'
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-clippy',
    configKey: 'nuxtClippy',
  },
  defaults: {
    agent: 'Clippy',
  },
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.nuxtClippy = options
  },
})

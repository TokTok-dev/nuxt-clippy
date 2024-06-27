import type { Agent } from 'clippyts'
import clippy from 'clippyts'
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'

export default function useClippy() {
  const config = useRuntimeConfig()
  const clippyAgent = ref<Agent>()

  clippy.load({
    name: config.public.nuxtClippy.agent,
    selector: 'nuxt-clippy',
    successCb: (agent) => {
      clippyAgent.value = agent
    },
    failCb: (e) => {
      console.error(e)
    },
  })

  return {
    clippyAgent,
  }
}

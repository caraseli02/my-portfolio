import { ref, onMounted, onUnmounted } from 'vue'

const isTouchDevice = ref(false)
const prefersReducedMotion = ref(false)
const supportsHover = ref(true)
let initialized = false

function init() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  supportsHover.value = hoverQuery.matches
  isTouchDevice.value = !hoverQuery.matches
  prefersReducedMotion.value = motionQuery.matches

  hoverQuery.addEventListener('change', (e) => {
    supportsHover.value = e.matches
    isTouchDevice.value = !e.matches
  })

  motionQuery.addEventListener('change', (e) => {
    prefersReducedMotion.value = e.matches
  })
}

export function useDeviceDetection() {
  onMounted(init)
  return { isTouchDevice, prefersReducedMotion, supportsHover }
}

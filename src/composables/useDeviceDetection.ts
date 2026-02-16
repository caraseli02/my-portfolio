import { ref, onMounted, onUnmounted } from 'vue'

const isTouchDevice = ref(false)
const prefersReducedMotion = ref(false)
const supportsHover = ref(true)
let initialized = false
let hoverQuery: MediaQueryList | null = null
let motionQuery: MediaQueryList | null = null

function handleHoverChange(e: MediaQueryListEvent) {
  supportsHover.value = e.matches
  isTouchDevice.value = !e.matches
}

function handleMotionChange(e: MediaQueryListEvent) {
  prefersReducedMotion.value = e.matches
}

function init() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  supportsHover.value = hoverQuery.matches
  isTouchDevice.value = !hoverQuery.matches
  prefersReducedMotion.value = motionQuery.matches

  hoverQuery.addEventListener('change', handleHoverChange)
  motionQuery.addEventListener('change', handleMotionChange)
}

function cleanup() {
  if (hoverQuery) {
    hoverQuery.removeEventListener('change', handleHoverChange)
  }
  if (motionQuery) {
    motionQuery.removeEventListener('change', handleMotionChange)
  }
}

export function useDeviceDetection() {
  onMounted(init)
  onUnmounted(cleanup)
  return { isTouchDevice, prefersReducedMotion, supportsHover }
}

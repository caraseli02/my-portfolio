import { ref, onMounted, onUnmounted } from 'vue'
import { useDeviceDetection } from './useDeviceDetection'

const x = ref(0)
const y = ref(0)
const smoothX = ref(0)
const smoothY = ref(0)

let refCount = 0
let rafId: number | null = null
const LERP = 0.15

function onMouseMove(e: MouseEvent) {
  x.value = e.clientX
  y.value = e.clientY
}

function tick() {
  smoothX.value += (x.value - smoothX.value) * LERP
  smoothY.value += (y.value - smoothY.value) * LERP
  rafId = requestAnimationFrame(tick)
}

function start() {
  document.addEventListener('mousemove', onMouseMove, { passive: true })
  rafId = requestAnimationFrame(tick)
}

function stop() {
  document.removeEventListener('mousemove', onMouseMove)
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

export function useMousePosition() {
  const { isTouchDevice } = useDeviceDetection()

  onMounted(() => {
    refCount++
    if (refCount === 1 && !isTouchDevice.value) {
      start()
    }
  })

  onUnmounted(() => {
    refCount--
    if (refCount === 0) {
      stop()
    }
  })

  return { x, y, smoothX, smoothY }
}

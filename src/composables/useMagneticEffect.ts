import { ref, onMounted, onUnmounted, watch, Ref } from 'vue'
import { useMousePosition } from './useMousePosition'
import { useDeviceDetection } from './useDeviceDetection'

interface MagneticOptions {
  strength?: number
  radius?: number
  ease?: number
}

export function useMagneticEffect(options: MagneticOptions = {}) {
  const {
    strength = 0.3,
    radius = 150,
    ease = 0.15
  } = options

  const magneticRef: Ref<HTMLElement | null> = ref(null)
  const { x, y } = useMousePosition()
  const { isTouchDevice } = useDeviceDetection()

  let rafId: number | null = null
  let currentX = 0
  let currentY = 0
  let targetX = 0
  let targetY = 0
  let cachedRect: DOMRect | null = null
  let resizeTimer: ReturnType<typeof setTimeout> | null = null

  function updateRect() {
    if (magneticRef.value) {
      cachedRect = magneticRef.value.getBoundingClientRect()
    }
  }

  function onScrollResize() {
    if (resizeTimer) clearTimeout(resizeTimer)
    resizeTimer = setTimeout(updateRect, 100)
  }

  function tick() {
    if (!magneticRef.value || !cachedRect) {
      rafId = requestAnimationFrame(tick)
      return
    }

    const centerX = cachedRect.left + cachedRect.width / 2
    const centerY = cachedRect.top + cachedRect.height / 2
    const dx = x.value - centerX
    const dy = y.value - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < radius) {
      const pull = strength * (1 - dist / radius)
      targetX = dx * pull
      targetY = dy * pull
    } else {
      targetX = 0
      targetY = 0
    }

    currentX += (targetX - currentX) * ease
    currentY += (targetY - currentY) * ease

    if (Math.abs(currentX) > 0.1 || Math.abs(currentY) > 0.1) {
      magneticRef.value.style.transform = `translate(${currentX}px, ${currentY}px)`
    } else if (targetX === 0 && targetY === 0) {
      magneticRef.value.style.transform = ''
    }

    rafId = requestAnimationFrame(tick)
  }

  onMounted(() => {
    if (isTouchDevice.value || !magneticRef.value) return

    updateRect()
    magneticRef.value.style.willChange = 'transform'
    rafId = requestAnimationFrame(tick)

    window.addEventListener('scroll', onScrollResize, { passive: true })
    window.addEventListener('resize', onScrollResize, { passive: true })
  })

  onUnmounted(() => {
    if (rafId !== null) cancelAnimationFrame(rafId)
    if (resizeTimer) clearTimeout(resizeTimer)
    window.removeEventListener('scroll', onScrollResize)
    window.removeEventListener('resize', onScrollResize)
    if (magneticRef.value) {
      magneticRef.value.style.willChange = ''
      magneticRef.value.style.transform = ''
    }
  })

  return { magneticRef }
}

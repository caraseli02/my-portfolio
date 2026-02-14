import { ref, onMounted, onUnmounted, watchEffect, Ref } from 'vue'
import { useMousePosition } from './useMousePosition'
import { useDeviceDetection } from './useDeviceDetection'

interface ParallaxOptions {
  intensity?: number
}

export function useParallaxDepth(options: ParallaxOptions = {}) {
  const { intensity = 20 } = options

  const containerRef: Ref<HTMLElement | null> = ref(null)
  const { x, y } = useMousePosition()
  const { isTouchDevice, prefersReducedMotion } = useDeviceDetection()

  let layers: { el: HTMLElement; depth: number }[] = []
  let rafId: number | null = null
  let active = false

  function tick() {
    if (!active) return

    const normalizedX = (x.value / window.innerWidth - 0.5) * 2
    const normalizedY = (y.value / window.innerHeight - 0.5) * 2

    for (const layer of layers) {
      const factor = layer.depth * intensity
      layer.el.style.transform = `translate3d(${normalizedX * factor}px, ${normalizedY * factor}px, 0)`
    }

    rafId = requestAnimationFrame(tick)
  }

  onMounted(() => {
    if (isTouchDevice.value || prefersReducedMotion.value || !containerRef.value) return

    const children = containerRef.value.querySelectorAll<HTMLElement>('[data-depth]')
    layers = Array.from(children).map((el) => ({
      el,
      depth: parseFloat(el.dataset.depth || '1')
    }))

    if (layers.length === 0) return

    layers.forEach((l) => {
      l.el.style.willChange = 'transform'
      l.el.style.transition = 'transform 0.1s ease-out'
    })

    active = true
    rafId = requestAnimationFrame(tick)
  })

  onUnmounted(() => {
    active = false
    if (rafId !== null) cancelAnimationFrame(rafId)
    layers.forEach((l) => {
      l.el.style.willChange = ''
      l.el.style.transform = ''
      l.el.style.transition = ''
    })
    layers = []
  })

  return { containerRef }
}

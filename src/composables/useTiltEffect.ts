import { ref, onMounted, onUnmounted, Ref } from 'vue'
import { useDeviceDetection } from './useDeviceDetection'

interface TiltOptions {
  maxTilt?: number
  perspective?: number
  speed?: number
  scale?: number
  glare?: boolean
}

export function useTiltEffect(options: TiltOptions = {}) {
  const {
    maxTilt = 8,
    perspective = 1000,
    speed = 400,
    scale = 1.02,
    glare = true
  } = options

  const tiltRef: Ref<HTMLElement | null> = ref(null)
  const { isTouchDevice, prefersReducedMotion } = useDeviceDetection()

  let glareEl: HTMLElement | null = null

  function onMouseEnter() {
    if (!tiltRef.value) return
    tiltRef.value.style.willChange = 'transform'
    tiltRef.value.style.transition = 'none'
    if (glareEl) glareEl.style.transition = 'none'
  }

  function onMouseMove(e: MouseEvent) {
    if (!tiltRef.value) return
    const rect = tiltRef.value.getBoundingClientRect()
    const normalizedX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const normalizedY = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    const rotateX = -normalizedY * maxTilt
    const rotateY = normalizedX * maxTilt

    tiltRef.value.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`

    if (glareEl) {
      const angle = Math.atan2(normalizedY, normalizedX) * (180 / Math.PI) + 180
      glareEl.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.15) 0%, transparent 60%)`
      glareEl.style.opacity = `${Math.max(Math.abs(normalizedX), Math.abs(normalizedY)) * 0.7}`
    }
  }

  function onMouseLeave() {
    if (!tiltRef.value) return
    tiltRef.value.style.transition = `transform ${speed}ms ease-out`
    tiltRef.value.style.transform = ''
    tiltRef.value.style.willChange = ''

    if (glareEl) {
      glareEl.style.transition = `opacity ${speed}ms ease-out`
      glareEl.style.opacity = '0'
    }
  }

  onMounted(() => {
    if (isTouchDevice.value || prefersReducedMotion.value || !tiltRef.value) return

    if (glare) {
      glareEl = document.createElement('div')
      glareEl.style.cssText = `
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        opacity: 0;
        z-index: 1;
      `
      tiltRef.value.style.position = 'relative'
      tiltRef.value.appendChild(glareEl)
    }

    tiltRef.value.addEventListener('mouseenter', onMouseEnter)
    tiltRef.value.addEventListener('mousemove', onMouseMove)
    tiltRef.value.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    if (tiltRef.value) {
      tiltRef.value.removeEventListener('mouseenter', onMouseEnter)
      tiltRef.value.removeEventListener('mousemove', onMouseMove)
      tiltRef.value.removeEventListener('mouseleave', onMouseLeave)
      if (glareEl && tiltRef.value.contains(glareEl)) {
        tiltRef.value.removeChild(glareEl)
      }
    }
    glareEl = null
  })

  return { tiltRef }
}

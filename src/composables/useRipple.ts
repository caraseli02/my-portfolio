import { ref, onMounted, onUnmounted, Ref } from 'vue'
import { useDeviceDetection } from './useDeviceDetection'

interface RippleOptions {
  color?: string
  duration?: number
}

export function useRipple(options: RippleOptions = {}) {
  const {
    color = 'rgba(66, 184, 131, 0.3)',
    duration = 600
  } = options

  const rippleRef: Ref<HTMLElement | null> = ref(null)
  const { prefersReducedMotion } = useDeviceDetection()

  function handleClick(e: MouseEvent) {
    if (prefersReducedMotion.value || !rippleRef.value) return

    const el = rippleRef.value
    const rect = el.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const span = document.createElement('span')
    span.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${color};
      transform: scale(0);
      animation: ripple-expand ${duration}ms ease-out forwards;
      pointer-events: none;
    `

    el.appendChild(span)
    span.addEventListener('animationend', () => span.remove())
  }

  onMounted(() => {
    if (rippleRef.value) {
      rippleRef.value.addEventListener('click', handleClick)
    }
  })

  onUnmounted(() => {
    if (rippleRef.value) {
      rippleRef.value.removeEventListener('click', handleClick)
    }
  })

  return { rippleRef }
}

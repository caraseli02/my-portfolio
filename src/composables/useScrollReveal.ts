import { ref, onMounted, onUnmounted, Ref } from 'vue'
import { useDeviceDetection } from './useDeviceDetection'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options

  const revealRef: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const { prefersReducedMotion } = useDeviceDetection()

  onMounted(() => {
    if (prefersReducedMotion.value) {
      isVisible.value = true
      return
    }

    if (!revealRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (once && observer && revealRef.value) {
              observer.unobserve(revealRef.value)
            }
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(revealRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return { revealRef, isVisible }
}

export function useScrollRevealGroup(count: number, options: ScrollRevealOptions = {}) {
  const items = Array.from({ length: count }, () => useScrollReveal(options))
  return items
}

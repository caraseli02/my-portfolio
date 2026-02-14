import { ref, onMounted, onUnmounted, Ref } from 'vue'
import { useDeviceDetection } from './useDeviceDetection'

interface ScrollProgressOptions {
  sectionSelector?: string
  activationOffset?: number
}

export function useScrollProgress(options: ScrollProgressOptions = {}) {
  const {
    sectionSelector = '[data-phase]',
    activationOffset = 0.4,
  } = options

  const containerRef: Ref<HTMLElement | null> = ref(null)
  const activeIndex = ref(0)
  const progress = ref(0)
  const totalPhases = ref(0)
  const { prefersReducedMotion } = useDeviceDetection()

  let sections: HTMLElement[] = []
  let ticking = false

  function onScroll() {
    if (ticking || prefersReducedMotion.value) return
    ticking = true
    requestAnimationFrame(() => {
      update()
      ticking = false
    })
  }

  function update() {
    if (!containerRef.value || sections.length === 0) return

    const containerRect = containerRef.value.getBoundingClientRect()
    const viewportTrigger = window.innerHeight * activationOffset

    const scrolledPast = viewportTrigger - containerRect.top
    progress.value = Math.max(0, Math.min(1, scrolledPast / containerRect.height))

    let currentActive = 0
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect()
      if (rect.top <= viewportTrigger) {
        currentActive = i
      }
    }
    activeIndex.value = currentActive
    totalPhases.value = sections.length
  }

  onMounted(() => {
    if (!containerRef.value) return

    sections = Array.from(
      containerRef.value.querySelectorAll<HTMLElement>(sectionSelector)
    )
    totalPhases.value = sections.length

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    sections = []
  })

  return {
    containerRef,
    activeIndex,
    progress,
    totalPhases,
  }
}

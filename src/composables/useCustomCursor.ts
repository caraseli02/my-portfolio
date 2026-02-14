import { ref, onMounted, onUnmounted } from 'vue'
import { useMousePosition } from './useMousePosition'
import { useDeviceDetection } from './useDeviceDetection'

export type CursorType = 'default' | 'link' | 'button' | 'card' | 'text' | 'hidden'

const cursorType = ref<CursorType>('default')
const cursorVisible = ref(false)

export function useCustomCursor() {
  const { x, y, smoothX, smoothY } = useMousePosition()
  const { isTouchDevice } = useDeviceDetection()

  function detectType(target: EventTarget | null) {
    if (!target || !(target instanceof HTMLElement)) {
      cursorType.value = 'default'
      return
    }

    const el = target as HTMLElement

    // data-cursor attribute has highest priority
    const dataCursor = el.closest('[data-cursor]') as HTMLElement | null
    if (dataCursor) {
      cursorType.value = dataCursor.dataset.cursor as CursorType
      return
    }

    // Semantic detection
    if (el.closest('a[href]')) {
      cursorType.value = 'link'
    } else if (el.closest('button, [role="button"]')) {
      cursorType.value = 'button'
    } else {
      cursorType.value = 'default'
    }
  }

  function onMouseOver(e: MouseEvent) {
    detectType(e.target)
  }

  function onMouseEnter() {
    cursorVisible.value = true
  }

  function onMouseLeave() {
    cursorVisible.value = false
  }

  onMounted(() => {
    if (isTouchDevice.value) return

    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    cursorVisible.value = true
  })

  onUnmounted(() => {
    document.removeEventListener('mouseover', onMouseOver)
    document.removeEventListener('mouseenter', onMouseEnter)
    document.removeEventListener('mouseleave', onMouseLeave)
  })

  return {
    cursorX: x,
    cursorY: y,
    smoothCursorX: smoothX,
    smoothCursorY: smoothY,
    cursorType,
    cursorVisible,
    isTouchDevice
  }
}

import { ref, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')
let initialized = false

function apply(t: Theme) {
  theme.value = t
  localStorage.setItem('theme', t)
  document.documentElement.classList.toggle('dark', t === 'dark')
}

export function useTheme() {
  onMounted(() => {
    if (initialized) return
    initialized = true
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) {
      apply(stored)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      apply(prefersDark ? 'dark' : 'light')
    }
  })

  function toggle() {
    apply(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggle }
}

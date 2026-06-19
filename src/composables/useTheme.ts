import { ref, watch } from 'vue'

const isDark = ref<boolean>(false)

export function useTheme() {
  const initTheme = () => {
    const savedTheme = localStorage.getItem('app-theme')
    if (savedTheme === 'dark') {
      isDark.value = true
    } else if (savedTheme === 'light') {
      isDark.value = false
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme(isDark.value)
  }

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  watch(isDark, (newVal) => {
    applyTheme(newVal)
    localStorage.setItem('app-theme', newVal ? 'dark' : 'light')
  })

  const setLight = () => { isDark.value = false }
  const setDark = () => { isDark.value = true }
  const toggle = () => { isDark.value = !isDark.value }

  return {
    isDark,
    setLight,
    setDark,
    toggle,
    initTheme
  }
}
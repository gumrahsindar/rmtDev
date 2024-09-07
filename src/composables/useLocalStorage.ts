import { Ref, ref, watchEffect } from "vue"

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const storedValue = ref<T>(initialValue)

  const setItem = (value: Ref<T>) => {
    watchEffect(() => {
      localStorage.setItem(key, JSON.stringify(value.value))
    })
  }

  const getItem = () => {
    const value = localStorage.getItem(key)
    if (value) {
      storedValue.value = JSON.parse(value)
    }
  }

  // Initialize storedValue with the value from localStorage if it exists
  getItem()

  return {
    storedValue,
    setItem,
    getItem,
  }
}

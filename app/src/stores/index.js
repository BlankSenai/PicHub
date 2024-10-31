import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const jwt = ref(JSON.parse(localStorage.getItem('token')) || null)

  function setToken(token) {
    jwt.value = token

    localStorage.setItem('token', JSON.stringify(jwt.value))
  }

  function logOut() {
    setToken(null)
  }

  return { jwt, setToken, logOut}
})
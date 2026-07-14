import { ref } from 'vue'

const isAuthenticated = ref(localStorage.getItem('library-auth') === 'true')

const login = (username, password) => {
  const validUsername = 'student'
  const validPassword = 'Library@123'

  if (username === validUsername && password === validPassword) {
    isAuthenticated.value = true
    localStorage.setItem('library-auth', 'true')
    return true
  }

  return false
}

const logout = () => {
  isAuthenticated.value = false
  localStorage.removeItem('library-auth')
}

export { isAuthenticated, login, logout }
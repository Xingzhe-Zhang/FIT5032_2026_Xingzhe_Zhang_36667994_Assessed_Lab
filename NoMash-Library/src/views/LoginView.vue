<template>
  <section class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-5">
        <div class="card">
          <div class="card-header">
            Member Login
          </div>

          <div class="card-body">
            <div v-if="route.query.denied" class="alert alert-warning">
              Please login before opening the protected About page.
            </div>

            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="login-username" class="form-label">Username</label>
                <input
                  id="login-username"
                  type="text"
                  class="form-control"
                  v-model.trim="username"
                />
              </div>

              <div class="mb-3">
                <label for="login-password" class="form-label">Password</label>
                <input
                  id="login-password"
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>

              <div v-if="errorMessage" class="text-danger small mb-3">
                {{ errorMessage }}
              </div>

              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </form>

            <p class="text-muted small mt-3 mb-0">
              Demo credentials: student / Library@123
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login } from '../auth'

const route = useRoute()
const router = useRouter()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
  const success = login(username.value, password.value)

  if (!success) {
    errorMessage.value = 'Invalid username or password.'
    router.push({ name: 'AccessDenied' })
    return
  }

  const redirectPath = route.query.redirect || '/about'
  router.push(redirectPath)
}
</script>
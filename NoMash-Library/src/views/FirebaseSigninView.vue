<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <h1>Sign in</h1>

        <form @submit.prevent="signin">
          <div class="mb-3">
            <label for="signin-email" class="form-label">Email</label>
            <input
              id="signin-email"
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>

          <div class="mb-3">
            <label for="signin-password" class="form-label">Password</label>
            <input
              id="signin-password"
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Sign in via Firebase
          </button>
        </form>

        <p v-if="errorMessage" class="text-danger mt-3">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const router = useRouter()
const auth = getAuth()

const signin = () => {
  errorMessage.value = ''

  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
    .then(() => {
      console.log('Firebase Login Successful!')
      console.log(auth.currentUser)

      router.push('/')
    })
    .catch((error) => {
      console.log(error.code)
      errorMessage.value = error.code
    })
}
</script>
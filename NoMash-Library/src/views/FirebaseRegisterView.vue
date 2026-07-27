<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <h1>Create an Account</h1>

        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="register-email" class="form-label">Email</label>
            <input
              id="register-email"
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>

          <div class="mb-3">
            <label for="register-password" class="form-label">Password</label>
            <input
              id="register-password"
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>

          <div class="mb-3">
            <label for="register-role" class="form-label">Role</label>
            <select id="register-role" v-model="role" class="form-select">
              <option value="role1">Role 1</option>
              <option value="role2">Role 2</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">
            Save to Firebase
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
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import db from '../firebase/init.js'

const email = ref('')
const password = ref('')
const role = ref('role1')
const errorMessage = ref('')

const router = useRouter()
const auth = getAuth()

const register = () => {
  errorMessage.value = ''

  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
    .then(async (userCredential) => {
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: userCredential.user.email,
        role: role.value
      })

      console.log('Firebase Register Successful!', {
        email: userCredential.user.email,
        role: role.value
      })

      await signOut(auth)
      router.push('/FireLogin')
    })
    .catch((error) => {
      console.log(error.code)
      errorMessage.value = error.code
    })
}
</script>

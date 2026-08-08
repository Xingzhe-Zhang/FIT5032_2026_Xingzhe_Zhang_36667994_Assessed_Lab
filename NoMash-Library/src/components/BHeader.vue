<!-- <template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Home (Week 4)</a>
        </li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact us</a></li>
      </ul>
    </header>
  </div>
</template> -->
<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            active-class="active"
            aria-current="page"
          >
            Home (Week 5)
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link"
            active-class="active"
          >
            About
          </router-link>
        </li>

        <li v-if="!isAuthenticated" class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
            active-class="active"
          >
            Login
          </router-link>
        </li>

        <li v-else class="nav-item">
          <button
            type="button"
            class="nav-link btn btn-link"
            @click="handleLogout"
          >
            Logout
          </button>
        </li>
        <li v-if="!firebaseUser" class="nav-item">
          <router-link to="/Firelogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li v-else class="nav-item">
          <button type="button" class="nav-link btn btn-link" @click="handleFirebaseLogout">
            Firebase Logout
          </button>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/addbook"
            class="nav-link"
            active-class="active"
          >
            Add Book
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/GetWeather" class="nav-link" active-class="active">
            Get Weather
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/CountBookAPI" class="nav-link" active-class="active">
            Count Book API
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/GetAllBookAPI" class="nav-link" active-class="active">
            Get All Book API
          </RouterLink>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { isAuthenticated, logout } from '../auth'

const router = useRouter()
const firebaseAuth = getAuth()
const firebaseUser = ref(firebaseAuth.currentUser)

onAuthStateChanged(firebaseAuth, (user) => {
  firebaseUser.value = user
})

const handleLogout = () => {
  logout()
  router.push('/login')
}

const handleFirebaseLogout = async () => {
  const user = firebaseAuth.currentUser
  console.log('Before logout:', {
    uid: user?.uid,
    email: user?.email
  })
  await signOut(firebaseAuth)
  router.push('/FireLogin')

  console.log('After logout:', firebaseAuth.currentUser)
}
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>

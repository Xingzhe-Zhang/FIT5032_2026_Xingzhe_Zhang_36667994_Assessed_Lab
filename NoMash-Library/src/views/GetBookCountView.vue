<template>
  <main class="container py-4">
    <section class="card shadow-sm text-center">
      <div class="card-body">
        <h1>Book Counter</h1>

        <button
          class="btn btn-primary"
          type="button"
          :disabled="loading"
          @click="getBookCount"
        >
          {{ loading ? 'Loading...' : 'Get Book Count' }}
        </button>

        <p v-if="count !== null" class="mt-3 mb-0">
          Total number of books: {{ count }}
        </p>

        <p v-if="errorMessage" class="alert alert-danger mt-3 mb-0">
          {{ errorMessage }}
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const count = ref(null)
const loading = ref(false)
const errorMessage = ref('')

async function getBookCount() {
  loading.value = true
  errorMessage.value = ''

  try {
    const response = await axios.get(import.meta.env.VITE_COUNT_BOOKS_URL)
    count.value = response.data.count
  } catch (error) {
    console.error('Error fetching book count:', error)
    errorMessage.value = 'Unable to get the book count.'
    count.value = null
  } finally {
    loading.value = false
  }
}
</script>

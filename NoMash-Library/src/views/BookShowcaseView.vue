<template>
  <main class="container py-4">
    <section class="card shadow-sm">
      <div class="card-body">
        <h1>Book Showcase</h1>
        <p class="text-muted">Browse the books currently available in the library.</p>

        <button class="btn btn-primary" type="button" :disabled="loading" @click="loadShowcase">
          {{ loading ? 'Loading...' : 'Show Available Books' }}
        </button>

        <div v-if="featuredBook" class="alert alert-info mt-3">
          <strong>Featured Book:</strong> {{ featuredBook.name }} (ISBN: {{ featuredBook.isbn }})
        </div>

        <ul v-if="books.length" class="list-group mt-3">
          <li v-for="book in books" :key="book.isbn" class="list-group-item">
            {{ book.name }} <span class="text-muted">— ISBN: {{ book.isbn }}</span>
          </li>
        </ul>

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

const books = ref([])
const featuredBook = ref(null)
const loading = ref(false)
const errorMessage = ref('')

async function loadShowcase() {
  loading.value = true
  errorMessage.value = ''

  try {
    const response = await axios.get(import.meta.env.VITE_BOOK_SHOWCASE_URL)
    books.value = response.data.books
    featuredBook.value = response.data.featuredBook
  } catch (error) {
    console.error('Error loading book showcase:', error)
    errorMessage.value = 'Unable to load the book showcase.'
  } finally {
    loading.value = false
  }
}
</script>

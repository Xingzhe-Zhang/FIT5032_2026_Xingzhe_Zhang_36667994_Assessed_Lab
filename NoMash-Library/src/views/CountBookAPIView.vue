<template>
  <main class="container py-4">
    <section class="card shadow-sm">
      <div class="card-body">
        <h1>Count Book API</h1>
        <p>Authors: {{ authorsCount }}</p>
        <p>Books: {{ totalBooks }}</p>

        <pre class="bg-light border rounded p-3 mb-0">{{ JSON.stringify(apiResponse, null, 2) }}</pre>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import authors from '../assets/json/authors.json'

const authorsCount = authors.length
const totalBooks = authors.reduce((total, author) => total + author.famousWorks.length, 0)

const apiResponse = computed(() => ({
  success: true,
  data: {
    authorsCount,
    totalBooks,
    authors: authors.map((author) => ({
      name: author.name,
      bookCount: author.famousWorks.length
    }))
  }
}))
</script>

<template>
  <main class="container py-4">
    <section class="card shadow-sm">
      <div class="card-body">
        <h1>Get All Book API</h1>
        <pre class="bg-light border rounded p-3 mb-0">{{ JSON.stringify(apiResponse, null, 2) }}</pre>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import authors from '../assets/json/authors.json'

const apiResponse = computed(() => ({
  success: true,
  data: authors.flatMap((author) => {
    return author.famousWorks.map((book) => ({
      author: author.name,
      title: book.title,
      year: book.year
    }))
  })
}))
</script>

<template>
  <main class="container py-4">
    <section class="card shadow-sm">
      <div class="card-body">
        <h1>Add Book</h1>

        <form @submit.prevent="addBook">
          <div class="mb-3">
            <label for="isbn" class="form-label">ISBN:</label>

            <input
              id="isbn"
              v-model="isbn"
              type="text"
              class="form-control"
              required
            />
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">Name:</label>

            <input
              id="name"
              v-model="name"
              type="text"
              class="form-control"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    </section>

    <BookList ref="bookListRef" class="mt-4" />
  </main>
</template>

<script>
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'

import db from '../firebase/init.js'
import BookList from '../components/BookList.vue'

export default {
  components: {
    BookList
  },

  setup() {
    const isbn = ref('')
    const name = ref('')
    const bookListRef = ref(null)

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)

        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number')
          return
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        })

        isbn.value = ''
        name.value = ''

        await bookListRef.value?.refreshBooks()

        alert('Book added successfully!')
      } catch (error) {
        console.error('Error adding book:', error)
        alert('Failed to add book')
      }
    }

    return {
      isbn,
      name,
      bookListRef,
      addBook
    }
  }
}
</script>
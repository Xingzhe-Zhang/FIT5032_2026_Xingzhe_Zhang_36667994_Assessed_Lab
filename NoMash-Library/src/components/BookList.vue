<template>
  <section class="card shadow-sm">
    <div class="card-body">
      <h2 class="h3">Firestore Books</h2>

      <p class="text-muted">
        Use the buttons below to demonstrate Firestore queries.
      </p>

      <div class="d-flex flex-wrap gap-2 mb-3">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="runQuery('all')"
        >
          All books
        </button>

        <button
          class="btn btn-outline-primary"
          type="button"
          @click="runQuery('where')"
        >
          WHERE isbn &gt; 1000
        </button>

        <button
          class="btn btn-outline-primary"
          type="button"
          @click="runQuery('order')"
        >
          ORDER BY isbn
        </button>

        <button
          class="btn btn-outline-primary"
          type="button"
          @click="runQuery('limit')"
        >
          LIMIT 3
        </button>

        <button
          class="btn btn-dark"
          type="button"
          @click="runQuery('combined')"
        >
          WHERE + ORDER BY + LIMIT
        </button>
      </div>

      <div class="alert alert-info py-2">
        <strong>Current query:</strong>
        {{ queryDescription }}
      </div>

      <div
        v-if="successMessage"
        class="alert alert-success"
        role="status"
      >
        {{ successMessage }}
      </div>

      <div
        v-if="errorMessage"
        class="alert alert-danger"
        role="alert"
      >
        {{ errorMessage }}
      </div>

      <p v-if="loading">Loading books...</p>

      <p v-else-if="books.length === 0" class="text-muted">
        No books matched this query.
      </p>

      <div v-else class="table-responsive">
        <table class="table table-striped table-bordered align-middle">
          <thead>
            <tr>
              <th scope="col">Book name</th>
              <th scope="col">ISBN</th>
              <th scope="col">Document ID</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="book in books" :key="book.id">
              <template v-if="editingId === book.id">
                <td>
                  <input
                    v-model.trim="editName"
                    class="form-control"
                    type="text"
                    required
                  />
                </td>

                <td>
                  <input
                    v-model.number="editIsbn"
                    class="form-control"
                    type="number"
                    min="1"
                    required
                  />
                </td>

                <td>
                  <code>{{ book.id }}</code>
                </td>

                <td>
                  <div class="d-flex flex-wrap gap-2">
                    <button
                      class="btn btn-success btn-sm"
                      type="button"
                      @click="saveEdit(book.id)"
                    >
                      Save
                    </button>

                    <button
                      class="btn btn-secondary btn-sm"
                      type="button"
                      @click="cancelEdit"
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </template>

              <template v-else>
                <td>{{ book.name }}</td>
                <td>{{ book.isbn }}</td>
                <td>
                  <code>{{ book.id }}</code>
                </td>

                <td>
                  <div class="d-flex flex-wrap gap-2">
                    <button
                      class="btn btn-warning btn-sm"
                      type="button"
                      @click="startEdit(book)"
                    >
                      Edit
                    </button>

                    <button
                      class="btn btn-danger btn-sm"
                      type="button"
                      @click="removeBook(book)"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where
} from 'firebase/firestore'

import db from '../firebase/init.js'

const books = ref([])
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const currentMode = ref('all')
const queryDescription = ref('All documents in the books collection')

const editingId = ref(null)
const editName = ref('')
const editIsbn = ref(null)

async function runQuery(mode = 'all') {
  loading.value = true
  errorMessage.value = ''
  currentMode.value = mode

  try {
    const booksCollection = collection(db, 'books')
    let booksQuery = booksCollection

    if (mode === 'where') {
      booksQuery = query(
        booksCollection,
        where('isbn', '>', 1000)
      )

      queryDescription.value = 'where("isbn", ">", 1000)'
    }

    if (mode === 'order') {
      booksQuery = query(
        booksCollection,
        orderBy('isbn', 'asc')
      )

      queryDescription.value = 'orderBy("isbn", "asc")'
    }

    if (mode === 'limit') {
      booksQuery = query(
        booksCollection,
        limit(3)
      )

      queryDescription.value = 'limit(3)'
    }

    if (mode === 'combined') {
      booksQuery = query(
        booksCollection,
        where('isbn', '>', 1000),
        orderBy('isbn', 'asc'),
        limit(3)
      )

      queryDescription.value =
        'where("isbn", ">", 1000), orderBy("isbn", "asc"), limit(3)'
    }

    if (mode === 'all') {
      queryDescription.value = 'All documents in the books collection'
    }

    const querySnapshot = await getDocs(booksQuery)

    books.value = querySnapshot.docs.map((documentSnapshot) => ({
      id: documentSnapshot.id,
      ...documentSnapshot.data()
    }))
  } catch (error) {
    console.error('Error retrieving books:', error)
    errorMessage.value = `Unable to retrieve books: ${error.message}`
  } finally {
    loading.value = false
  }
}

function startEdit(book) {
  successMessage.value = ''
  errorMessage.value = ''

  editingId.value = book.id
  editName.value = book.name
  editIsbn.value = book.isbn
}

function cancelEdit() {
  editingId.value = null
  editName.value = ''
  editIsbn.value = null
}

async function saveEdit(bookId) {
  successMessage.value = ''
  errorMessage.value = ''

  const numericIsbn = Number(editIsbn.value)
  const trimmedName = editName.value.trim()

  if (!Number.isFinite(numericIsbn) || numericIsbn <= 0) {
    errorMessage.value = 'ISBN must be a positive number.'
    return
  }

  if (!trimmedName) {
    errorMessage.value = 'Book name is required.'
    return
  }

  try {
    const bookReference = doc(db, 'books', bookId)

    await updateDoc(bookReference, {
      isbn: numericIsbn,
      name: trimmedName
    })

    cancelEdit()

    successMessage.value =
      `Book ${bookId} was updated successfully.`

    await runQuery(currentMode.value)
  } catch (error) {
    console.error('Error updating book:', error)
    errorMessage.value = `Unable to update book: ${error.message}`
  }
}

async function removeBook(book) {
  successMessage.value = ''
  errorMessage.value = ''

  const confirmed = window.confirm(
    `Delete "${book.name}" from Firestore?`
  )

  if (!confirmed) {
    return
  }

  try {
    await deleteDoc(doc(db, 'books', book.id))

    successMessage.value =
      `Book "${book.name}" was deleted successfully.`

    if (editingId.value === book.id) {
      cancelEdit()
    }

    await runQuery(currentMode.value)
  } catch (error) {
    console.error('Error deleting book:', error)
    errorMessage.value = `Unable to delete book: ${error.message}`
  }
}

function refreshBooks() {
  return runQuery(currentMode.value)
}

defineExpose({
  refreshBooks
})

onMounted(() => {
  runQuery('all')
})
</script>
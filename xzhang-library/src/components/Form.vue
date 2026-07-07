<template>
  <main class="container mt-5">
    <div class="row">
      <!-- 
        Breakpoints:
        - col-12: full width on very small screens
        - col-sm-10: slightly narrower on small devices
        - col-md-8: balanced width on tablets/laptops
        - col-lg-6: compact form on larger screens
        - mx-auto: keeps the form centered
      -->
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
        <h1 class="text-center mb-4">User Information Form / Credentials</h1>

        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="formData.username"
            >
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="formData.password"
            >
          </div>

          <div class="form-check mb-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="isAustralian"
              v-model="formData.isAustralian"
            >
            <label for="isAustralian" class="form-check-label">
              Australian Resident?
            </label>
          </div>

          <div class="mb-3">
            <label for="reason" class="form-label">Reason For Joining:</label>
            <textarea
              class="form-control"
              id="reason"
              rows="3"
              v-model="formData.reason"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="gender" class="form-label">Gender</label>
            <select
              class="form-select"
              id="gender"
              v-model="formData.gender"
            >
              <option value="" disabled>Please select your gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary me-2">
            Submit
          </button>

          <button type="button" class="btn btn-secondary" @click="clearForm">
            Clear
          </button>
        </form>
      </div>
    </div>

    <section class="row justify-content-center mt-5" v-if="submittedCards.length">
    <div
        v-for="(card, index) in submittedCards"
        :key="index"
        class="col-12 col-sm-10 col-md-8 col-lg-6 mb-3"
    >
        <div class="card w-100">
        <div class="card-header">
            User Information
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Username: {{ card.username }}</li>
            <li class="list-group-item">Password: {{ card.password }}</li>
            <li class="list-group-item">
            Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
            </li>
            <li class="list-group-item">Gender: {{ card.gender }}</li>
            <li class="list-group-item">Reason: {{ card.reason }}</li>
        </ul>
        </div>
    </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const emptyForm = () => ({
  username: '',
  password: '',
  isAustralian: false,
  reason: '',
  gender: ''
})

const formData = ref(emptyForm())

const submittedCards = ref([])

const submitForm = () => {
  submittedCards.value.push({
    ...formData.value
  })
}

const clearForm = () => {
  formData.value = emptyForm()
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.list-group-item {
  padding: 10px;
}
</style>
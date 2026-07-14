<template>
  <main class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <h1 class="text-center mb-4">User Information Form / Credentials</h1>

        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model.trim="formData.username"
              @blur="() => validateName(true)"
              @input="() => validateName(false)"
            >
            <div v-if="errors.username" class="text-danger small mt-1">
              {{ errors.username }}
            </div>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="formData.password"
              @blur="() => validatePassword(true)"
              @input="() => validatePassword(false)"
            >
            <div v-if="errors.password" class="text-danger small mt-1">
              {{ errors.password }}
            </div>
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
              v-model.trim="formData.reason"
              @blur="() => validateReason(true)"
              @input="() => validateReason(false)"
            ></textarea>
            <div v-if="errors.reason" class="text-danger small mt-1">
              {{ errors.reason }}
            </div>
          </div>

          <div class="mb-4">
            <label for="gender" class="form-label">Gender:</label>
            <select
              class="form-select"
              id="gender"
              v-model="formData.gender"
              @blur="() => validateGender(true)"
              @change="() => validateGender(true)"
            >
              <option value="" disabled>Please select your gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            <div v-if="errors.gender" class="text-danger small mt-1">
              {{ errors.gender }}
            </div>
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

    <section class="row justify-content-center mt-5" v-if="submittedUsers.length">
      <div class="col-12 col-lg-10">
        <h2 class="h4 mb-3">Submitted User Information</h2>

        <DataTable
          :value="submittedUsers"
          stripedRows
          showGridlines
          tableStyle="min-width: 50rem"
        >
          <Column field="username" header="Username" />
          <Column field="password" header="Password" />

          <Column header="Australian Resident">
            <template #body="slotProps">
              {{ slotProps.data.isAustralian ? 'Yes' : 'No' }}
            </template>
          </Column>

          <Column field="gender" header="Gender" />
          <Column field="reason" header="Reason For Joining" />
        </DataTable>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const createEmptyForm = () => ({
  username: '',
  password: '',
  isAustralian: false,
  reason: '',
  gender: ''
})

const formData = ref(createEmptyForm())

const errors = ref({
  username: null,
  password: null,
  resident: null,
  gender: null,
  reason: null
})

const submittedUsers = ref([])

const validateName = (blur) => {
  const username = formData.value.username

  if (username.length < 3) {
    if (blur) {
      errors.value.username = 'Name must be at least 3 characters'
    }
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) {
      errors.value.password = 'Password must be at least 8 characters'
    }
  } else if (!hasUppercase) {
    if (blur) {
      errors.value.password = 'Password must contain at least one uppercase letter'
    }
  } else if (!hasLowercase) {
    if (blur) {
      errors.value.password = 'Password must contain at least one lowercase letter'
    }
  } else if (!hasNumber) {
    if (blur) {
      errors.value.password = 'Password must contain at least one number'
    }
  } else if (!hasSpecialChar) {
    if (blur) {
      errors.value.password = 'Password must contain at least one special character'
    }
  } else {
    errors.value.password = null
  }
}

const validateGender = (blur) => {
  if (!formData.value.gender) {
    if (blur) {
      errors.value.gender = 'Please select a gender'
    }
  } else {
    errors.value.gender = null
  }
}

const validateReason = (blur) => {
  const reason = formData.value.reason

  if (reason.length < 10) {
    if (blur) {
      errors.value.reason = 'Reason must be at least 10 characters'
    }
  } else if (reason.length > 200) {
    if (blur) {
      errors.value.reason = 'Reason must be less than 200 characters'
    }
  } else {
    errors.value.reason = null
  }
}

const validateForm = () => {
  validateName(true)
  validatePassword(true)
  validateGender(true)
  validateReason(true)

  return (
    !errors.value.username &&
    !errors.value.password &&
    !errors.value.gender &&
    !errors.value.reason
  )
}

const submitForm = () => {
  if (!validateForm()) {
    return
  }

  submittedUsers.value.push({
    ...formData.value
  })

  formData.value = createEmptyForm()
}

const clearForm = () => {
  formData.value = createEmptyForm()

  errors.value = {
    username: null,
    password: null,
    resident: null,
    gender: null,
    reason: null
  }
}
</script>
<template>
  <section class="container mt-4">
    <div class="alert alert-danger">
      <h1 class="h4">Access Denied</h1>
      <p>
        You are not allowed to access this page without valid login credentials.
      </p>

      <router-link to="/login" class="btn btn-outline-danger">
        Go to Login
      </router-link>
    </div>
  </section>
</template>

<script setup>
</script>
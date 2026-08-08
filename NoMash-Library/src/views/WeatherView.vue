<template>
  <main class="container py-4">
    <section class="card shadow-sm">
      <div class="card-body">
        <h1>Weather</h1>

        <form class="row g-2" @submit.prevent="searchByCity">
          <div class="col-sm-8">
            <input
              v-model="city"
              class="form-control"
              placeholder="Enter city, for example Clayton, AU"
              required
            />
          </div>
          <div class="col-sm-4">
            <button class="btn btn-primary w-100" type="submit" :disabled="loading">
              Search Weather
            </button>
          </div>
        </form>

        <p v-if="loading" class="mt-3 mb-0">Loading weather...</p>

        <div v-if="weatherData" class="text-center mt-4">
          <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
          <img :src="iconUrl" :alt="weatherData.weather[0].description" />
          <p class="display-6 mb-1">{{ Math.round(weatherData.main.temp) }} °C</p>
          <p class="text-capitalize mb-0">{{ weatherData.weather[0].description }}</p>
        </div>

        <p v-if="errorMessage" class="alert alert-danger mt-3 mb-0">
          {{ errorMessage }}
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

const city = ref('')
const weatherData = ref(null)
const loading = ref(false)
const errorMessage = ref('')
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

const iconUrl = computed(() => {
  return `https://openweathermap.org/img/wn/${weatherData.value.weather[0].icon}@2x.png`
})

async function fetchWeatherData(params) {
  if (!apiKey) {
    errorMessage.value = 'Add your OpenWeather API key to .env.local first.'
    return
  }

  loading.value = true
  errorMessage.value = ''

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        ...params,
        appid: apiKey,
        units: 'metric'
      }
    })
    weatherData.value = response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    errorMessage.value = 'Unable to load weather data.'
  } finally {
    loading.value = false
  }
}

function searchByCity() {
  fetchWeatherData({ q: city.value })
}

function fetchCurrentLocationWeather() {
  if (!navigator.geolocation) {
    errorMessage.value = 'Location is not supported by this browser.'
    return
  }

  navigator.geolocation.getCurrentPosition((position) => {
    fetchWeatherData({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    })
  })
}

onMounted(fetchCurrentLocationWeather)
</script>

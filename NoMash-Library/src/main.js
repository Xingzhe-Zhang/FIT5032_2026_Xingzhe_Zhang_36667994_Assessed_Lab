// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import router from './router' // Import the router instance

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const firebaseConfig = {
  apiKey: "AIzaSyDCcH4M-rRgNhDBFEsUifUO28yV-s6Mr2s",
  authDomain: "nomash-library-lab7-85fde.firebaseapp.com",
  projectId: "nomash-library-lab7-85fde",
  storageBucket: "nomash-library-lab7-85fde.firebasestorage.app",
  messagingSenderId: "1092635941596",
  appId: "1:1092635941596:web:476cf9880d2c6475c17219",
  measurementId: "G-H8WKB3T0BR"
};
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(router) // Use the router instance in the Vue app

app.mount('#app')

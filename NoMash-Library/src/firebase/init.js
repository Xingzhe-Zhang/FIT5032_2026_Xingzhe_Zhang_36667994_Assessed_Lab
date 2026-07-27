// src/firebase/init.js

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCcH4M-rRgNhDBFEsUifUO28yV-s6Mr2s",
  authDomain: "nomash-library-lab7-85fde.firebaseapp.com",
  projectId: "nomash-library-lab7-85fde",
  storageBucket: "nomash-library-lab7-85fde.firebasestorage.app",
  messagingSenderId: "1092635941596",
  appId: "1:1092635941596:web:476cf9880d2c6475c17219",
  measurementId: "G-H8WKB3T0BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore
const db = getFirestore(app)

export { app }
export default db
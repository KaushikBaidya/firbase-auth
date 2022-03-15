import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBCbjPz-Qp_ZNtYoWpvEMyUmqAZ6ESAOuM',
  authDomain: 'bubble-27025.firebaseapp.com',
  projectId: 'bubble-27025',
  storageBucket: 'bubble-27025.appspot.com',
  messagingSenderId: '731417219143',
  appId: '1:731417219143:web:d87b365470abe509966162',
  measurementId: 'G-TK20WDC9WK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

export { app, auth }

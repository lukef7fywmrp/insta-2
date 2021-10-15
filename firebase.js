// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxmlmZ4vvo9epfQFvaCaV-H21k2rZ4-GI',
  authDomain: 'insta-2-7ffc5.firebaseapp.com',
  projectId: 'insta-2-7ffc5',
  storageBucket: 'insta-2-7ffc5.appspot.com',
  messagingSenderId: '838091752479',
  appId: '1:838091752479:web:65059c189c4c46c591c12a',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFZCeS_FWypOJNejQb0KH2cD-4C-saT3w',
  authDomain: 'journal-app-8bfb0.firebaseapp.com',
  projectId: 'journal-app-8bfb0',
  storageBucket: 'journal-app-8bfb0.appspot.com',
  messagingSenderId: '501281969888',
  appId: '1:501281969888:web:a91c365530202e0f9f2285'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
// authenticate functions
export const FirebaseAuth = getAuth(FirebaseApp)
export const FireBaseDB = getFirestore(FirebaseApp)
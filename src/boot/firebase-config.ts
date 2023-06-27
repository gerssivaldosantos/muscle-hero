import { FirebaseApp, initializeApp } from 'firebase/app'
import {
  Firestore,
  getFirestore
} from 'firebase/firestore'

const clientCredentials = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

const firebaseApp: FirebaseApp = initializeApp(clientCredentials)

export const db: Firestore = getFirestore(firebaseApp)

import { FirebaseApp, initializeApp } from 'firebase/app'
import {
  enableIndexedDbPersistence,
  Firestore,
  getFirestore
} from 'firebase/firestore'

const clientCredentials = {
  apiKey: 'AIzaSyCoHbtrvdTda8iQu8Vw0cMv9I_DNc3IDzg',
  authDomain: 'muscle-hero-a0480.firebaseapp.com',
  databaseURL: 'https://muscle-hero-a0480-default-rtdb.firebaseio.com',
  projectId: 'muscle-hero-a0480',
  storageBucket: 'muscle-hero-a0480.appspot.com',
  messagingSenderId: '167806534261',
  appId: '1:167806534261:web:0fe9874ce050619f1b6e3c'
}

const firebaseApp: FirebaseApp = initializeApp(clientCredentials)

const db: Firestore = getFirestore(firebaseApp)
enableIndexedDbPersistence(db)

export { firebaseApp as default, db }

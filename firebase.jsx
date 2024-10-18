import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB1Lrp9u6Hr2Fe9-iOXwuYXcNYoZ0zqSek',
  authDomain: 'react-notes-6bf03.firebaseapp.com',
  projectId: 'react-notes-6bf03',
  storageBucket: 'react-notes-6bf03.appspot.com',
  messagingSenderId: '334380916579',
  appId: '1:334380916579:web:8d081b8602061d29257d56',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')

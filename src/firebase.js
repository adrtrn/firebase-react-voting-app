import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCVUsIYojgOiaML1x79H5yvhIyufAzsSBs',
  authDomain: 'lunch-rush-1bd50.firebaseapp.com',
  databaseURL: 'https://lunch-rush-1bd50.firebaseio.com',
  storageBucket: 'lunch-rush-1bd50.appspot.com',
  messagingSenderId: '624910739009'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

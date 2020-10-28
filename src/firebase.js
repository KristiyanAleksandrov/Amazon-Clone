import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXgM-3ziU91D0qzvJE5nt6hr48dc6tbic",
    authDomain: "clone-f5612.firebaseapp.com",
    databaseURL: "https://clone-f5612.firebaseio.com",
    projectId: "clone-f5612",
    storageBucket: "clone-f5612.appspot.com",
    messagingSenderId: "312735310784",
    appId: "1:312735310784:web:bf2f1b782eaa2f02d75e25",
    measurementId: "G-H45TLY2FV8"
});

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
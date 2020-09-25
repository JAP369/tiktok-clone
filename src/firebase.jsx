import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAktj1GIoDKTzdIWP-MJ2iC642bZH5wCbw',
  authDomain: 'tiktok-clone-fc1e7.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-fc1e7.firebaseio.com',
  projectId: 'tiktok-clone-fc1e7',
  storageBucket: 'tiktok-clone-fc1e7.appspot.com',
  messagingSenderId: '783763201191',
  appId: '1:783763201191:web:546e8a87e2849d29a10f82',
  measurementId: 'G-SKTRQMPJ2B',
});

const db = firebaseApp.firestore();

export default db;

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJQVCxqzm1jkZ7iA2mHFTRn2CnyuLRSq0",
  authDomain: "centrell-21a7a.firebaseapp.com",
  projectId: "centrell-21a7a",
  storageBucket: "centrell-21a7a.appspot.com",
  messagingSenderId: "117974181338",
  appId: "1:117974181338:web:7e1346dcc538d297058ce3",
  measurementId: "G-3HG9SX1H84"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

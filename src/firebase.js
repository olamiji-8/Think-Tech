import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBxS8ZVCLfE059BOwj6FaOkzsKkjwr4RAo",
  authDomain: "think-tech-60779.firebaseapp.com",
  databaseURL: "https://think-tech-60779-default-rtdb.firebaseio.com",
  projectId: "think-tech-60779",
  storageBucket: "think-tech-60779.appspot.com",
  messagingSenderId: "594773938377",
  appId: "1:594773938377:web:318ca45db0fa3c03a23d18",
  measurementId: "G-BE1X2279Y3"
});

const db = app.firestore();
export { db };

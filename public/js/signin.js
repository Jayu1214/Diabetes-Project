import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW8Uf1LYttMFv4y05TfZUy1Y-kJGCQJbQ",
  authDomain: "diabetes-7201e.firebaseapp.com",
  projectId: "diabetes-7201e",
  storageBucket: "diabetes-7201e.appspot.com",
  messagingSenderId: "113958423821",
  appId: "1:113958423821:web:97bedb35f88fdd5882b444",
  measurementId: "G-T4T786K1X1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//submit buttons

const submit = document.getElementById("submit").value;
submit.addEventListener("click",)
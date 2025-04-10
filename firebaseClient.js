// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Px5FWbA96KhL09YQcQDG-R758W5KnDI",
  authDomain: "clinicahall-142d0.firebaseapp.com",
  projectId: "clinicahall-142d0",
  storageBucket: "clinicahall-142d0.firebasestorage.app",
  messagingSenderId: "588094242731",
  appId: "1:588094242731:web:76cf7e298e9fbb28e1dcee",
  measurementId: "G-9XG3DHY2MK"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const db = getFirestore();

export { auth, db };

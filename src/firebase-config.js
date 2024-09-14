import { initializeApp } from "firebase/app"; 
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCs3oWLj4hJ--382YF2epbbrXiPk3QFTJY",
    authDomain: "fir-app-c23a2.firebaseapp.com",
    projectId: "fir-app-c23a2",
    storageBucket: "fir-app-c23a2.appspot.com",
    messagingSenderId: "76147583151",
    appId: "1:76147583151:web:55927ba6a1d9b2880f0c5a",
    measurementId: "G-B4WC1L21CP"
  };


  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)
import { getAuth } from "firebase/auth";



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: import.meta.env.Vite_apiKey,
  // authDomain: import.meta.env.Vite_authDomain,
  // projectId: import.meta.env.Vite_projectId,
  // storageBucket: import.meta.env.Vite_storageBucket,
  // messagingSenderId: import.meta.env.Vite_messagingSenderId,
  // appId: import.meta.env.Vite_appId

  apiKey: "AIzaSyDp2jL8KEqcYm2LVekpODSmPWJ5jwM_sTs",
  authDomain: "world-tour-39e41.firebaseapp.com",
  projectId: "world-tour-39e41",
  storageBucket: "world-tour-39e41.appspot.com",
  messagingSenderId: "320022938070",
  appId: "1:320022938070:web:8f940808c32cc1d9c9a477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
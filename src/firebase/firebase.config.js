import { getAuth } from "firebase/auth";



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.Vite_apiKey,
  authDomain: import.meta.env.Vite_authDomain,
  projectId: import.meta.env.Vite_projectId,
  storageBucket: import.meta.env.Vite_storageBucket,
  messagingSenderId: import.meta.env.Vite_messagingSenderId,
  appId: import.meta.env.Vite_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
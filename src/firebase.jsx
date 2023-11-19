// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5EBWogTPygPdn987FUl1_KrPzxDoDzw",
  authDomain: "blog-9672d.firebaseapp.com",
  projectId: "blog-9672d",
  storageBucket: "blog-9672d.appspot.com",
  messagingSenderId: "760123900057",
  appId: "1:760123900057:web:63d0d1e9730b97baf7f808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider , db }
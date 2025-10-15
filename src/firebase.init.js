// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUSHcIB2Y5MNQDkJ3RJmkxTnRsmzeUdmw",
  authDomain: "authen-setting.firebaseapp.com",
  projectId: "authen-setting",
  storageBucket: "authen-setting.firebasestorage.app",
  messagingSenderId: "480004823459",
  appId: "1:480004823459:web:bc9c0e722c6a23ac262216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
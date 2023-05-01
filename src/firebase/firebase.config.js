// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy77tUOx0hvWQKpcMDPPlcQ-HO8s07sjU",
  authDomain: "chef-client-project.firebaseapp.com",
  projectId: "chef-client-project",
  storageBucket: "chef-client-project.appspot.com",
  messagingSenderId: "414698776792",
  appId: "1:414698776792:web:0afe013504d33742af8fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
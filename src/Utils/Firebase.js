// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2WB4S35nIny8Gx7-PahkGALipW3Jct1w",
  authDomain: "netflixgpt-272fb.firebaseapp.com",
  projectId: "netflixgpt-272fb",
  storageBucket: "netflixgpt-272fb.appspot.com",
  messagingSenderId: "511382226660",
  appId: "1:511382226660:web:9be62205796f67eb7b4ef1",
  measurementId: "G-C9STN747B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
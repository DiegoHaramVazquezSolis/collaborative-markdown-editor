import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGYBiohT0pDhbaH_5dPjd0i_rK785FYxQ",
  authDomain: "document-editor-f0b52.firebaseapp.com",
  projectId: "document-editor-f0b52",
  storageBucket: "document-editor-f0b52.appspot.com",
  messagingSenderId: "599641192730",
  appId: "1:599641192730:web:dd32da62f80a4a11ca14a3",
  measurementId: "G-RJ5BKFMW97"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth
};
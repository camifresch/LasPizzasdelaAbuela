import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg9LB-MOjc76MrBB8fUJqL812r_uGEH9g",
  authDomain: "las-pizzas-de-la-abuela-8d807.firebaseapp.com",
  projectId: "las-pizzas-de-la-abuela-8d807",
  storageBucket: "las-pizzas-de-la-abuela-8d807.appspot.com",
  messagingSenderId: "811892291042",
  appId: "1:811892291042:web:5658bce47da0be616675bb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
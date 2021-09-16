import firebase from "firebase/app"
import "firebase/auth"
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcnOfgxnl6qqxuNaQu5iV8FCND4xAr-hw",
  authDomain: "language-hack-4c412.firebaseapp.com",
  projectId: "language-hack-4c412",
  databaseURL: "https://language-hack-4c412-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "language-hack-4c412.appspot.com",
  messagingSenderId: "96997254689",
  appId: "1:96997254689:web:11c53a7bf1d9f435046560"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

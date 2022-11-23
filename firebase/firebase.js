import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAeWaMIpcnIpxKSchOQ6iyseZinsKajgg",
  authDomain: "footwear-ecommerce.firebaseapp.com",
  projectId: "footwear-ecommerce",
  storageBucket: "footwear-ecommerce.appspot.com",
  messagingSenderId: "507870729211",
  appId: "1:507870729211:web:bc6049424a253d7ae4f15e",
  measurementId: "G-3DYPD3KHKD"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

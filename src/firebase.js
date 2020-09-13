import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3dvIl3KORpTefSCNW_FBVUhOm-qIfE8s",
  authDomain: "clone-103a4.firebaseapp.com",
  databaseURL: "https://clone-103a4.firebaseio.com",
  projectId: "clone-103a4",
  storageBucket: "clone-103a4.appspot.com",
  messagingSenderId: "705153846337",
  appId: "1:705153846337:web:7330b159731b09e03e4ac0",
  measurementId: "G-0GTBEPCLGS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

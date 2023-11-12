import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDG1vSNnzmgej-gNBydBotmTkRBaLhntd0",
    authDomain: "subscriptions-b47aa.firebaseapp.com",
    projectId: "subscriptions-b47aa",
    storageBucket: "subscriptions-b47aa.appspot.com",
    messagingSenderId: "400157531280",
    appId: "1:400157531280:web:915ea64b0d500bdc740c15"
  };


const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
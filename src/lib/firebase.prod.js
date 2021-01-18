import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDRK_GiniMb8jUGdKokKxwkA_jC6fVjwak",
  authDomain: "essflix-60317.firebaseapp.com",
  projectId: "essflix-60317",
  storageBucket: "essflix-60317.appspot.com",
  messagingSenderId: "25761761672",
  appId: "1:25761761672:web:bca9636bf13f552709d23d",
  measurementId: "G-0PXHBS4K68"
};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);

export { firebase };

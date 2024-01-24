import firebase from "firebase/compat/app"  //  !important
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5EjD4Bqcsadk-lZf-l6iG0mS-JbFSmXM",
    authDomain: "clone-20607.firebaseapp.com",
    projectId: "clone-20607",
    storageBucket: "clone-20607.appspot.com",
    messagingSenderId: "600510661051",
    appId: "1:600510661051:web:3424cd748960ef3189049e",
    measurementId: "G-MQ6LXL9HP0"
  };

  // Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});

// export const auth = getAuth();


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export { auth }
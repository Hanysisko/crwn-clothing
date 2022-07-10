import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBryTJBJLqA8Y1O2C_qaJsA_To6IgKR91A",
  authDomain: "crwn-clothing-db-3a35c.firebaseapp.com",
  projectId: "crwn-clothing-db-3a35c",
  storageBucket: "crwn-clothing-db-3a35c.appspot.com",
  messagingSenderId: "928336245818",
  appId: "1:928336245818:web:826c13ae15a6570be8f103"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
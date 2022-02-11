import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBf5gEqR_Q8b7F7rcX39ZXiktGrhQqhFVE",
  authDomain: "crwn-db-ed7c0.firebaseapp.com",
  projectId: "crwn-db-ed7c0",
  storageBucket: "crwn-db-ed7c0.appspot.com",
  messagingSenderId: "561382006125",
  appId: "1:561382006125:web:03f0a9caf06828c6550e64",
  measurementId: "G-GPRYVEKX1K"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); 

    try{
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData,
      });
    } catch(err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
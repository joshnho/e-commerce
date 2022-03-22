import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'e-commerce-43560.firebaseapp.com',
  projectId: 'e-commerce-43560',
  storageBucket: 'e-commerce-43560.appspot.com',
  messagingSenderId: '514937656481',
  appId: '1:514937656481:web:8893c8f67eacf775b58ce0',
  measurementId: 'G-3ZX06Y24GF',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

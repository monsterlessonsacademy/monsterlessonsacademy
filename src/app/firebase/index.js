import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const register = (email, password, username) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (response) => updateProfile(response.user, { displayName: username })
  );
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return auth.signOut();
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

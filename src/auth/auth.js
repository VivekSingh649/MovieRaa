import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCiMPXCEWwBDYEyPdh1HEQTXMbMWjsRRow",
  authDomain: "movieerra.firebaseapp.com",
  projectId: "movieerra",
  storageBucket: "movieerra.appspot.com",
  messagingSenderId: "1026442465538",
  appId: "1:1026442465538:web:cee5c312a54fd0dbe4721b",
  measurementId: "G-4GVZGL9W3G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//  CREATE ACCOUNT USING EMAIL AND PASSWORD
const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await updateProfile(user, {
      displayName: name,
    });
    alert("Signup Sccessfully");
    return true;
  } catch (error) {
    alert(error.code);
    return false;
  }
};

// LOGIN ACCOUNT USING EMAIL OR PASSWORD
const sign = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Sign Sccessfully");
    return true;
  } catch (error) {
    alert(error.code);
    return false;
  }
};

// LOGOUT USER
const logOut = async () => {
  await signOut(auth);
  alert("Logout Sccessfully");
};

export { signUp, auth, sign, logOut };

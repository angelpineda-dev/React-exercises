import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "@firebase/auth";
import Swal from "sweetalert2";
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();

    dispatch(startLoading());

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => Swal.fire("Error", e.message, "error"));
  };
};

export const startRegisterWithEmailPassword = (name, email, password) => {
  return (dispatch) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => Swal.fire("Error", e.message, "error"));
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);

    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});

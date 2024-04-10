import { NextOrObserver, User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebase";

export function onFirebaseAuthStateChanged(callback: NextOrObserver<User>) {
  return onAuthStateChanged(auth, callback);
}

export async function createFirebaseUserWithEmailAndPassword(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInFirebaseUserWithEmailAndPassword(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function firebaseSignOut() {
  return auth.signOut();
}
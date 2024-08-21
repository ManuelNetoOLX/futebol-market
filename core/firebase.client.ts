import { FirebaseOptions, initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";

//import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import firebaseConfig from "../env/firebase-config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const RNLocalPersistence = getReactNativePersistence({
//   getItem(...args) {
//     return AsyncStorage.getItem(...args);
//   },
//   setItem(...args) {
//     return AsyncStorage.setItem(...args);
//   },
//   removeItem(...args) {
//     return AsyncStorage.removeItem(...args);
//   },
// });

const firebaseOpt: FirebaseOptions = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
  //measurementId: firebaseConfig.measurementId, nao apareceu no app o valor dessa prop
  databaseURL: firebaseConfig.databaseURL,
};

export const app = initializeApp(firebaseOpt);

//export const auth = initializeAuth(app, { persistence: RNLocalPersistence });

export const auth = initializeAuth(app);

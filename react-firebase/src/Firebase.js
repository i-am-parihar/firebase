import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-mS7lgVwhiFvivHStVqGFSbTaLSb5JqI",
    authDomain: "newfirebase-ea37b.firebaseapp.com",
    projectId: "newfirebase-ea37b",
    storageBucket: "newfirebase-ea37b.appspot.com",
    messagingSenderId: "592476356609",
    appId: "1:592476356609:web:9a7c0a74eabe83fc814000"
  };

 const app = initializeApp(firebaseConfig) ;

  export default getFirestore() ;
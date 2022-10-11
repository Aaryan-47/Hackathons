import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "@firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD6TPPzuK9nu0UYX3HzZyVHCm67OyNQ9Ao",
    authDomain: "hackathon-e769d.firebaseapp.com",
    projectId: "hackathon-e769d",
    storageBucket: "hackathon-e769d.appspot.com",
    messagingSenderId: "563468467684",
    appId: "1:563468467684:web:920a6df0a19b069ad25bf1",
    measurementId: "G-2MFPBL0N0Z"
  };

  const app=initializeApp(firebaseConfig);

 export const db=getFirestore(app)
 export const storage = getStorage(app);
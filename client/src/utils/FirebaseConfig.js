import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr76NHE3FKsDTmAIeCvdrcyUZuhnj0d8o",
  authDomain: "whatsapp-clone-3cf39.firebaseapp.com",
  projectId: "whatsapp-clone-3cf39",
  storageBucket: "whatsapp-clone-3cf39.firebasestorage.app",
  messagingSenderId: "758202569633",
  appId: "1:758202569633:web:1a8a8c5dae411867f671e0",
  measurementId: "G-RVBQCQ79XQ",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

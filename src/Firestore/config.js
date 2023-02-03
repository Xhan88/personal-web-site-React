import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAL-F80fZ4niWR7PcxlsKm1DUMFwGAte_g",
  authDomain: "web-site-proyects.firebaseapp.com",
  projectId: "web-site-proyects",
  storageBucket: "web-site-proyects.appspot.com",
  messagingSenderId: "1070196264883",
  appId: "1:1070196264883:web:721dd99d182f6834bfc5c6",
  measurementId: "G-KS27DHW4GP"
};

const app = initializeApp(firebaseConfig);

export const initFirestoreApp  = () => {
  return app
}
 
 getAnalytics(app);
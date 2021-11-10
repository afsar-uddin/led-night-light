import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initAuthenticationFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initAuthenticationFirebase;
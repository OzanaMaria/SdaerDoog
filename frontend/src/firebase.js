// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyCLPWh2Eje2SLBlTD_PT7jswbAb0EHGB0k",
    authDomain: "sdaerdoog-a7827.firebaseapp.com",
    projectId: "sdaerdoog-a7827",
    storageBucket: "sdaerdoog-a7827.appspot.com",
    messagingSenderId: "488951441033",
    appId: "1:488951441033:web:4737bccbd8592afcbd0858"
});

// Initialize Firebase
export const auth = app.auth();
export const database = app.database();
export default app;
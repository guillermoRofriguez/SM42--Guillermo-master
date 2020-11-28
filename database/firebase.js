import firebase from "firebase";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1Xr6DGAkfrKqF5zGSYuzLOCtR-txlPBI",
    authDomain: "guillermo-ea113.firebaseapp.com",
    databaseURL: "https://guillermo-ea113.firebaseio.com",
    projectId: "guillermo-ea113",
    storageBucket: "guillermo-ea113.appspot.com",
    messagingSenderId: "486880522197",
    appId: "1:486880522197:web:58744ca500b6f0fd95575c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};

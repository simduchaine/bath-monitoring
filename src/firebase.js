import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDspiBx1MM1Z5T1sPrwsP1bE0iaGYIdbFw",
  authDomain: "arduino-bath.firebaseapp.com",
  databaseURL: "https://arduino-bath.firebaseio.com",
  projectId: "arduino-bath",
  storageBucket: "arduino-bath.appspot.com",
  messagingSenderId: "582912378435"
};
firebase.initializeApp(config);

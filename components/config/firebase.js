import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCLhgmdiae7xpdhdPFnVyPWbhVFS2abIbE",
    authDomain: "oisifood-917b4.firebaseapp.com",
    databaseURL: "https://oisifood-917b4.firebaseio.com",
    projectId: "oisifood-917b4",
    storageBucket: "oisifood-917b4.appspot.com",
    messagingSenderId: "1002176572877",
    appId: "1:1002176572877:web:6f21d47358030087a92884",
    measurementId: "G-KWXGBJT6X6"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase
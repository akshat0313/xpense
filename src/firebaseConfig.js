import firebase from "firebase";

// import "firebase/auth";
// import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb4Iqd2kd-LPXfPv3QPcmivyRG6X35wwo",
    authDomain: "xpense-rikku.firebaseapp.com",
    projectId: "xpense-rikku",
    storageBucket: "xpense-rikku.appspot.com",
    messagingSenderId: "32139780780",
    appId: "1:32139780780:web:6343ea843c2cb944ef3509",
    measurementId: "G-TZ92T9ZJJC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
// export const auth = app.auth();
// export const firestore = firebase.firestore();

export default firebase;
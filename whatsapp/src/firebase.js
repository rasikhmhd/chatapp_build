import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
// import 'firebase/firestore'
// import 'firebase/auth'
// // import 'firebase/firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCVczYExhnGsXgO-hkK-1wlRPY4qNzdx9w",
  authDomain: "whatsapp-build-41bf6.firebaseapp.com",
  projectId: "whatsapp-build-41bf6",
  storageBucket: "whatsapp-build-41bf6.appspot.com",
  messagingSenderId: "1093855723731",
  appId: "1:1093855723731:web:4dae3d425211c3ea905426"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
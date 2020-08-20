import firebase from "firebase"

const firebaseConfig: { [key: string]: string } = {
  apiKey: "AIzaSyAJcVfrcoYkAq0g4TJnX34pAd_KKfmWXc8",
  authDomain: "slack-clone-larshansen.firebaseapp.com",
  databaseURL: "https://slack-clone-larshansen.firebaseio.com",
  projectId: "slack-clone-larshansen",
  storageBucket: "slack-clone-larshansen.appspot.com",
  messagingSenderId: "989619860331",
  appId: "1:989619860331:web:6abd81f335bb5cea05122e",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

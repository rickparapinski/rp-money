import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //messagingSenderId: "166014001653",
  appId: process.env.REACT_APP_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const database = firebase.database();

 export {firebase, auth, database}
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDKvorQ7kniQMg0ncXTC5J1xknKC15BnXg",
  authDomain: "cariok.firebaseapp.com",
  databaseURL: "https://cariok.firebaseio.com",
  projectId: "cariok",
  storageBucket: "cariok.appspot.com",
  messagingSenderId: "693782899110",
  appId: "1:693782899110:web:24db0ed0b3c97ad0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
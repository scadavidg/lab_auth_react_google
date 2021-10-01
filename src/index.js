import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAP_e0DeXPUpsjf32nRE8n_4hcvtchefkg",
  authDomain: "labauth-13910.firebaseapp.com",
  projectId: "labauth-13910",
  storageBucket: "labauth-13910.appspot.com",
  messagingSenderId: "834669163123",
  appId: "1:834669163123:web:cf9683d36d600404ab3006",
  measurementId: "G-LW6G134T48"
}

if(!firebase.apps[0]){
  firebase.initializeApp(firebaseConfig);
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
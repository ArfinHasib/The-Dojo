import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDMzEzMwp_yOrl8n7qw1QLWq0IBbNf7H6E',
  authDomain: 'thedojosite-6d5fa.firebaseapp.com',
  projectId: 'thedojosite-6d5fa',
  storageBucket: 'thedojosite-6d5fa.appspot.com',
  messagingSenderId: '856842054036',
  appId: '1:856842054036:web:0c2c4a027818ce99234781',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };

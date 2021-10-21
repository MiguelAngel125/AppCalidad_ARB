import firebase from 'firebase';
//
import 'firebase/app';
import 'firebase/firestore';
//



  var firebaseConfig = {
    apiKey: "AIzaSyBnv5xqTBUNgR_8aJTNZbV1QQLIxvcL18s",
  authDomain: "login-react-21fd0.firebaseapp.com",
  projectId: "login-react-21fd0",
  storageBucket: "login-react-21fd0.appspot.com",
  messagingSenderId: "62530053566",
  appId: "1:62530053566:web:5d12503722871ba6fe85ef",
  measurementId: "G-Y9RCS6J241"
  };
 
  const  fire=firebase.initializeApp(firebaseConfig);

//
let db = fire.firestore();
//db.settings({ timestampsInSnapshot: true, merge: true });

//
  
  export default fire;
  

 
  
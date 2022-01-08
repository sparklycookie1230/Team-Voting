import firebase from 'firebase';

// add SDK Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyB_TMJf1KLQzFDg1ZDT1bYQ5JfZKgCeEPs",
        authDomain: "class67-4dea3.firebaseapp.com",
        projectId: "class67-4dea3",
        storageBucket: "class67-4dea3.appspot.com",
        messagingSenderId: "175475288773",
        appId: "1:175475288773:web:81229bfafa866a64ed1eac"
      };
      
      // Initialize Firebase 

firebase.initializeApp(firebaseConfig);

export default firebase.database();
var firebaseConfig = {
    apiKey: "AIzaSyCjAw45KEII11RiVkXXHL9EsmpQtGIAPiw",
    authDomain: "kwitter-web-app-94db1.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-94db1-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-94db1",
    storageBucket: "kwitter-web-app-94db1.appspot.com",
    messagingSenderId: "735648108736",
    appId: "1:735648108736:web:c60e00238f23583e821d25",
    measurementId: "G-GREMNX0JZR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding_users"});
  }

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

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function add_room(){
      room_name = document.getElementByI("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
    });

locatStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name", Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}

      function redirectToRoomName(name){ 
        console.log(name);
         localStorage.setItem("room_name",name);
          window.location = "kwitter_page.html";
         }

getData();



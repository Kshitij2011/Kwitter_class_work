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

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = like_data['like'];
         name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
         message_with_tag = "<h4 class = 'message_h4'>" + message +"</h4>";
         like_button = "<button class = 'btn btn-warning' id = '+firebase_message_id+' onclick = 'updateLike(this.id)'>";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

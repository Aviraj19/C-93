var firebaseConfig = {
      apiKey: "AIzaSyDd1lg0ceaYZEserTfvHD-qqTFnuuvKv9E",
      authDomain: "kwitter-d6642.firebaseapp.com",
      databaseURL: "https://kwitter-d6642-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6642",
      storageBucket: "kwitter-d6642.appspot.com",
      messagingSenderId: "1015919603538",
      appId: "1:1015919603538:web:28b4d468b89c835af5148b",
      measurementId: "G-D5Q6SZPVK3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username_key");
  room_name=localStorage.getItem("roomname_key");
  document.getElementById("roomname").innerHTML="Room : "+room_name;
  function Send() {
        message=document.getElementById("message").value;
        firebase.database().ref(room_name).push({
        user:user_name,msg:message,like:0
        });
        document.getElementById("message").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location="index.html";
}
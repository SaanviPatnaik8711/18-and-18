var firebaseConfig = {
    apiKey: "AIzaSyCthofllSzQMkwPA1Tewo9r_Kj_HZ_rMeQ",
  authDomain: "and-18-project-4.firebaseapp.com",
  projectId: "and-18-project-4",
  storageBucket: "and-18-project-4.appspot.com",
  messagingSenderId: "874972808690",
  appId: "1:874972808690:web:8d9d5daf0db8f9bbf5576b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome: "+user_name;
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name)
    window.location = "kwitter_page.html"
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

function openHome(){
    window.location="ideachoice.html";
}
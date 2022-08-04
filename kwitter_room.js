var firebaseConfig = {
  apiKey: "AIzaSyCiQG4OyljHhkdH7V8MyjQK-vTfzbB6MEQ",
  authDomain: "project-96-335da.firebaseapp.com",
  databaseURL: "https://project-96-335da-default-rtdb.firebaseio.com",
  projectId: "project-96-335da",
  storageBucket: "project-96-335da.appspot.com",
  messagingSenderId: "660504814922",
  appId: "1:660504814922:web:870262144a09d2a63d0db3",
  measurementId: "G-TNYPZZ0EC4"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";



function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
  });
  localStorage.setItem("room_name" , room_name);
  window.location="kwitter_page.html";
}
function getData(){firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){childKey=childSnapshot.key;
Room_names=childKey;
console.log("roomname"+ Room_names);
row="<div class='room_name' id="+Room_names+" onClick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}


    //  For Toggle Pages
const Box1 = document.getElementById("b1");
const Box2 = document.getElementById("b2");
let BtnSignUp = document.getElementById("btn1");
let BtnSignIn = document.getElementById("btn2");
let TxtCh = document.getElementById("txt-ch");

document.getElementById('sp').innerText = localStorage.getItem('First Name')

function login()
{
    Box2.style.opacity = "0";
    Box2.style.top = "-60rem";
    Box1.style.opacity = "1";
    Box1.style.top = "2rem";
    document.getElementById('home-wl').style.display = 'none';
    TxtCh.innerHTML = "Sign Up";
    
}
function Create() {
    Box1.style.opacity = "0";
    Box1.style.top = "-60rem";
    Box2.style.opacity = "1";
    Box2.style.top = "2rem";
    document.getElementById('home-wl').style.display = 'none';

    if (Box1.style.opacity === "0") {
      TxtCh.innerHTML = "Sign In";
    } else {
      TxtCh.innerHTML = "Sign Up";
    }
}
BtnSignUp.addEventListener("click", () => {
  Box1.style.opacity = "0";
  Box1.style.top = "-60rem";
  Box2.style.opacity = "1";
  Box2.style.top = "2rem";
  if (Box1.style.opacity === "0") {
    TxtCh.innerHTML = "Sign In";
  } else {
    TxtCh.innerHTML = "Sign Up";
  }
});
TxtCh.addEventListener("click", () => {
  if (Box1.style.opacity === "1") {
    Box1.style.opacity = "0";
    Box1.style.top = "-60rem";
    Box2.style.opacity = "1";
    Box2.style.top = "2rem";
    TxtCh.innerHTML = "Sign In";
  } else {
    TxtCh.innerHTML = "Sign Up";
    Box2.style.opacity = "0";
    Box2.style.top = "-60rem";
    Box1.style.opacity = "1";
    Box1.style.top = "2rem";
    document.getElementById('home-wl').style.display = 'none';
    document.getElementById('home-page').style.display = 'nome'

  }
});
BtnSignIn.addEventListener("click", () => {
  Box2.style.opacity = "0";
  Box2.style.top = "-60rem";
  Box1.style.opacity = "1";
  Box1.style.top = "2rem";
  if (Box2.style.opacity === "0") {
    TxtCh.innerHTML = "Sign Up";
  } else {
    TxtCh.innerHTML = "Sign In";
  }
});

// For Local Database
function SaveData() {
  const Sfname = document.getElementById("Sfname").value;
  const Slname = document.getElementById("Slname").value;
  const Semail = document.getElementById("Semail").value;
  const Spass = document.getElementById("Spass").value;

  if (Sfname == 0) {
    alert("First Name Could Not Be Blanked");
  } else if (Slname == 0) {
    alert("Last Name Could Not Be Blanked");
  } else if (Semail == 0 && Semail != "@") {
    alert("Email Could Not Be Blanked");
  } else if (Spass == 0) {
    alert("Password Could Not Be Blanked");
  } else {
    (UserFirstName = localStorage.setItem("First Name", Sfname)),
      (UserLastName = localStorage.setItem("Last Name", Slname)),
      (UserEmail = localStorage.setItem("Email", Semail)),
      (UserPass = localStorage.setItem("Password", Spass)),
      (document.getElementById("btn-save").type = "submit");
  }
}

function Check() {
  const Lemail = document.getElementById("Lemail").value;
  const Lpass = document.getElementById("Lpass").value;

  if (
    Lemail === localStorage.getItem("Email") &&
    Lpass === localStorage.getItem("Password")
  ) {
    Box1.style.opacity = "0";
    Box1.style.top = "-60rem";
    Box2.style.opacity = "0";
    Box2.style.top = "-60rem";
    document.getElementById('home-page').style.display = 'flex'
    TxtCh.innerHTML = 'Logout';
    document.getElementById("btn-check").type = "button";

  } else {
    alert("Email or Passwors Is Wrong or Not Exist");
  }
}
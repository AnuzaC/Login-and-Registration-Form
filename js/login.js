const login= document.querySelector(".login");

login.onclick = function(){
    let nameCheck=localStorage.getItem("uname");
    let passCheck=localStorage.getItem("pass");

    let username= document.querySelector('#uname');
    let userpw= document.querySelector('#pass');
    let userremember= document.querySelector('#remember');

    document.querySelector('.err-pass').style.color ="red";

    if (nameCheck!=username.value && passCheck!=userpw.value){
        login.disabled=true;
        document.querySelector('.err-pass').innerHTML="Username and password donot match";
    }

    else if(nameCheck==username.value && passCheck==userpw.value){
        login.disabled=false;
        //window.open("../welcome.html");
        window.location.replace("../welcome.html");
    }
    else{
        alert("You are not logged in.");
    }
    return false;
};

//Hide and Show Password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#pass');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

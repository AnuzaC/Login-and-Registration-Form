const login= document.querySelector("#login");

login.onclick = function(){
    let nameCheck=localStorage.getItem(userName);
    let passCheck=localStorage.getItem(userPass);

    let uname=document.querySelector('#uname');
    let pass=document.querySelector('#pass');

    document.querySelector('.err-pass').style.color ="red";

    if (uname.value!=nameCheck.value || pass.value!=passCheck.value){
        login.disabled=true;
        document.querySelector('.err-pass').innerHTML="Username and password donot match";
    }
    else{
        return true;
    }
};

//Hide and Show Password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

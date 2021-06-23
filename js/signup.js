const register = document.querySelector("#register");

register.onclick = function(){

    let uname=document.querySelector('#uname');
    let email=document.querySelector('#email');
    let pass=document.querySelector('#pass');
    let passConfirm =document.querySelector('#pass-confirm');
    let checkbox = document.querySelector('#checkbox');

    document.querySelector('.err-pass').style.color ="red";
    document.querySelector('.err-pass-no-match').style.color ="red";

    // ----------------Password length Validation----------------------
    
    if (pass.value.length<6){
        register.disabled=true;
        document.querySelector('.err-pass').innerHTML="Password must be at least 6 character long";
        pass.focus();
    }

    else if(pass.value!=passConfirm.value){
        register.disabled=true;
        document.querySelector('.err-pass-no-match').innerHTML="Passwords do not match";
        passConfirm.focus();
    }

    else if(checkbox.value==''){
        register.disabled=true;
        document.querySelector('.err-checkbox').innerHTML="Please select this field";
    }
    else{
        register.disabled=false;
        localStorage.setItem("uname",uname.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("pass",pass.value);
        window.location.replace("../login.html");
    }
    return false;
};
// ----------------Password Strength Display-----------------------
let pass=document.querySelector('#pass');
let passStrength = document.querySelector('#pass-strength');
let timeout;

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

function checkStrength(parameter){
    
    if(strongPassword.test(parameter)) {
        passStrength.style.backgroundColor = "green";
        passStrength.style.color="white";
        passStrength.textContent = 'Strong';
    } 
    else if(mediumPassword.test(parameter)){
        passStrength.style.backgroundColor = 'blue';
        passStrength.style.color="white";
        passStrength.textContent = 'Medium';
    } 
    else{
        passStrength.style.backgroundColor = 'red';
        passStrength.style.color="white";
        passStrength.textContent = 'Weak';
    }
}

pass.addEventListener("input",()=>{

    passStrength.style.display="flex";
    clearTimeout(timeout);

    timeOut= setTimeout(()=>checkStrength(pass.value),500);

    //Incase a user clears the text, the badge is hidden again

    if(pass.value.length != 0){
        passStrength.style.display != 'block';
        // passStrength.style.textAlign='center';
    } 
    else{
        passStrength.style.display = 'none';
    }

});

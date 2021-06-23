const register = document.querySelector("#register");

register.onclick = function(){

    let uname=document.querySelector('#uname');
    let email=document.querySelector('#email');
    let pass=document.querySelector('#pass');
    let passConfirm =document.querySelector('#pass-confirm');
    let checkbox = document.querySelector('#checkbox')

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

    else if(checkbox.value===''){
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

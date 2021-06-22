const register = document.querySelector("#register");

register.onclick = function(){

    let uname=document.querySelector('#uname');
    let email=document.querySelector('#email');
    let pass=document.querySelector('#pass');
    let passConfirm =document.querySelector('#pass-confirm');
    document.querySelector('.err-pass').style.color ="red";

    // ----------------Password length Validation----------------------
    
    if (pass.length<6){
        register.disabled=true;
        document.querySelector('.err-pass').innerHTML="Password must be at least 6 character long";
    }

    else if(pass.value!=passConfirm.value){
        register.disabled=true;
        document.querySelector('.err-pass-no-match').innerHTML="Passwords do not match";
    }
};



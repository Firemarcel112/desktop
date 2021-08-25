function checkLogedIn() {
    if(localStorage.getItem("username") == null || localStorage.getItem("password") == null) {

        const login_form = document.querySelector("#login");
        login_form.style.display = "none";

        const forgot_form = document.querySelector("#forgot");
        forgot_form.style.display = "none";

        const register_form = document.querySelector("#register");
        register_form.style.display = "unset";

         // Hinweise New Register //
        alert("Du besitz keinen Account, bitte erstelle dir einen!");
    } else {
        const siteTitle = document.querySelector("title");
        const siteIcon = document.querySelector("#icon");

        var profilbild = document.querySelector("#lockimage");
        var username = document.querySelector("#login_username");

        siteTitle.innerHTML = "Bildschirm " + localStorage.getItem("username");
        siteIcon.href = localStorage.getItem("profilbild");

        profilbild.src = localStorage.getItem("profilbild");
        username.innerHTML = localStorage.getItem("username");

        const forgot_form = document.querySelector("#forgot");
        forgot_form.style.display = "none";

        const login_form = document.querySelector("#login");
        login_form.style.display = "block";
    }
}

function isExistAccount() {

    if(document.querySelector("#register").style.display == "unset") {
        return;
    } else {

        if(localStorage.getItem("username") == null) {
            alert("Username nicht vorhanden")
            window.location.reload();
        }
    
        if(localStorage.getItem("password") == null) {
            alert("Password nicht vorhanden");
            window.location.reload();
        }
    }
}

function login() {
    const password = document.querySelector("#password").value;
    if(password == localStorage.getItem("password")) {
        const angemeldet = "true";
        sessionStorage.setItem("angemeldet" , angemeldet)
        window.location = "/../system/v1/desktop/";
        loginGUI()

    } else {
        errormessage = document.querySelector("#errormessage");
        errormessage.innerHTML = "Dein Passwort ist Falsch!"
    }
}

function loginGUI() {
    document.querySelector("#login_username").style.display = "none";
    document.querySelector("#password").style.display = "none";
    document.querySelector("#submit").style.display = "none";
    document.querySelector("#errormessage").style.display = "none";
    document.querySelector("#newPasswort").style.display = "none";
    document.querySelector(".shutdown").style.display = "none";

    document.querySelector(".loader").style.display = "block";
    document.querySelector("#anmeldennachricht").style.display = "block";
    document.querySelector("#anmeldennachricht").innerHTML = "Willkommen " + localStorage.getItem("username");
    window.setTimeout("weiterleitung()" , 100);
}


function weiterleitung() {
    window.location = "/../system/v1/desktop";
}

function forgotPassword() {
    const login_form = document.querySelector("#login");
    login_form.style.display = "none";

    const forgot_form = document.querySelector("#forgot");
    forgot_form.style.display = "inherit";
}

function newPassword() {
    const username = document.querySelector("#checkUsername").value;
    const newPassword = document.querySelector("#checkNewPassword").value;
    const validPassword = document.querySelector("#isValid").value;
    const error = document.querySelector("#error");

    if(username == "") {
        error.innerHTML = "Gebe einen Benutzernamen ein";
    }

    if(newPassword == "") {
        error.innerHTML = "Gebe ein Passwort ein"; 
    }

    if(newPassword !== validPassword) {
        error.innerHTML = "Deine Passwörter stimmen nicht überein"
    }

    if(username !== localStorage.getItem("username")) {
        error.innerHTML = "Dieser User existiert nicht"
    } else {
        if(newPassword == validPassword) {
            localStorage.setItem("password" , newPassword)
            window.location = "/../system/v1/lockscreen";
        }
    }   
}

function register() {
    const password = document.querySelector("#password_new").value;
    const name = document.querySelector("#username_new").value;
    let profilbild = document.querySelector("#image_link").value;
    const hintergrundibild = "noImage";
    const user = "registriert";

    if(name == "") {
        const errormessage = document.querySelector("#errormessage_register");
        errormessage.innerHTML = "Bitte wähle einen Nutzernamen";
        return;
    }
    
    if(password == "") {
        const errormessage = document.querySelector("#errormessage_register");
        errormessage.innerHTML = "Bitte wähle ein Gültiges Passwort";
        return;
    }

    if(profilbild == "") {
        profilbild = "/../system/v1/standardbilder/profilbild.jpg"
    }

    localStorage.setItem("registriert" , user)
    localStorage.setItem("username" , name);
    localStorage.setItem("password" , password);
    localStorage.setItem("profilbild" , profilbild);
    localStorage.setItem("hintergrundbild", hintergrundibild);
    window.location = "/../system/v1/lockscreen"
}

function date() {
    const date = new Date;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const fullm = ((minutes < 10) ? "0" : "");
    const seconds = date.getSeconds();
    const fulls = ((seconds < 10) ? "0" : "");
    const datum = document.querySelector("#date");

    datum.innerHTML = hour + ":" + fullm + minutes + ":" + fulls + seconds;
}

function backToLockscreen() {
    const forgot = document.querySelector("#forgot");
    forgot.style.display = "none";

    const login = document.querySelector("#login");
    login.style.display = "block";
}

function seePassword() {
    const passwordForm = document.querySelector("#password");
    const eye = document.querySelector(".fa-eye");
    const hideeye = document.querySelector(".fa-eye-slash");

    passwordForm.type = "text";
    eye.style.display = "none";
    hideeye.style.display = "unset";
}

function hidePassword() {
    const passwordForm = document.querySelector("#password");
    const eye = document.querySelector(".fa-eye");
    const hideeye = document.querySelector(".fa-eye-slash");

    passwordForm.type = "password";
    eye.style.display = "unset";
    hideeye.style.display = "none";
}
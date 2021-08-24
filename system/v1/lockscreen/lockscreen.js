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
        alert("Die Hier angegeben Daten werden Lokal auf deinem PC gespeichert!")
        alert("Für ein Optimales Erlebnis stelle deinen Browser in den Vollbildmodus (F11)")
        alert("Unsterstützte Auflösung: 1920x1080");
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
    }
}

function login() {
    const password = document.querySelector("#password").value;
    if(password == localStorage.getItem("password")) {
        alert("Hallo " + localStorage.getItem("username"));
        const angemeldet = "true";
        sessionStorage.setItem("angemeldet" , angemeldet)
        window.location = "/../system/v1/desktop/";
    } else {
        errormessage = document.querySelector("#errormessage");
        errormessage.innerHTML = "Dein Passwort ist Falsch!"
    }
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
    const profilbild = document.querySelector("#image_link").value;
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
    window.location = "/../system/v1/lockscreen";
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
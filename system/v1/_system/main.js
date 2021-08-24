function checkIsSystemStarted() {
    if(sessionStorage.getItem("Status") !== "gestartet") {
        alert("Dein Computer ist nicht eingeschaltet!")
        window.location = "/../"
    }
    if(sessionStorage.getItem("SYSTEM") !== "SystemIsValid") {
        alert("SYSTEM ERROR")
        alert("PC Wird heruntergefahren!")
        const system = "ausgeschaltet";
        sessionStorage.setItem("Status" , system);
        window.location = "/../";
    }
}

function isLoggedIn() {
    if (sessionStorage.getItem("angemeldet") !== "true" )  {
        if (localStorage.getItem("username") == null || localStorage.getItem("password") == null) {
            var bildschirm = document.querySelector("body");
            bildschirm.style.display = "none";
            alert("Du besitzt keinen Accountm bitte erstelle dir einen");
            window.location = "/../"
        } else {
            var bildschirm = document.querySelector("body");
            bildschirm.style.display = "none";
            alert("Du bist nicht angemeldet!");
            window.location = "/../system/v1/lockscreen"
        }
    } else {
        const siteTitle = document.querySelector("title");
        const siteIcon = document.querySelector("#icon");
        siteTitle.innerHTML = "Desktop " + localStorage.getItem("username");
        siteIcon.href = localStorage.getItem("profilbild");
    }
}


function shutdownSystem() {
    const check = confirm("PC wirklich ausschalten?")
    if(check) {
        window.location = "/../system/v1/shutdown/"
    } else {
        alert("Vorgang abgebrochen")
    }
}

function logoff() {
    const check = confirm("Willst du dich wirklich abmelden")
    if(check) {
        alert("Du hast dich erfolgreich abgemeldet");
        const abgemeldet = "false";
        sessionStorage.setItem("angemeldet" , abgemeldet);
    } else {
        return;
    }
    const abmelden = document.querySelector("#abmelden");
    abmelden.href = "/../system/v1/lockscreen"
}

function backToDesktop() {
    window.location = "/../system/v1/desktop";
}

function closeApp() {
    window.location = "/../system/v1/desktop";
}

// Installed Apps // 

function appInstalled() {

    if(localStorage.getItem("browser") !== "installiert") {
        document.querySelector("#app_browser_").style.display = "none";
    } else {
        document.querySelector("#app_browser_").style.display = "block";
    }

    if(localStorage.getItem("app_number") !== "installiert") {
        document.querySelector("#app_number_").style.display = "none";
    } else {
        document.querySelector("#app_number_").style.display = "block";
    }
}

function menuAppInstalled() {

    if(localStorage.getItem("browser") !== "installiert") {
        document.querySelector("#menu_browser_").style.display = "none";
    } else {
        document.querySelector("#menu_browser_").style.display = "block";
    }
    
    if(localStorage.getItem("app_number") !== "installiert") {
        document.querySelector("#menu_app_number_").style.display = "none";
    } else {
        document.querySelector("#menu_app_number_").style.display = "block";
    }
}

function isBrowserInstalled() {
    if(localStorage.getItem("browser") !== "installiert") {
        document.querySelector("body").style.display = "none";
        alert("Du hast die App nicht installiert, gehe in den App Store!");
        window.location = "/../system/v1/desktop";
    } else {}

}

function isAppNumberInstalled() {
    if(localStorage.getItem("app_number") !== "installiert") {
        document.querySelector("body").style.display = "none";
        alert("Du hast die App nicht installiert, gehe in den App Store");
        window.location = "/../system/v1/desktop";
    } else {};
}

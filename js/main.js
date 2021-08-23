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
            window.location = "/../"
        }
    } else {
        const siteTitle = document.querySelector("title");
        const siteIcon = document.querySelector("#icon");
        siteTitle.innerHTML = "Desktop " + localStorage.getItem("username");
        siteIcon.href = localStorage.getItem("profilbild");
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
    abmelden.href = "/../"
}

function backToDesktop() {
    window.location = "/../desktop";
}

function closeApp() {
    window.location = "/../desktop/";
}


/*check installed */

function appInstalled() {
    if(localStorage.getItem("browser") !== "installiert") {
        document.querySelector("#app_browser_").style.display = "none";
    } else {
        document.querySelector("#app_browser_").style.diesplay = "unset";
    }
}

function menuAppInstalled() {
    if(localStorage.getItem("browser") !== "installiert") {
        document.querySelector("#menu_browser_").style.display = "none";
    } else {
        document.querySelector("#menu_browser_").style.diesplay = "unset";
    }   
}

function isBrowserInstalled() {
    if(localStorage.getItem("browser") !== "installiert") {
        document.querySelector("body").style.display = "none";
        alert("Du hast die App nicht installiert, gehe in den App Store!")
        window.location = "/../desktop";
    } else {}

}
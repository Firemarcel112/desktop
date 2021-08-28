const h1 = document.querySelector("h1");

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

function checkIsSystemValid() {

    if(localStorage.getItem/("PC") == null) {
        alert("CRITICAL ERROR")
        var critical = "error";
        sessionStorage.setItem("Status" , critical)
        sessionStorage.removeItem("angemeldet");
        window.location = "/../";
    } 

    if(localStorage.getItem("PCSPEC_RAM") == "8 GB") {
        const eingerichtet = "eingerichtet";
        localStorage.setItem("PC" , eingerichtet)
    } else if (localStorage.getItem("PCSPEC_RAM") == "16 GB") {
        const eingerichtet = "eingerichtet";
        localStorage.setItem("PC" , eingerichtet)
    } else {
        const error = "CRITICAL ERROR PCSPEC_RAM";
        localStorage.setItem("PC" , error);
        const valid = "noValid";
        sessionStorage.setItem("SYSTEM", valid);

        alert("CRITICAL ERROR [PCSPEC_RAM]");
        var critical = "error";
        sessionStorage.setItem("Status" , critical)
        sessionStorage.removeItem("angemeldet");
        window.location = "/../"
    }

    if(localStorage.getItem("PCSPEC_CPU") == "Amd") {
        const eingerichtet = "eingerichtet";
        localStorage.setItem("PC" , eingerichtet)
    } else if (localStorage.getItem("PCSPEC_CPU") == "Intel") {
        const eingerichtet = "eingerichtet";
        localStorage.setItem("PC" , eingerichtet)
    } else {
        const error = "CRITICAL ERROR PCSPEC_CPU";
        localStorage.setItem("PC" , error);
        const valid = "noValid";
        sessionStorage.setItem("SYSTEM", valid);

        alert("CRITICAL ERROR [PCSPEC_CPU]");
        var critical = "error";
        sessionStorage.setItem("Status" , critical);
        sessionStorage.removeItem("angemeldet");
        window.location = "/../"
    }

    if(localStorage.getItem("PCSPEC_Motherboard") == "ATX") {
        const eingerichtet = "eingerichtet";
        localStorage.setItem("PC" , eingerichtet)
    } else if (localStorage.getItem("PCSPEC_Motherboard") == "E-ATX") {
        const eingerichtet = "eingerichtet";
        localStorage.setItem("PC" , eingerichtet)
    } else {
        const error = "CRITICAL ERROR PCSPEC_Motherboard";
        localStorage.setItem("PC" , error);
        const valid = "noValid";
        sessionStorage.setItem("SYSTEM", valid);

        alert("CRITICAL ERROR [PCSPEC_Motherboard]");
        var critical = "error";
        sessionStorage.setItem("Status" , critical);
        sessionStorage.removeItem("angemeldet");
        window.location = "/../"
    }
    return;
}

function isLoggedIn() {
    if (sessionStorage.getItem("angemeldet") !== "true" )  {
        if (localStorage.getItem("username") == null || localStorage.getItem("password") == null) {
            var bildschirm = document.querySelector("body");
            bildschirm.style.display = "none";
            alert("Du besitzt keinen Account bitte erstelle dir einen");
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

function isValidAccount() {
    if(localStorage.getItem("username") == null || localStorage.getItem("password") == null) {
        alert("SYSTEM_USER_ERROR");
        window.location = "/../system/v1/lockscreen";
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
        const leave = true;
        sessionStorage.setItem("leave" , leave);
    } else {
        return;
    }
    const abmelden = document.querySelector("#abmelden");
    abmelden.href = "/../system/v1/desktop/abmelden"
}

function backToDesktop() {
    window.location = "/../system/v1/desktop";
}

function closeApp() {
    window.location = "/../system/v1/desktop";
}

// Installed Apps // 

function appInstalled() {

    if(localStorage.getItem("app_browser") !== "installiert") {
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

    if(localStorage.getItem("app_browser") !== "installiert") {
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
    if(localStorage.getItem("app_browser") !== "installiert") {
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
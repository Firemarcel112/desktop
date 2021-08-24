function main() {

    const username = document.querySelector("#name");
    const profilbild = document.querySelector("#s_profilbild");

    profilbild.src = localStorage.getItem("profilbild");
    username.innerHTML = "Hallo " + localStorage.getItem("username");
    const notizen = document.querySelector("#notizen");
    notizen.innerHTML = localStorage.getItem("notices");
    if(localStorage.getItem("notices") == "") {
        notizen.innerHTML = "Hier ist platz für deine Notizen!"
    }
}   

function changeName() {

    const newName = document.querySelector("#newname").value;

    if(newName == "") {
        return alert("Bitte wähle einen Gültigen Nutzernamen")
    } else { 
        localStorage.setItem("username" , newName);
        window.location.reload();
    }
}

function changePassword() {

    const newPassword = document.querySelector("#newpassword").value;

    if(newPassword == "") {
        return alert("Bitte wähle ein Gültiges Passwort")
    } else {
        localStorage.setItem("password" , newPassword);
    }
    window.location.reload();

}

function changeBackground() {

    const newBackground = document.querySelector("#newBackground").value;

    if(newBackground == "") {
        alert("Bitte gebe einen Gültigen Link an!")
    } else {
        localStorage.setItem("hintergrundbild" , newBackground);
    }

    window.location.reload();
}

function changeProfilbild() {

    const newProfilbild = document.querySelector("#newProfilbild").value;

    if(newProfilbild == "") {
        alert("Bitte gebe einen gültien Link an!")
    } else {
        localStorage.setItem("profilbild", newProfilbild);
    }
    
    window.location.reload();
    newProfilbild.value = " HEY";
}

function deleteProfile() {

    let check = confirm("Willst du dein Profil wirklich Löschen?");

    if(check) {
        alert("Dein Profil wurde gelöscht");
        localStorage.clear();
        const angemeldet = "false";
        sessionStorage.setItem("angemeldet" , angemeldet)
        window.location = "/../"
    } else {
        alert("Vorgang Abgebrochen");
    }
}

function changeColor() {

    const newColor = document.querySelector("#newColor").value;
    localStorage.setItem("appColor" , newColor);
    window.location.reload();
}

function backToWelcome() {

    const allgemeines = document.querySelector("#allgemeines");
    allgemeines.style.display = "none";

    const installed = document.querySelector("#installed");
    installed.style.display = "none";

    const welcome = document.querySelector("#welcome");
    welcome.style.display = "unset";
}

function saveNotice() {
    const notizen = document.querySelector("#notizen").value;
    localStorage.setItem("notices" , notizen);
    notizen.innerHTML = localStorage.getItem("notizen");
    alert("Notizen gespeichert")
}

function openAllgemeines() {

    const welcome = document.querySelector("#welcome");
    welcome.style.display = "none";

    const installed = document.querySelector("#installed");
    installed.style.display = "none";


    const allgemeines = document.querySelector("#allgemeines");
    allgemeines.style.display = "unset";
}

function openApps() {

    const welcome = document.querySelector("#welcome");
    welcome.style.display = "none";

    const allgemeines = document.querySelector("#allgemeines");
    allgemeines.style.display = "none";

    const installed = document.querySelector("#installed");
    installed.style.display = "unset";

}

function isInstalled() {
    if(localStorage.getItem("browser") == "installiert") {
        const browser = document.querySelector("#browser");
        const uninstall = document.querySelector("#uninstall_browser");

        browser.style.display = "unset";
        uninstall.style.display = "unset";
    }

    if(localStorage.getItem("app_number") == "installiert") {

        const app_number = document.querySelector("#app_number");
        const uninstall = document.querySelector("#uninstall_number");
       
        app_number.style.display = "unset";
        uninstall.style.display = "unset";
    }
}

function uninstallBrowser() {
    if(localStorage.getItem("browser") !== "installiert") {
        alert("Fehler aufgetreten!");
        window.location.reload();
    } else {
        const check = confirm("Möchtest du die App Browser wirklich deinstallieren?");
        if(check) {
            localStorage.removeItem("browser");
            alert("App Browser wurde erfolgreich deinstalliert!")
            window.location.reload()
        } else {
            alert("Vorgang abgebrochen")
        }
    }

}

function uninstallAppNumber() {
    if(localStorage.getItem("app_number") !== "installiert") {
        alert("Fehler aufgetreten");
        window.location.reload();
    } else {
        var check = confirm("Möchtest du die App Nummer erraten wirklich Deinstallieren? Dein Highscore geht dadurch verloren")
        if(check) {
        localStorage.removeItem("app_number");
            localStorage.removeItem("highscore_app_number");
            localStorage.removeItem("highscore_app_numer_falsch");
            alert("App Nummer erraten erfolgreich deinstalliert");
            window.location.reload();
        } else {
            alert("Vorgang abgebrochen")
        }
    }
}
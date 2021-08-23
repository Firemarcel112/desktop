function main() {

    const username = document.querySelector("#name");
    const profilbild = document.querySelector("#s_profilbild");

    profilbild.src = localStorage.getItem("profilbild");
    username.innerHTML = "Hallo " + localStorage.getItem("username");
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
}

function uninstallBrowser() {
    if(localStorage.getItem("browser") !== "installiert") {
        alert("Fehler aufgetreten!");
        window.location.reload();
    } else {
        localStorage.removeItem("browser");
        alert("App Browser wurde erfolgreich deinstalliert!")
        window.location.reload()
    }

}
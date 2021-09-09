function main() {

    const username = document.querySelector("#name");
    const profilbild = document.querySelector("#s_profilbild");

    profilbild.src = localStorage.getItem("profilbild");
    username.innerHTML = "Hallo " + localStorage.getItem("username");
    const notizen = document.querySelector("#notizen");
    notizen.innerHTML = localStorage.getItem("notices");
    if (localStorage.getItem("notices") == "") {
        notizen.innerHTML = "Hier ist platz für deine Notizen!"
    }
}

function changeName() {

    const newName = document.querySelector("#newname").value;

    if (newName == "") {
        return alert("Bitte wähle einen Gültigen Nutzernamen")
    } else {
        localStorage.setItem("username", newName);
        window.location.reload();
    }
}

function changePassword() {

    const newPassword = document.querySelector("#newpassword").value;

    if (newPassword == "") {
        return alert("Bitte wähle ein Gültiges Passwort")
    } else {
        localStorage.setItem("password", newPassword);
    }
    window.location.reload();

}


function deleteProfile() {

    let check = confirm("Willst du dein Profil wirklich Löschen?");

    if (check) {
        alert("Dein Profil wurde gelöscht");
        // Delete User //
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("registriert");

        // Delete User Configs //
        localStorage.removeItem("hintergrundbild");
        localStorage.removeItem("profilbild");
        localStorage.removeItem("SYS_CONFIG_AppColor");
        localStorage.removeItem("SYS_CONFIG_TaskBarColor");
        localStorage.removeItem("SYS_CONFIG_TaskIconColor");

        // Delete installed Apps //
        localStorage.removeItem("app_browser");
        localStorage.removeItem("app_number");

        const angemeldet = "false";
        sessionStorage.setItem("angemeldet", angemeldet)
        window.location = "/../system/v1/lockscreen/"
    } else {
        alert("Vorgang Abgebrochen");
    }
}

function changeBackground() {

    const newBackground = document.querySelector("#newBackground").value;

    if (newBackground == "") {
        alert("Bitte gebe einen Gültigen Link an!")
    } else {
        localStorage.setItem("hintergrundbild", newBackground);
    }

    window.location.reload();
}

function changeBackgroundReset() {

    alert("Hintergrund zurückgesetzt!")
    const newBackground = "noImage";
    localStorage.setItem("hintergrundbild", newBackground);

}

function changeProfilbild() {

    const newProfilbild = document.querySelector("#newProfilbild").value;

    if (newProfilbild == "") {
        alert("Bitte gebe einen gültien Link an!")
    } else {
        localStorage.setItem("profilbild", newProfilbild);
    }

    window.location.reload();
}

function changeProfilbildReset() {
    alert("Profilbild zurückgesetzt");
    const url = "/../system/v1/standardbilder/profilbild.jpg"
    localStorage.setItem("profilbild", url);
}

function changeColor() {

    const newColor = document.querySelector("#newColor").value;
    localStorage.setItem("SYS_CONFIG_AppColor", newColor);
    window.location.reload();
}

function changeColorReset() {
    localStorage.removeItem("SYS_CONFIG_AppColor");
    alert("Appfarben zurückgesetzt")
    window.location.reload();
}

function changeTaskbarColor() {
    const newColor = document.querySelector("#taskColor").value;
    localStorage.setItem("SYS_CONFIG_TaskBarColor", newColor);
    window.location.reload();

}

function changeTaskbarColorReset() {
    localStorage.removeItem("SYS_CONFIG_TaskBarColor")
    alert("Taskbarfarbe zurückgesetzt");
    window.location.reload()
}

function changeTaskIconColor() {
    const newColor = document.querySelector("#taskIconColor").value;
    localStorage.setItem("SYS_CONFIG_TaskIconColor", newColor);
    window.location.reload();
}

function changeTaskIconColorReset() {
    localStorage.removeItem("SYS_CONFIG_TaskIconColor")
    alert("TaskleistenIconfarbe zurückgesetzt");
    window.location.reload()
}


function saveNotice() {
    const notizen = document.querySelector("#notizen").value;
    localStorage.setItem("notices", notizen);
    notizen.innerHTML = localStorage.getItem("notizen");
    alert("Notizen gespeichert")
}

function isInstalled() {
    if (localStorage.getItem("app_browser") == "installiert") {
        const browser = document.querySelector("#browser");
        const uninstall = document.querySelector("#uninstall_browser");

        browser.style.display = "unset";
        uninstall.style.display = "unset";
    }

    if (localStorage.getItem("app_number") == "installiert") {

        const app_number = document.querySelector("#app_number");
        const uninstall = document.querySelector("#uninstall_number");

        app_number.style.display = "unset";
        uninstall.style.display = "unset";
    }
}

function uninstallBrowser() {
    if (localStorage.getItem("app_browser") !== "installiert") {
        alert("Fehler aufgetreten!");
        window.location.reload();
    } else {
        const check = confirm("Möchtest du die App Browser wirklich deinstallieren?");
        if (check) {
            localStorage.removeItem("app_browser");
            alert("App Browser wurde erfolgreich deinstalliert!")
            window.location.reload()
        } else {
            alert("Vorgang abgebrochen")
        }
    }

}

function uninstallAppNumber() {
    if (localStorage.getItem("app_number") !== "installiert") {
        alert("Fehler aufgetreten");
        window.location.reload();
    } else {
        var check = confirm("Möchtest du die App Nummer erraten wirklich Deinstallieren? Dein Highscore geht dadurch verloren")
        if (check) {
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
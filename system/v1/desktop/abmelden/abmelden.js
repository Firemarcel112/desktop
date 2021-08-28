const outmessage = document.querySelector("#message");

function abmelden() {
    if (sessionStorage.getItem("angemeldet") == "false") {
        window.location = "/../system/v1/lockscreen"
    }
}

function message() {

    outmessage.innerHTML = "Apps werden geschlossen";
}

function message1() {
    outmessage.innerHTML = "SystemGUI Wird in den Ruhezustand gefahren";
}

function message2() {
    outmessage.innerHTML = `Benutzer ${localStorage.getItem("username")} wird abgemeldet`;
}

function message3() {
    window.location = "/../system/v1/lockscreen/";
    var anmelden = "false";
    sessionStorage.setItem("angemeldet" , anmelden);
    sessionStorage.removeItem("leave");
}
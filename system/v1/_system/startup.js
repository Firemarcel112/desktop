const message = document.querySelector("#message");

function loadSystem() {
    message.innerHTML = "System Startet"
}

function loadSystem1() {
    message.innerHTML = "Betriebssystem wird vorbereitet";
}

function loadSystem2() {
    message.innerHTML = "System GUI wird generiert"
}

function loadSystem3() {
    message.innerHTML = "Systemstart erfolgreich"
}

function loadSystem4() {
    window.location = "/../system/v1/lockscreen/"
    const started = "gestartet";
    sessionStorage.setItem("Status" , started);
}

function startBIOS() {
    window.location = "/../system/bios"
}
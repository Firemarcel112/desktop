const message = document.querySelector("#message");

function loadSystem() {

    message.innerHTML = "System Startet";

    const bios = document.querySelector("#bios");
    bios.disabled = true;
    bios.style.backgroundColor = "red";
}

function loadSystem1() {

    message.innerHTML = "Betriebssystem wird vorbereitet";
    
    const bios = document.querySelector("#bios");
    bios.disabled = false;
    bios.style.backgroundColor = "green";
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
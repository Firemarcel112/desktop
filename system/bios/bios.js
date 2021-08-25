function saveSettings() {
    let check = confirm("Möchtest du die Einstellungen wirklich speichern?");
    if(check) {
        const cpu = document.querySelector("#cpu").value;
        const motherboard = document.querySelector("#motherboard").value;
        const ram = document.querySelector("#ram").value;
        const version = document.querySelector("#version").value;

        localStorage.setItem("PCSPEC_CPU" , cpu);
        localStorage.setItem("PCSPEC_Motherboard" , motherboard);
        localStorage.setItem("PCSPEC_RAM" , ram);
        localStorage.setItem("SYSTEM_VERSION" , version);
        
        var will_leave = confirm("Mächtest du das BIOS verlassen?");
        if(will_leave) {
            window.location = "/../";
            alert("DEBUG Save Settings");
            const leave = "true";
            sessionStorage.setItem("BIOS_LEAVE" , leave);
        } else {
            return;
        }
    }

}

function leaveBIOS() {

    let check = confirm("Möchtest du das BIOS wirklich verlassen? Alle ungespeicherten Änderungen gehen dabei verloren");
    if(check) {

        window.location = "/../";

        const leave = "true";
        sessionStorage.setItem("BIOS_LEAVE" , leave);
    } else {
        return;
    }
}

function forceShutdown() {

    let check = confirm("Möchtest du dein System wirklich herunterfahren?")
    if(check) {

        window.location = "/../";
    } else {
        return;
    }
}

function isSystemStarted() {

    if(sessionStorage.getItem("Status") == "gestartet") {
        alert("Du kanst nicht im eingeschalteten Betrieb auf das BIOS zugreifen");
        return window.location = "/../"
    }
}

function addInformations() {
    // PCSPECS //
    const cpu = document.querySelector("#cpu");
    const motherboard = document.querySelector("#motherboard");
    const ram = document.querySelector("#ram");
    const version = document.querySelector("#version");

    cpu.value = localStorage.getItem("PCSPEC_CPU");
    // cpu.disabled = "true";

    motherboard.value = localStorage.getItem("PCSPEC_Motherboard");
    // motherboard.disabled = "true"

    ram.value = localStorage.getItem("PCSPEC_RAM");
    // ram.disabled = "true";

    version.value = localStorage.getItem("SYSTEM_VERSION");

}

function addTime() {

    const zeit = document.querySelector("#time");
    const time = new Date();
    const hour = time.getHours();
    const fullh = ((hour < 10) ? "0" : "");
    const minutes = time.getMinutes();
    const fullm = ((minutes < 10) ? "0" : "");
    const seconds = time.getSeconds();
    const fullseconds = ((seconds < 10) ? "0" : "");

    zeit.innerHTML = fullh + hour + ":" + fullm + minutes + ":" + fullseconds + seconds; 
}
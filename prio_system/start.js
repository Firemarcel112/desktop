function system() {
    const ram = document.querySelector("#RAM").value;
    const cpu = document.querySelector("#CPU").value;
    const motherboard = document.querySelector("#MOTHERBOARD").value;
    const eingerichtet = "eingerichtet"

    localStorage.setItem("PCSPEC_RAM" , ram);
    localStorage.setItem("PCSPEC_CPU" , cpu);
    localStorage.setItem("PCSPEC_Motherboard" , motherboard)
    localStorage.setItem("PC" , eingerichtet);
    window.location.reload();
}

function checkIsSystemValidFirst() {
    if(localStorage.getItem("PC")) {

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
            return;
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
            return;
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
            return;
        }
        const systemIsValid = "SystemIsValid";
        sessionStorage.setItem("SYSTEM" , systemIsValid);
        const config = document.querySelector("#configurator");
        config.style.display = "none";
        const start = document.querySelector("#startup");
        start.style.display = "unset";

        const ram = document.querySelector("#ram");
        const cpu = document.querySelector("#cpu");
        const motherboard = document.querySelector("#motherboard");

        ram.innerHTML = "RAM: " + localStorage.getItem("PCSPEC_RAM");
        cpu.innerHTML = "CPU: "  + localStorage.getItem("PCSPEC_CPU");
        motherboard.innerHTML = "Motherboard: " + localStorage.getItem("PCSPEC_Motherboard");
    } 
}

function checkSystemVersion() {

    if(sessionStorage.getItem("Status") == "gestartet") {
        if(localStorage.getItem("SYSTEM_VERSION") == "V1") {
            window.location = "/../system/v1/lockscreen";
        }
    } else {
        if(localStorage.getItem("SYSTEM_VERSION") == "V1") {
            window.location = "/../system/v1/startup";
        } else {
            const version = "V1";
            localStorage.setItem("SYSTEM_VERSION" , version);
        }
    }
}

function isSystemStarted() {
    if(sessionStorage.getItem("Status") == "gestartet") {
        checkSystemVersion();
    }
}
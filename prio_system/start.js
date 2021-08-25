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
            informationMessage();
            window.setInterval("checkSystemVersion()" , 3500);
        }
    }
}

function checkSystemVersionAfterBIOSleave() {

    if(localStorage.getItem("PC") == "eingerichtet") {
        window.location.reload();
    }

    if(localStorage.getItem("PC") == "CRITICAL ERROR PCSPEC_RAM" || "CRITICAL ERROR PCSPEC_CPU" || "CRITICAL ERROR PCSPEC_Motherboard") {
        alert(localStorage.getItem("PC"))
    }

    if(sessionStorage.getItem("BIOS_LEAVE") == "true") {
        if(localStorage.getItem("SYSTEM_VERSION") == "V1") {
            if(sessionStorage.getItem("SYSTEM") == "SystemIsValid") {
                window.location = "/../system/v1/startup";
                sessionStorage.removeItem("BIOS_LEAVE");
            } else {
                return alert("Kritischer Fehler endeckt");
            }
        } else {
            const version = "V1";
            localStorage.setItem("SYSTEM_VERSION" , version);
            sessionStorage.removeItem("BIOS_LEAVE");
            alert("SYSTEM_VERSION ist nicht vorhanden ; System wird Zurückgesezt auf (V1)") 
            return window.location.reload()
        }
    }
}

function informationMessage() {
        
    const message = document.querySelector("#hinweis");
    message.innerHTML = "erster Start: Betriebssystem wird vorbereitet!<br>Bitte Warten!"
}

function isSystemStarted() {

    if(sessionStorage.getItem("Status") == "gestartet") {
        checkSystemVersion();
    }
}

function hasLeaveBIOS() {

    if(sessionStorage.getItem("BIOS_LEAVE") == "true") {
        document.querySelector("#start").style.display = "none";
        window.setTimeout("checkSystemVersionAfterBIOSleave()" , 700);
    }
}
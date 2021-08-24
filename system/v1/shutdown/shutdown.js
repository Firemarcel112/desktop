const message = document.querySelector("#message");

function shutSystem() {
    message.innerHTML = "Pc wird heruntergefahren";
}

function shutSystem1() {
    if(sessionStorage.getItem("angemeldet") == "true") {
        message.innerHTML = "Apps werden geschlossen"
    } else {
        message.innerHTML = "System GUI Wird bereinigt"
    }
}

function shutSystem2() {
    if(sessionStorage.getItem("angemeldet") == "true") {
        message.innerHTML = "Benutzer: " + localStorage.getItem("username") + " wird abgemeldet"
    } else {
        message.innerHTML = "Pc fährt herunter";
    }
}

function shutSystem3() {
    if(sessionStorage.getItem("angemeldet") == "true") {
        var abgemeldet = "false"
        sessionStorage.setItem("angemeldet" , abgemeldet);
        message.innerHTML = "Pc fährt herunter";
    } else {
        var status = "ausgeschaltet";
        sessionStorage.setItem("Status" , status);
        window.location = "/../";
    }
}

function shutSystem4() {
    var status = "ausgeschaltet";
    sessionStorage.setItem("Status" , status);
    window.location = "/../";

    
}
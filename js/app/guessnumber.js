window.onload = function load() {
    const right = document.querySelector("#right");
    right.innerHTML = "Richtige: " + Number(localStorage.getItem("highscore_app_number"));
    right.style.color = "green";

    const fail = document.querySelector("#fail");
    fail.innerHTML = "Falsche: " + Number(localStorage.getItem("highscore_app_number_falsch"));
    fail.style.color = "red";

}

function randomNumber() {
    const user = document.querySelector("#userinput").valueAsNumber;
    const message = document.querySelector("#message");
    var number = Math.floor(Math.random() * 6);

    if(isNaN(user)) {
        message.innerHTML = "Bitte gebe eine Gültige Zahl ein!"
        message.style.color = "red";
    }

    if(user == number) {

        message.innerHTML = "Du hast die Richtige Zahl erraten!"
        message.style.color = "green";

        const highscore = Number(localStorage.getItem("highscore_app_number")) + 1;
        localStorage.setItem("highscore_app_number" , highscore);

        const right = document.querySelector("#right");
        right.innerHTML = "Richtige: " + localStorage.getItem("highscore_app_number");
    } else {
        message.innerHTML = "Du hast leider die Falsche Zahl gewählt: Richtig wäre: " + number;
        message.style.color = "red";

        const newFail = Number(localStorage.getItem("highscore_app_number_falsch")) + 1;
        localStorage.setItem("highscore_app_number_falsch" , newFail);

        const fail = document.querySelector("#fail");
        fail.innerHTML = "Falsche: " + localStorage.getItem("highscore_app_number_falsch");
    }
}

function resetHighscore() {
    const check = confirm("Willst du deinen Highscore Wirklich zurücksetzen?")

    if(check) {
        localStorage.removeItem("highscore_app_number_falsch");
        localStorage.removeItem("highscore_app_number")
        alert("Dein Highscore Wurde gelsöcht");
        window.location.reload();
    } else {
        alert("Vorgang Abgebrochen");
    }
}
function time() {
    const time = new Date;
    const hour = time.getHours();
    const fullh = ((hour < 10) ? "0" : "");
    const minutes = time.getMinutes();
    const fullm = ((minutes < 10) ? "0" : "");
    const seconds = time.getSeconds();
    const fulls = ((seconds < 10) ? "0" : "");
    const uhr = document.querySelector("#task_time");

    uhr.innerHTML = fullh + hour + ":" + fullm + minutes + ":" + fulls + seconds;
}

function date() {
    const date = new Date;
    const day = date.getDate();
    const fullday = ((day < 10) ? "0" : "");
    const month = date.getMonth() + 1;
    const fullmonth = ((month < 10) ? "0" : "");
    const year = date.getFullYear();
    const datum = document.querySelector("#task_date");

    datum.innerHTML = fullday + day + "." + fullmonth + month + "." + year;
}

function _openMenu() {
    const profilbild = document.querySelector("#profilbild");
    const menu = document.querySelector("#menu");
    const username = document.querySelector("#username");
    profilbild.src = localStorage.getItem("profilbild");
    username.innerHTML = localStorage.getItem("username");
    menu.style.display = "unset";

    const start = document.querySelector("#start");
    const start2 = document.querySelector("#start_2");
    start.style.display = "none";
    start2.style.display = "block";
}

function _closeMenu() {
    const menu = document.querySelector("#menu");
    menu.style.display = "none";

    const start = document.querySelector("#start");
    const start2 = document.querySelector("#start_2");
    start.style.display = "block";
    start2.style.display = "none";
}


// Key events // 

document.onclick = function _menuclose() {
    _closeMenu();
}

document.addEventListener("keydown", function (event) {
    const menubar = document.querySelector("#menu");

    if (event.keyCode == 18) {

        if (menubar.style.display == "none") {
            _openMenu();
        } else if (menubar.style.display == "unset") {
            _closeMenu();
        };
    }

    // if(event.keyCode == 113) {
    //     _openHelp();
    // }
});

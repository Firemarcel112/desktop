function time() {
    const time = new Date;
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const fullm = ((minutes < 10) ? "0" : "");
    const seconds = time.getSeconds();
    const fulls = ((seconds < 10) ? "0" : "");
    const uhr = document.querySelector("#task_time");

    uhr.innerHTML = hour + ":" + fullm + minutes + ":" + fulls + seconds;
}

function date() {
    const date = new Date;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const fullmonth = ((month < 10) ? "0" : "");
    const year = date.getFullYear();
    const datum = document.querySelector("#task_date");

    datum.innerHTML = day + "." + fullmonth + month + "." + year;
}

function _openMenu() {
    const profilbild = document.querySelector("#profilbild");
    const menu = document.querySelector("#menu");
    profilbild.src = localStorage.getItem("profilbild");
    menu.style.display = "unset";
}

function _closeMenu() {
    const menu = document.querySelector("#menu");
    menu.style.display = "none";
}
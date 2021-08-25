function closeSuchleiste() {
    const suchleiste = document.querySelector("#suchleiste");
    const close = document.querySelector("#close_url");
    const open = document.querySelector("#open_url");

    suchleiste.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
}

function openSuchleiste() {
    const suchleiste = document.querySelector("#suchleiste");
    const close = document.querySelector("#close_url");
    const open = document.querySelector("#open_url");

    suchleiste.style.display = "block";
    close.style.display = "block";
    open.style.display = "none";
}

function searchURL() {
    const user = document.querySelector("#user").value;
    const page = document.querySelector("iframe");

    page.src = user;
}
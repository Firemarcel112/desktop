function installBrowser() {
    if(localStorage.getItem("browser") == "installiert") {
        return;
    } else {
        const installed = "installiert";
        localStorage.setItem("browser" , installed);
        alert("App: Browser erfolgreich installiert")
        window.location.reload();
    }
}

function isInstalled() {
    if(localStorage.getItem("browser") == "installiert") {
        const browser = document.querySelector("#browser");
        const b_install = document.querySelector("#install_browser");
        browser.style.display = "none";
        b_install.style.display = "none";
    }
}
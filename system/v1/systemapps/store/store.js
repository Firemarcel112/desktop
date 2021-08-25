function installBrowser() {
    if(localStorage.getItem("app_browser") == "installiert") {
        return;
    } else {
        const installed = "installiert";
        localStorage.setItem("app_browser" , installed);
        alert("App: Browser erfolgreich installiert")
        window.location.reload();
    }
}

function installNumber() {
    if(localStorage.getItem("app_number") == "installiert") {
        return;
    } else {
        const installed = "installiert";
        localStorage.setItem("app_number" , installed);
        alert("App: Nummer erraten erfolgreich installiert")
        window.location.reload();
    }
}

function isInstalled() {
    if(localStorage.getItem("app_browser") == "installiert") {
        const browser = document.querySelector("#browser");
        const b_install = document.querySelector("#install_browser");
        browser.style.display = "none";
        b_install.style.display = "none";
    } else {
        const browser = document.querySelector("#browser");
        const b_install = document.querySelector("#install_browser");
        browser.style.display = "block";
        b_install.style.display = "block";
    }

    if(localStorage.getItem("app_number") == "installiert") {
        const app_number = document.querySelector("#app_number");
        const an_install = document.querySelector("#install_number");
        app_number.style.display = "none";
        an_install.style.display = "none";
    } else {
        const app_number = document.querySelector("#app_number");
        const an_install = document.querySelector("#install_number");
        app_number.style.display = "block";
        an_install.style.display = "block";
    }
}
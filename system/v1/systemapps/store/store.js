function installerBrowser() {
    if(localStorage.getItem("app_browser") == "installiert") {
        return;
    } else {
        
        const btn = document.querySelector("#install_browser");
        btn.style.display = "none";

        const installer = document.querySelector("#installer_browser");
        installer.style.display = "block";

        const loader = document.querySelector("#installer_browser2");
        loader.style.display = "block";

        window.setTimeout("installBrowser()" , 2000);
    }
}

function installBrowser() {
    if(localStorage.getItem("app_browser") == "installiert") {
        return;
    } else {

        const installer = document.querySelector("#installer_browser");
        installer.innerHTML = "Heruntergeladen";

        const loader = document.querySelector("#installer_browser2")
        loader.style.display = "none";

        const installed = "installiert";
        localStorage.setItem("app_browser" , installed);
    }
}

function installerNumber() {
    if(localStorage.getItem("app_number") == "installiert") {
        return;
    } else {

        const btn = document.querySelector("#install_number");
        btn.style.display = "none";

        const installer = document.querySelector("#installer_number");
        installer.style.display = "block";

        const loader = document.querySelector("#installer_number2");
        loader.style.display = "block";

        window.setTimeout("installNumber()" , 2500);
    }
}

function installNumber() {
    if(localStorage.getItem("app_number") == "installiert") {
        return;
    } else {
        const installer = document.querySelector("#installer_number");
        installer.innerHTML = "Heruntergeladen";

        const loader = document.querySelector("#installer_number2")
        loader.style.display = "none";

        const installed = "installiert";
        localStorage.setItem("app_number" , installed);
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
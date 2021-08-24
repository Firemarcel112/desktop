const apps = {
    "system": "/../system/v1/systemapps/",
    "apps": "/../system/v1/app/",

    "settings": "settings",
    "browser": "browser",
    "store": "store",
    "number": "guessnumber"
}

function desktopApps() {

    const systemapp_settings = document.querySelector("#systemapp_settings");
    systemapp_settings.href = apps.system + apps.settings;

    const systemapp_store = document.querySelector("#systemapp_store");
    systemapp_store.href = apps.system + apps.store;

    const app_browser = document.querySelector("#app_browser");
    app_browser.href = apps.apps + apps.browser;

    const app_number = document.querySelector("#app_number");
    app_number.href = apps.apps + apps.number;
}


function menuApps() {

    const menu_systemapp_settings = document.querySelector("#menu_settings");
    menu_systemapp_settings.href = apps.system + apps.settings;

    const app_browser = document.querySelector("#menu_browser");
    app_browser.href = apps.apps + apps.browser;

    const systemapp_store = document.querySelector("#menu_store");
    systemapp_store.href = apps.system + apps.store;

    const app_number = document.querySelector("#menu_number");
    app_number.href = apps.apps + apps.number;
}
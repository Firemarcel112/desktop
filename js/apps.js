const apps = {
    "system": "/../desktop/system/",
    "apps": "/../desktop/app/",

    "settings": "settings",
    "browser": "browser",
    "store": "store",
}

function desktopApps() {

    const systemapp_settings = document.querySelector("#systemapp_settings");
    systemapp_settings.href = apps.system + apps.settings;

    const app_browser = document.querySelector("#app_browser");
    app_browser.href = apps.apps + apps.browser;

    const systemapp_store = document.querySelector("#systemapp_store");
    systemapp_store.href = apps.system + apps.store;
}


function menuApps() {

    const menu_systemapp_settings = document.querySelector("#menu_settings");
    menu_systemapp_settings.href = apps.system + apps.settings;

    const app_browser = document.querySelector("#menu_browser");
    app_browser.href = apps.apps + apps.browser;

    const systemapp_store = document.querySelector("#menu_store");
    systemapp_store.href = apps.system + apps.store;
}
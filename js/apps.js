const apps = {
    "system": "/../desktop/system/",
    "apps": "/../desktop/app/",

    "settings": "settings",
}

function desktopApps() {
    
    const systemapp_settings = document.querySelector("#systemapp_settings");
    systemapp_settings.href = apps.system + apps.settings;
}


function menuApps() {

    const menu_systemapp_settings = document.querySelector("#menu_settings");
    menu_systemapp_settings.href = apps.system + apps.settings;
}
const theme = {
    "appsColor": localStorage.getItem("appColor"),
}

function themeDesktop() {
    const apps = 
    [
    document.querySelector("#t_c"),
    document.querySelector("#t_c1"),
    document.querySelector("#t_c2"),
    ]

    apps[0].style.color = theme.appsColor;
    apps[1].style.color = theme.appsColor;
    apps[2].style.color = theme.appsColor;
}

function themeMenu() {
    const menu_apps = 
    [
    document.querySelector("#m_t_c"),
    document.querySelector("#m_t_c1"),
    document.querySelector("#m_t_c2"),
    ]

    menu_apps[0].style.color = theme.appsColor;
    menu_apps[1].style.color = theme.appsColor;
    menu_apps[2].style.color = theme.appsColor;
}
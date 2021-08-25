const theme = {
    "appsColor": localStorage.getItem("SYS_CONFIG_AppColor"),
    "taskbarColor": localStorage.getItem("SYS_CONFIG_TaskBarColor"),
    "taskIconColor": localStorage.getItem("SYS_CONFIG_TaskIconColor")
}

function themeDesktop() {
    const apps = 
    [
        document.querySelector("#t_c"),
        document.querySelector("#t_c1"),
        document.querySelector("#t_c2"),
        document.querySelector("#t_c3"),
    ]

    apps[0].style.color = theme.appsColor;
    apps[1].style.color = theme.appsColor;
    apps[2].style.color = theme.appsColor;
    apps[3].style.color = theme.appsColor;
}

function themeMenu() {
    const menu_apps = 
    [
        document.querySelector("footer"),
        document.querySelector("#start"),
        document.querySelector("#start_2"),
        document.querySelector("#m_t_c"),
        document.querySelector("#m_t_c1"),
        document.querySelector("#m_t_c2"),
        document.querySelector("#m_t_c3")
    ]

    menu_apps[0].style.backgroundColor = theme.taskbarColor;
    menu_apps[1].style.color = theme.taskIconColor;
    menu_apps[2].style.color = theme.taskIconColor;
    menu_apps[3].style.color = theme.appsColor;
    menu_apps[4].style.color = theme.appsColor;
    menu_apps[5].style.color = theme.appsColor;
    menu_apps[6].style.color = theme.appsColor;
}
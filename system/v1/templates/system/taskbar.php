<div id="menu">
        <img id="profilbild">
        <p id="username"></p>
        <a onclick="logoff()" id="abmelden">Abmelden</a>
        <a id="shutdown" onclick="shutdownSystem()"><i class="fas fa-power-off"></i></a>

            <div id="appleiste">
                <div class="m_app_hover">
                    <a id="menu_settings"><img class="m_appimg" src="/../system/v1/standardbilder/apps/settings.png"><p id="m_t_c" class="m_app_desc">Einstellungen</p></a>
                </div>

                <div class="m_app_hover">
                    <a id="menu_store"><img  class="m_appimg" src="/../system/v1/standardbilder/apps/app_store.png"><p id="m_t_c1" class="m_app_desc">App Store</p></a>
                </div>

                <div id="menu_browser_" class="m_app_hover">
                    <a id="menu_browser"><img class="m_appimg" src="/../system/v1/standardbilder/apps/browser.png"><p id="m_t_c2" class="m_app_desc">Browser</p></a>
                </div>

                <div id="menu_app_number_" class="m_app_hover">
                    <a id="menu_number"><img  class="m_appimg" src="/../system/v1/standardbilder/apps/app_guessmynumber.png"><p id="m_t_c3" class="m_app_desc">Nummer erraten</p></a>
                </div>

            </div>
        </div>

        <footer>
            <a onclick="_closeMenu()" ondblclick="_openMenu()" id="start"><i class="fab fa-windows"><span id="startooltip">Start</span></i></a>
            <p id="task_time"></p>
            <p id="task_date"></p>
            <p onclick="backToDesktop()" id="bildschirm"></p>
            <script src="/../prio_system/theme_config.js"></script>
            <script src="/../system/v1/_system/main.js"></script>
            <script src="/../system/v1/_system/taskbar.js"></script>
            <script src="/../system/v1/_system/apps.js"></script>
            <link rel="stylesheet" href="/../system/v1/_system/taskbar.css">
            <script>
                // Check System started and User is logged in //
                window.setTimeout("isLoggedIn()" , 1);
                window.setTimeout("checkIsSystemStarted()" , 1);
                window.setInterval("checkIsSystemValid()" , 1000);

                // Taskbar //
                window.setTimeout("time()" , 1);
                window.setInterval("time()" , 1000);
                window.setTimeout("date()" , 1);
                window.setInterval("date()" , 900000);
                window.setTimeout("menuAppInstalled()" , 1);
                window.setTimeout("themeMenu()" , 1);

                // Taskbar href // 
                window.setTimeout("menuApps()" , 1);
            </script>
        </footer>
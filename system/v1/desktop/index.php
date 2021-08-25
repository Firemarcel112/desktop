<!DOCTYPE html>
<html oncontextmenu="return false">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link id="icon" rel="icon" href="standardbilder/profilbild.jpg">
        <!-- Bootstrap && FontAwesome-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/fe01f3ebc7.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="desktop.css">
    </head>
    <body>
        <noscript><style>body {display: none}</style></noscript>

        <div onclick="o_settings()" class="app_hover">
            <a id="systemapp_settings"><img class="appimg" src="/../system/v1/standardbilder/apps/settings.png"><p id="t_c" class="app_desc">Einstellungen</p></a>
        </div>

        <div onclick="o_store()" class="app_hover">
            <a id="systemapp_store"><img  class="appimg" src="/../system/v1/standardbilder/apps/app_store.png"><p id="t_c1" class="app_desc">App Store</p></a>
        </div>

        <div onclick="o_browser()" id="app_browser_" class="app_hover">
            <a id="app_browser"><img  class="appimg" src="/../system/v1/standardbilder/apps/browser.png"><p id="t_c2" class="app_desc">Browser</p></a>
        </div>

        <div onclick="o_number()" id="app_number_" class="app_hover">
            <a id="app_number"><img  class="appimg" src="/../system/v1/standardbilder/apps/app_guessmynumber.png"><p id="t_c3" class="app_desc">Nummer erraten</p></a>
        </div>

        <?php include("../templates/system/taskbar.php") ?>
    	<script>
            // Check Installed Apps //
            window.setTimeout("appInstalled()" , 1);

            // Theme //
            window.setTimeout("themeDesktop()" , 1);


            // BackgroundImage //
            const backgroundImage = document.querySelector("body");
            if(localStorage.getItem("hintergrundbild") === "noImage") {
                backgroundImage.style.background = `url("/../system/v1/standardbilder/wallpaper_desktop.jpg")`
            } else {
                backgroundImage.style.background = `url('${localStorage.getItem("hintergrundbild")}')`
                if(localStorage.getItem("hintergrundbild") == null) {
                    alert("Hintergrundbild nicht verfügbar - Standardbild wird geladen")
                    const noImage = "noImage";
                    localStorage.setItem("hintergrundbild" , noImage)
                    window.location.reload()
                }
            }
        </script>
    </body>
</html>
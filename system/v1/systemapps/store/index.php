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
        <link rel="stylesheet" href="store.css">
    </head>
    <body>
        <?php include("../../templates/apps/fenster.php") ?>

        <div class="container">
            <div class="row">
                <div class="col">
                    <a class="app" id="browser"><img class="appimg" src="/../system/v1/standardbilder/apps/browser.png"><p class="app_desc">Browser</p></a>
                </div>
                <div class="col">
                    <input id="install_browser" onclick="installerBrowser()" class="btn btn-primary , app" type="submit" value="Browser installieren">
                    <p id="installer_browser" class="isloading">Wird heruntergeladen: </p>
                    <div id="installer_browser2" class="loading"></div>
                    <br>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <a class="app" id="app_number"><img class="appimg" src="/../system/v1/standardbilder/apps/app_guessmynumber.png"><p class="app_desc">Nummer erraten</p></a>
                </div>
                <div class="col">
                    <input id="install_number" onclick="installerNumber()" class="btn btn-primary , app" type="submit" value="Nummer erraten installieren">
                    <p id="installer_number" class="isloading">Wird heruntergeladen: </p>
                    <div id="installer_number2" class="loading"></div>
                    <br>
                </div>
            </div>
        </div>

        <?php include("../../templates/system/taskbar.php") ?>
        <script src="store.js"></script>
        <script>

            // Store Configuration //
            window.setTimeout("isInstalled()" , 1);

            // Fenstername // 
            h1.innerHTML = "App Store"
        </script>
    </body>
</html>
<!DOCTYPE html>
<html oncontextmenu="return false">
    <head>
        <meta charset="UTF-8">
        <title>Settings</title>
        <link id="icon" rel="icon" href="standardbilder/profilbild.jpg">
        <!-- Bootstrap && FontAwesome-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/fe01f3ebc7.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="account.css">
    </head>
    <body>
        <noscript><style>body {display: none}</style></noscript>
        <h1 onclick="backToWelcome()">Einstellungen | Benutzer</h1>
        <p id="close" onclick="closeApp()" id="close">X<span id="tooltip">Schließen</span></p>
        <?php include("../../../templates/system/settings/sidebar.php") ?>

        <div id="allgemeines">
            <div class="container">
                <div class="row">
                    <div class="col">

                        <p id="changeBenutzer">Benutzername Ändern:</p>
                        <br>

                        <p id="changePassword">Passwort Ändern:</p>
                        <br>

                        <p id="changeBackground">Hintergrundbild Ändern:</p>
                        <br>

                        <p id="changeProfilbild">Profilbild ändern:</p>
                        <br>

                        <p class="color_change">Appnamen farbe ändern:</p>
                        <br>

                        <p class="color_change">Taskleistenfarbe ändern:</p>
                        <br>

                        <p class="color_change">TaskleisenIconfarbe ändern:</p>
                        <br>

                        <p id="deleteProfile">Profil löschen:</p>
                        
                    </div>
                    <div class="col">

                        <input class="btn btn-primary" id="newname" placeholder="Neuer Benutzername">
                        <input class="btn btn-primary" onclick="changeName()" type="submit" value="Speichern">
                        <br>

                        <input class="btn btn-primary" id="newpassword" type="password" placeholder="Neues Passwort">
                        <input class="btn btn-primary" onclick="changePassword()" type="submit" value="Speichern">
                        <br>

                        <input class="btn btn-primary" id="newBackground" placeholder="Neues Hintergrundbild">
                        <input class="btn btn-primary" onclick="changeBackground()" type="submit" value="Speichern">
                        <br>

                        <input class="btn btn-primary" id="newProfilbild" placeholder="Neues Profilbild">
                        <input class="btn btn-primary" onclick="changeProfilbild()" type="submit" value="Speichern">
                        <br>

                        <input style="width: 400px;" class="btn btn-primary" id="newColor" type="color">
                        <input class="btn btn-primary" onclick="changeColor()" type="submit" value="Speichern">
                        <input class="btn btn-primary" onclick="changeColorReset()" type="submit" value="Zurücksetzen">
                        <br>

                        <input style="width: 400px;" class="btn btn-primary" id="taskColor" type="color">
                        <input class="btn btn-primary" onclick="changeTaskbarColor()" type="submit" value="Speichern">
                        <br>

                        <input style="width: 400px;" class="btn btn-primary" id="taskIconColor" type="color">
                        <input class="btn btn-primary" onclick="changeTaskIconColor()" type="submit" value="Speichern">
                        <br>

                        <input class="btn btn-warning" id="deleteprofile" onclick="deleteProfile()" type="submit" value="Löschen">
                        <br>

                    </div>
                </div>
            </div>
        </div>

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

        <?php include("../../../templates/system/taskbar.php") ?>
    </body>
</html>
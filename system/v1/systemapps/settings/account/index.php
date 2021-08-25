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
        <?php include("../../../templates/apps/fenster.php") ?>
        <?php include("../../../templates/system/settings/sidebar.php") ?>

        <div id="allgemeines">
            <div class="container">
                <div class="row">
                    <div class="col">

                        <p id="changeBenutzer">Benutzername Ändern:</p>
                        <br>

                        <p id="changePassword">Passwort Ändern:</p>
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

                        <input class="btn btn-warning" id="deleteprofile" onclick="deleteProfile()" type="submit" value="Löschen">
                        <br>

                    </div>
                </div>
            </div>
        </div>

        <script src="/../system/v1/systemapps/settings/settings.js"></script>
        <?php include("../../../templates/system/taskbar.php") ?>
        <script>
            h1.innerHTML = "Einstellungen | Account"
        </script>
    </body>
</html>
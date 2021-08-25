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
        <link rel="stylesheet" href="personalisation.css">
    </head>
    <body>
        <?php include("../../../templates/apps/fenster.php") ?>
        <?php include("../../../templates/system/settings/sidebar.php") ?>

        <div class="container">
            <div class="row">
                <div class="col">
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
            </div>
            <div class="col">
            
            <input class="btn btn-primary" id="newBackground" placeholder="Neues Hintergrundbild">
            <input class="btn btn-primary" onclick="changeBackground()" type="submit" value="Speichern">
            <input class="btn btn-primary" onclick="changeBackgroundReset()" type="submit" value="Zurücksetzen">
            <br>
        
            <input class="btn btn-primary" id="newProfilbild" placeholder="Neues Profilbild">
            <input class="btn btn-primary" onclick="changeProfilbild()" type="submit" value="Speichern">
            <input class="btn btn-primary" onclick="changeProfilbildReset()" type="submit" value="Zurücksetzen">
            <br>
        
            <input style="width: 400px;" class="btn btn-primary" id="newColor" type="color">
            <input class="btn btn-primary" onclick="changeColor()" type="submit" value="Speichern">
            <input class="btn btn-primary" onclick="changeColorReset()" type="submit" value="Zurücksetzen">
            <br>
        
                <input style="width: 400px;" class="btn btn-primary" id="taskColor" type="color">
                <input class="btn btn-primary" onclick="changeTaskbarColor()" type="submit" value="Speichern">
                <input class="btn btn-primary" onclick="changeTaskbarColorReset()" type="submit" value="Zurücksetzen">
                <br>
        
                <input style="width: 400px;" class="btn btn-primary" id="taskIconColor" type="color">
                <input class="btn btn-primary" onclick="changeTaskIconColor()" type="submit" value="Speichern">
                <input class="btn btn-primary" onclick="changeTaskIconColorReset()" type="submit" value="Zurücksetzen">
                <br>
            </div>
        </div>
        </div>

        <!-- 
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
         -->

        <script src="/../system/v1/systemapps/settings/settings.js"></script>
        <?php include("../../../templates/system/taskbar.php") ?>
        <script>
            h1.innerHTML = "Einstellungen | Personalisierung"
        </script>
    </body>
</html>
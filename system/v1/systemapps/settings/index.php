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
        <link rel="stylesheet" href="settings.css">
    </head>
    <body>
        <noscript><style>body {display: none}</style></noscript>
        <h1 onclick="backToWelcome()">Einstellungen</h1>
        <p id="close" onclick="closeApp()" id="close">X<span id="tooltip">Schließen</span></p>
        <?php include("../../templates/system/settings/sidebar.php") ?>

        <div id="welcome">
            <div class="container">
                <img id="s_profilbild">
                <h2 id="name"></h2>
                <br>
                <textarea id="notizen">Hier ist Platz für deine Notizen!</textarea>
                <br>
                <input onclick="saveNotice()" class="btn btn-primary" type="submit" value="speichern"> 
            </div>
        </div>

        <?php include("../../templates/system/taskbar.php") ?>
        <script src="settings.js"></script>
        <script>
            // Settings Configuration //
            window.setTimeout("main()" , 1);

        </script>
    </body>
</html>
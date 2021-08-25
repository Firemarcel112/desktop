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
        <link rel="stylesheet" href="browser.css">
        <link rel="stylesheet" href="/../system/v1/_system/taskbar.css">
    </head>
    <body>
        <?php include("../../templates/apps/fenster.php") ?>

        <iframe controls="true" src="http://project.m-j-logistik.de/"></iframe>
        <input onclick="closeSuchleiste()" id="close_url" class="btn btn-primary" type="submit" value="suchleiste schließen">
        <input onclick="openSuchleiste()" id="open_url" class="btn btn-primary" type="submit" value="suchleiste öffnen">
        <div id="suchleiste">
            <input id="user" type="url" placeholder="URL eingeben" value="http://www.url.de/">
            <input onclick="searchURL()" type="submit" class="btn btn-secondary" value="öffnen">
        </div>
        

        <?php include("../../templates/system/taskbar.php") ?>
        <script src="browser.js"></script>
        <script>
            window.setTimeout("isBrowserInstalled()" , 1);

            //  Fenstername //
            h1.innerHTML = "Browser"
        </script>
    </body>
</html>
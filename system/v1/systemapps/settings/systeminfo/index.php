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
        <link rel="stylesheet" href="systeminfo.css">
    </head>
    <body>
        <?php include("../../../templates/apps/fenster.php") ?>
        <?php include("../../../templates/system/settings/sidebar.php") ?>

        <div id="sysinfo">
            <div class="container">
                <h2 class="text-center">Systeminfo</h2>
                <div id="container_2">
                    <div class="row">
                        <div class="col">
                            <p>CPU:</p>
                            <p>Motherboard:</p>
                            <p>RAM:</p>
                        </div>
                        <div class="col" id="_2">
                            <p id="CPU"></p>
                            <p id="MOTHERBOARD"></p>
                            <p id="RAM"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php include("../../../templates/system/taskbar.php") ?>
        <script src="sysinfo.js"></script>
        <script>
            // Settings Configuration //
            window.setTimeout("setSystem()" , 1);

            //  Fenstername //
            h1.innerHTML = "Einstellungen | Systeminfo"

        </script>
    </body>
</html>
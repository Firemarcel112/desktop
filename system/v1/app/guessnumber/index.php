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
        <link rel="stylesheet" href="number.css">
    </head>
    <body>
        <?php include("../../templates/apps/fenster.php") ?>

        <div id="a" class="container">
            <h2>Errate meine Zahl!</h2>
            <input id="userinput" type="number" placeholder="Zahl zwischen 1 und 5">
            <br>
            <br>
            <input onclick="randomNumber()" type="submit" class="btn btn-primary" value="Senden">
            <br>
            <br>
            <p id="message"></p>
            <br>
            <br>
        </div>

        <div id="highscore">
            <h2>Highscore</h2>
            <p id="fail"></p>
            <p id="right"></p>
            <input onclick="resetHighscore()" type="submit" class="btn btn-warning" value="Reset Highscore">
        </div>

        <?php include ("../../templates/system/taskbar.php") ?>
        <script src="number.js"></script>
        <script>
            h1.innerHTML = "Nummer erraten";
            window.setTimeout("isAppNumberInstalled()" , 1);
        </script>
    </body>
</html>
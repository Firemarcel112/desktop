<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>PC Startet...</title>
   <link rel="stylesheet" href="abmelden.css">
   <!-- Bootstrap && FontAwesome-->
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
   <script src="https://kit.fontawesome.com/fe01f3ebc7.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <i class="fab fa-windows"></i>
        <h1>Abmelden</h1>
        <div class="loader"></div>
        <p id="message"></p>
    </div>

</body>
<script src="abmelden.js"></script>
<script>
    window.setTimeout("abmelden()" , 1);
    window.setTimeout("message()" , 1);
    window.setTimeout("message1()", 2000);
    window.setTimeout("message2()" , 4000);
    window.setTimeout("message3()" , 5000);
</script>
</html>
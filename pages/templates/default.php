<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>workSpace Templates</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/font/font.css">
</head>
<body id="body" class="bodyD">

<!-- include de la navbar -->
<?php require('navbar.php') ?>

<!-- include du contenu de la page -->
<?= $content ?>

<!-- include du footer -->
<?php require('footer.php') ?>


<!-- insertion du script jquery.min.js -->
<script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>

<!-- insertion du script app.js -->
<script type="text/javascript" src="assets/js/app.js"></script>

</body>
</html>

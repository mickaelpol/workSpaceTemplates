<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>workSpace Templates</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/font/font.css">
</head>
<body>

<!-- include de la navbar -->
<?php require('navbar.php') ?>

<!-- include du contenu de la page -->
<?= $content ?>

<!-- include du footer -->
<?php require('footer.php') ?>


<!-- insertion du script assets/js/app.js -->
<script type="text/javascript" src="assets/js/app.js"></script>

</body>
</html>

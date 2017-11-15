<?php

require('connectionDb/connectionDb.php');

if (isset($_GET['p']))

{

  $p = $_GET['p'];

}

else

{

  $p = 'accueil';

}


ob_start();

//======= Pages d'accueil ========//

if ($p === 'accueil')

{

  require('pages/accueil.php');

}

//======= Inclure de la page default ========//
$content = ob_get_clean();
require('pages/templates/default.php');

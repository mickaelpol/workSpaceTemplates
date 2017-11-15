//      Chargement jquery
$(document).ready(function(){
//===========================
  var color = $('#color');
  var wk = $('#workSpace');
  var count = 0;

function changeCouleur(param1, param2, param3) {


  param1.click(function(){

    param3++;

    if (param3%1 == 0) {

      param2.removeClass('workspaceG').addClass('workspaceJ');
      param1.removeClass('btn-gris').addClass('btn-jaune');

    }

    if (param3%2 == 0) {

      param2.removeClass('workspaceJ').addClass('workspaceG');
      param1.removeClass('btn-jaune').addClass('btn-gris');

    }

  });
}

//======== APPEL de la fonction pour changer la couleur ===========//
changeCouleur(color, wk, count);

//===========================
});

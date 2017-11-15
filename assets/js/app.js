//      Chargement jquery
$(document).ready(function(){
//===========================

var color = $('#color');
var wk = $('#workSpace');
var count = 0;

color.click(function(){

  count++;

  if (count%1 == 0) {

    wk.removeClass('workspaceG').addClass('workspaceJ');
    color.removeClass('btn-gris').addClass('btn-jaune');

  }

  if (count%2 == 0) {

    wk.removeClass('workspaceJ').addClass('workspaceG');
    color.removeClass('btn-jaune').addClass('btn-gris');

  }

});

//===========================
});

//      Chargement jquery
$(document).ready(function(){
//===========================
var color = $('#color');
var wk = $('#workSpace');
var bG = $('#bG');
var body = $('#body');

var count = 0;


function changeBackground (bouton, compteur, background, bg1, bg2, btn1, btn2){

  bouton.click(function(){
    compteur++;
    if (compteur%1 === 0) {
      background.removeClass(bg1).addClass(bg2);
      bouton.removeClass(btn1).addClass(btn2);
    }
    if (compteur%2 === 0) {
      background.removeClass(bg2).addClass(bg1);
      bouton.removeClass(btn2).addClass(btn1);
    }
  });
};

function changeCouleur(param1, param2, param3, workspace1, workspace2, btn1, btn2) {

  param1.click(function(){
    param3++;
    if (param3%1 == 0) {
      param2.removeClass(workspace1).addClass(workspace2);
      param1.removeClass(btn1).addClass(btn2);
      console.log("1");
    }
    if (param3%2 == 0) {
      console.log("2");
      param2.removeClass(workspace2).addClass(workspace1);
      param1.removeClass(btn2).addClass(btn1);
    }
  });
}

//======== APPEL de la fonction pour changer la couleur ===========//
changeCouleur(color, wk, count, 'workspaceG', 'workspaceJ', 'btn-gris', 'btn-jaune');
changeBackground(bG, count, body, "bodyD", "bodyJ", "btn-yellow" ,"btn-dark");

//================================================================//
});

// This is where the player can view their stats for the choosen character.
function stats1(){
  if (player.magic == 0){
  $('#scenetext').html('Welcome to the Stats menu! <p> Scene ID = ' + sceneX +' <p> Your current stats: <p> Name: ' + player.name + ' <br> Character ID: ' + player.character + ', who is a ' + player.sex +' ' + player.race + '<br> Your current health is: ' + player.health + '<br> Your weapons are currently a ' + player.weapons + ' and ' + player.twoWeapons + '  <br> Your armor stat is: ' + player.armor +'% of protection <br> Your critical chance stat is: ' + player.randomCrit +'% of succsess <br> Your stealth stat is: ' + player.stealth + '% of succsess <br> Your speed stat is: ' + player.speed + '% of succsess <br> Your strenght stat is: ' + player.strength +'% of succsess <br> Your ranged accuracy is: ' + player.accuracyR +'% of hitting <br> Your accuracy close ranged is: ' + player.accuracyM +'% of hitting <br> Your dodge stat is: ' + player.dodge +'% of succsess <br> Your charisma stat is: ' + player.charisma +'% of succsess <br> Your perseption stat is: ' + player.perseption +'% of succsess <br> Your wisdom stat is: ' + player.wisdom +'% of succsess <br> Your enemy encounter stat is: ' + player.enemyE +'% chance of an encounter.');
  }else{
      $('#scenetext').html('Welcome to the Stats menu! <p> Scene ID = ' + sceneX + ' <p> Your Current stats: <p> ' + player.name + ' <br> Character ID: ' + player.character + ', who is a ' + player.race + ' ' + player.sex + '<br> Your current health is: ' + player.health + '<br> Your weapons are currently a ' + player.weapons + ' and ' + player.twoWeapons + '  <br> Your armor stat is: ' + player.armor +'% of protection <br> Your critical chance stat is: ' + player.randomCrit +'% of succsess <br> Your magic stat is: ' + player.magic +'% of succsess <br> Your stealth stat is: ' + player.stealth + '% of succsess <br> Your speed stat is: ' + player.speed + '% of succsess <br> Your strenght stat is: ' + player.strength +'% of succsess <br> Your ranged accuracy stat is: ' + player.accuracyR +'% of succsess <br> Your accuracy close ranged stat is: ' + player.accuracyM +'% of succsess <br> Your dodge stat is: ' + player.dodge +'% of succsess <br> Your charisma stat is: ' + player.charisma +'% of succsess <br> Your perseption stat is: ' + player.perseption +'% of succsess <br> Your wisdom stat is: ' + player.wisdom +'% of succsess <br> Your enemy encounter stat is: ' + player.enemyE +'% chance of an encounter.');
  }
  $('#question').html('Type your Scene ID below');
}

function stats1Answer(answer){
  if (answer != 157 && answer != 158 && answer != 159 && answer != 160 && answer != 161){
     $('#message').html('Please put the Scene ID in the answer box');
  }else{
    if (sceneX == 157){
      scene7();
    }
    if (sceneX == 158){
      scene8();
    }    
    if (sceneX == 159){
      scene9();
    }
    if (sceneX == 160){
      scene10();
    }
    if (sceneX == 161){
      scene11();
    }    
  }
}
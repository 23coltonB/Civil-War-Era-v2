function scene10(){
  currentScene = 10;
  if (weak == false){
  $('#scenetext').html('You tiredly roll out of your bed, slowly advanceing towards the door. The coldness of the floor shocking you out of your tiredness. You hear a thunderous knock at the door.');
  }else{
    $('#scenetext').html('You sigh as you reach out towards the doorknob to open it, when you hear a thunderous knock at the door.');
  }
  scene10Question();
  $('#question').html("What would you like to do? answer, or don't, and go to sleep (DAGTS)");
}

function scene10Answer(options){
  switch (options){
    case 'Answer':
      scene27();
      break;
    case 'Go back to sleep':
      scene28();
      break;
  }
}

function scene27(){
  currentScene = 27;
  LP = Number(LP) + 15;
  updateStats();
   $('#scenetext').html('You lazily walk toward the door, and put your hand on the door knob. Its locked. <br> <br> but lucky for you, the lock is on your side. You effortlessly, you unlock the lock, and open the door. Two guards wearing matching green tunics, and silver helments stand their waiting patently behind your door. <br> <br> "What do you want?" you ask tiredly.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
   var morning = true;
  var communication = true;
  scene27Question();
 $('#question').html('Type "Enter" to go to Level Select');
}

function scene27Answer(options){
  switch (options){
    case 'Level Select':
    levelSelect300();  
  }
}

function scene28(){
  currentScene = 28;
  if (x <= player.enemyE + 50){
    bandit = true;
      $('#scenetext').html('You turn your back to the door, in your average sized appartment, as the knocking continues, eventlually, you begin to hear less, and less of the knocking, until it has turned into a soft trickle in the background. The door bursts open, which, of course, shocks you out of your sleep. <br> <br> "Hey! What gi-" you start to say before you see who forcefully open your door. Three hooded figures enter your appartment. How badly did I cover my tracks? You wonder to yourself, as you slowly climb out of bed. I thought I did a good job! You hop out of bed, quickly grabbing your ' + player.weaponss +' from your hiding place. You notice something glinting around their cuffs, and with practice ease, you prepare yourself for combat.');
    scene28QuestionB();
      $('#question').html('press continue to go to combat!');
  }else{
    LP = Number(LP) + 25;
    updateStats();
    scene28QuestionA();
    $('#scenetext').html('You turn around, ignoring the knocking. <br> <br> "Come back in the morning!" you call out as you slip back under your covers of your bed. You shut your eyes, and you slowly fall back into sleep.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
  $('#question').html('Type Enter to go to Level Select');
    End = true;
   sleep = true;
  }
}

function scene28Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
    case 'Combat':
      scene29();
      break;
  }
}

// Loop hub
function scene29(){
  currentScene = 29;
  if (enemy > 0){
    if (enemy == 1){
    $('#scenetext').html('There is ' + enemy + " enemy left!");
    }else{
      $('#scenetext').html('There are still ' + enemy + " enemies left!");
    }
    if (player.character == 'FDM' || player.character == 'MDA' || player.character == 'MES' || player.character == 'FEM'){
      if (secretWeapon == 1){
        if (player.character != 'FDM' || player.character != 'MDA'){
          scene29QuestionA();
         $('#question').html("What now?! Attack, or Dodge and Strike (DAS)?");
      }else{
          scene29QuestionC();
        $('#question').html("What now?! Defend, attack, or Defend and Strike (DAS)?");
        }
      }else{
        if (player.character != 'FDM' || player.character != 'MDA'){
          scene29QuestionB();
           $('#question').html("What now?! Attack, Dodge and Strike (DAS), or Secret weapon?");
        }else{
          scene29QuestionD();
          $('#question').html("What now?! Defend, attack, Defend and Strike (DAS), or Secret weapon?");
        }
      }
    }else{
      if (player.magic != 0){
        scene29QuestionE();
        $('#question').html("What now?! Magic attack or Magic defense");
      }else{
        scene29QuestionC();
        $('#question').html("What now?! Defend, attack, or Defend and Strike (DAS)?");
      }
    }
  }else{
    scene29QuestionF();
    LP = Number(LP) + 5;
    updateStats();
    $('#scenetext').html('Congratgulations! You defeated all your intruders!<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type "Enter" to go to Level Select');
    End = true;
    var evation2 = true;
  }
}

function scene29Answer(options){
  switch (options){
    case 'Attack':
      scene30();
      break;
    case 'Dodge and strike':
    case 'Defend and strike':
      scene31();
      break;
    case 'Defend':
      scene32();
      break;
    case 'Secret weapon':
      scene33();
      break;
    case 'Magic attack':
      scene34();
      break;
    case 'Magic defense':
      scene35();
      break;
    case 'Level Select':
      levelSelect300();
  }
}

//attack
function scene30(){
currentScene = 30;
if (player.character == 'FEM' || player.character == 'MES'){
  if (x <= player.accuracyR){
    if (x <= player.randomCrit && enemy != 1){
      $('#scenetext').html('You turn your ' + player.weapons + ' towards the final bandit, and let your arrow fly. It strikes true, piercing through one bandit, and into the leg of another.');
      enemy = Number(enemy) - 2;
  }else{
    if (enemy != 1){
      $('#scenetext').html('You turn your ' + player.weapons + ' towards the closest bandit, and let your arrow fly. It strikes true, right in the heart.');
      enemy = Number(enemy) - 1;
    }else{
      $('#scenetext').html('You turn your ' + player.weapons + ' towards the final bandit, and let your arrow fly. It strikes true, right in the heart.');
      enemy = Number(enemy) - 1;
    }
  }
}else{
    if (enemy != 1){
      $('#scenetext').html('You turn your ' + player.weapons + ' towards the closest bandit, and let your arrow fly. It misses by a mile.');
    }else{
      $('#scenetext').html('You turn your ' + player.weapons + ' towards the final bandit, and let your arrow fly. It misses by a mile.');
    }
  }
}else{
if (x <= player.accuracyM){
  if (x <= player.randomCrit && enemy != 1){
    $('#scenetext').html('You run into the fray, using your ' + player.weapons + ' to stab the closest bandit. It lands in their chest, as you pary and kick another bandit, who flew into a wall.');
      enemy = Number(enemy) - 2;
  }else{
    if (enemy != 1){
      $('#scenetext').html('You run into the fray, using your ' + player.weapons + ' to stab the closest bandit. It pirces their heart. Before the other bandits can get to you, you jump out of their reach.');
      enemy = Number(enemy) - 1;
    }else{
      $('#scenetext').html('You run into the fray, using your ' + player.weapons + ' to stab the last bandit. It pirces their heart. They let out a gurgle, and drop to the floor');
      enemy = Number(enemy) - 1;
      }
  }
}else{
  if (enemy != 1){
    $('#scenetext').html('You run into the fray, using your ' + player.weapons + ' to stab the closest bandit. The bandit blocks it, and you jump out of their grasp before the other bandits can get to you, you jump out of their reach.');
  }else{
    $('#scenetext').html('You run into the fray, using your ' + player.weapons + ' to stab the closest bandit. The bandit blocks it, and you jump out of the bandits grasp before the bandit can grab you.');
      }
    }    
  }
  $('#question').html('Press continue to continue');
  scene30Question();
}

function scene30Answer(options){
  switch (options){
    case 'Continue':
      scene29();
      break;
  }
}

//DAS
function scene31(){
  currentScene = 31;
  //ranged dodge and strike
  if (player.character == 'FEM' || player.character == 'MES'){
    if (x <= player.dodge || x <= player.speed){
      if (x <= player.accuracyR){
      if (x <= player.randomCrit){
        if (enemy != 1){
           $('#scenetext').html("You dive out of the way of your assailents, launching your arrows towards one of the enemies. You hear the satifying sound of an arrow hitting the target, but luckly for you, you got two of them! Make sure you don't get too cocky though....");
          enemy = Number(enemy) - 2;
        }else{
          $('#scenetext').html("You dive out of the way of your assailent, launching your arrows towards the last assailent. You hear the satifying sound of an arrow hitting the target.");
          enemy = Number(enemy) - 1;
        }
      }
        $('#scenetext').html("You dive out of the way of your assailent, launching your arrows towards the last assailent. You hear the satifying sound of an arrow hitting the target.");
          enemy = Number(enemy) - 1;
        //you miss
      }else{
       $('#scenetext').html("You dive out of the way of your assailents, launching your arrows towards one of the enemies. To your dismay, you it doesn't seem that you hit any of your assailents");
      }
      scene31QuestionB();
      $('#question').html('Press continue to continue');
      //you fail
    }else{
        LP = Number(LP) + 17;
      scene31QuestionA();
        updateStats();
        $('#scenetext').html("You attempt to dive out of the reach of the assailents, but you didn't move fast enough. You swiftly are disarmed of your " + player.weaponss + ', something sharp touching your throat.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
        $('#question').html('Type "Enter" to go to Level Select');
        var enemyCapture = true;
        End = true;
      }
    //melee block and strike
  }else if (x <= player.strength || x <= player.speed){
    if (x <= player.accuracyM){
      if (x <= player.randomCrit){
        if (enemy != 1){
          $('#scenetext').html('You ready yourself for the oncomeing onslaught. You effortlessly parry the first assailent with your ' + player.secondary + ', strikeing down the second one with your' + player.weaponss + ' and dodging the third. To your surpise, you ended up knocking out one of the assailents when you parried. Good for you.');
            enemy = Number(enemy) - 2;
      }else{
      $('#scenetext').html('You ready yourself for the oncomeing onslaught. You  parry the last assailent with your ' + player.weaponss + ', redirecting the bandits blade to fly into your wall. You just had that fixed! You think to yourself. With frustration, you knock out the last assailent with your ' + player.secondary + ' and he crumples to the floor.');
        enemy = Number(enemy) - 1;
      }
        $('#question').html("Press continue to continue");
        scene31QuestionB();
      }else{
        if (enemy == 2){
          $('#scenetext').html('You ready yourself for the oncomeing onslaught. You effortlessly parry the first assailent with your ' + player.secondary + ', strikeing down the second one with your ' + player.weaponss + '.');
        }else{
          $('#scenetext').html('You ready yourself for the oncomeing onslaught. The bandit swings at you with what appers to be a dagger, which you effortlessly parry  with your ' + player.weaponss + ', and stabbing him in the side with your ' + player.secondary + '.');
        }
        $('#question').html("Press continue to continue");
        scene31QuestionB();
        enemy = Number(enemy) - 1;
      }
      //you miss
    }else{
      $('#question').html("Press continue to continue");
        scene31QuestionB();
      $('#scenetext').html("You block the on comming attack, instinctivly, you strike at a bandit, missing him entirely.");
    }
    //you fail
  }else{
    LP = Number(LP) + 17;
    scene31QuestionA();
    updateStats();
    $('#scenetext').html('You attempt to block the first figure with your ' + player.secondary + ', but to your horror, you fail to do so. The assailent dives at you, knocking away your weapons.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type "Enter" to go to Level Select');
      var enemyCapture = true;
  }
}

function scene31Answer(options){
  switch (options){
    case 'Continue':
      scene29();
      break;
    case 'Level Select':
      levelSelect300();
      break;
  }
}

//defend

function scene32(){
  currentScene = 32;
  if (x <= player.speed && x <= player.strength){
    if (enemy != 1){
    $('#scenetext').html('You use your ' + player.secondary +' to block one attack to the next, thankfully they buzz off after you block each attacks.');
    }else{
      $('#scenetext').html('You use your ' + player.secondary +' to block the next attack from the bandits, thankfully he buzzes off after you block each attack.');
    }
    scene32QuestionB();
    $('#question').html('Press continue to continue the fight!');
  }else{
    scene32QuestionA();
    LP = Number(LP) + 17;
    updateStats();
    $('#scenetext').html('You attempt to block the first figure with your ' + player.secondary + ', but to your horror, you fail to do so. The assailents dives at you, knocking away your weapons.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type "Enter" to go to Level Select');
      var enemyCapture = true;
  }
}

function scene32Answer(options){
  switch (options){
    case 'Continue':
      scene29();
      break;
    case 'Level Select':
      levelSelect300();
      break;
  }
}

//secret weapons
function scene33(){
  currentScene = 34;
  secretWeapon++;
    if (x <= player.accuracyR){
    $('#scenetext').html("You swiftly reach under your pillow, and grab your trusty throwing knife that you always keep on you. <br> You throw your knife into the oncoming crowd. The knife lands cleanly in the enemy's stomach, and he instantly drops to the ground, tripping a second one of your other assailents.");
      enemy = Number(enemy) - 1;
    }else{
      $('#scenetext').html("You swiftly reach under your pillow, and grab your trusty throwing knife that you always keep on you. <br> You throw your knife into the oncoming crowd. But to you're dismay, it doesn't hit any of them.");
      miss = true;
    }
  scene33Question();
    $('#question').html("Press continue to continue");
}

function scene33Answer(options){
  switch (options){
    case 'Continue':
      scene29();
      break;
  }
}

function scene34(){
  currentScene = 34;
  if (x <= player.magic && x <= player.accuracyR){
    if (x <= player.randomCrit && enemy != 1){
      $('#scenetext').html("You point your staff to your enemies, shouting <br> 'Fulgur Percutiens!' Before you can finsih your cantrip, a lightning bolt leaves the staff, electrifying not only the bandit you were aming at, but the bandit next to him, knocking them out.");
      enemy = Number(enemy) - 2;
    }else{
       $('#scenetext').html(" You throw your hands out, shouting <br> 'Globus Igneus!' Before you can finsih your cantrip, a fire ball leaves your hands, compleatly engulfing one of the intruders.");
      enemy = Number(enemy) - 1;
    }
    scene34QuestionB();
    $('#question').html("Press continue to continue");
  }else{
    LP = Number(LP) + 17;
    scene34QuestionA();
    updateStats();
     $('#scenetext').html(" You throw your hands out, shouting <br> ''Globus Igneus!' But, to your dismay, only a small puff of smoke leaves your open palms. Before you can try again, you are swiftly surrounded, and captured by your assailants <br> <br> Your current LP (Level Points) count is " + LP + "!");
     $('#question').html('Type "Enter" to go to Level Select');
     var enemyCapture = true;
    End = true;
  }
}

function scene34Answer(options){
  switch (options){
    case 'Continue':
      scene29();
      break;
    case 'Level Select':
      levelSelect300();
      break;
  }
}

function scene35(){
  currentScene = 35;
  if (x <= player.magic && x <= player.speed){
    $('#scenetext').html('You throw your hands out, shouting <br> "Lux Praesidium!" Almost instantly, a white scale formation flew from his hands and staff, forming a white protective layr between you and the bandits. They rush you, but the sheild stop their attacks. It wont last long though');
    scene35QuestionB();
     $('#question').html('Press continue to continue');
  }else{
    LP = Number(LP) + 17;
    updateStats();
    scene35QuestionA();
     $('#scenetext').html("You throw your hands out, shouting <br> 'Lux Praesidium!' But, to your dismay, only a small puff of smoke leaves your open palms. Before you can try again, you are swiftly surrounded, and captured by your assailants <br> <br> Your current LP (Level Points) count is " + LP + "!");
     $('#question').html('Type "Enter" to go to Level Select');
     var enemyCapture = true;
    End = true;
  }
}

function scene35Answer(options){
  switch (options){
    case 'Continue':
      scene29();
      break;
    case 'Level Select':
      levelSelect300();
      break;
  }
}
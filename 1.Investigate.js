function scene10(){
  currentScene = 10;
  if (weak == false){
  $('#scenetext').html('You tiredly roll out of your bed, slowly advanceing towards the door. The coldness of the floor shocking you out of your tiredness. You hear a thunderous knock at the door.');
  $('#question').html("What would you like to do? answer, or don't, and go to sleep (DAGTS)");
  }else{
    $('#scenetext').html('You sigh as you reach out towards the doorknob to open it, when you hear a thunderous knock at the door.');
  $('#question').html("What would you like to do? answer, or don't, and go to sleep (DAGTS)");
  }
}
function scene10Answer(answer){
  if (answer != 'answer' && answer != "DAGTS"){
    $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == "DAGTS"){
    scene31();
  }else{
  scene30();
  }
  $('#message').html('');
}

function scene30(){
  currentScene = 30;
  LP = Number(LP) + 15;
  updateStats();
   $('#scenetext').html('You lazily walk toward the door, and put your hand on the door knob. Its locked. <br> <br> but lucky for you, the lock is on your side. You effortlessly, you unlock the lock, and open the door. Two guards wearing matching green tunics, and silver helments stand their waiting patently behind your door. <br> <br> "What do you want?" you ask tiredly.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
   var morning = true;
  var communication = true;
 $('#question').html('Type "Enter" to go to Level Select');
}

function scene30Answer(answer){
    levelSelect0();
}

function scene31(){
  currentScene = 31;
  if (x <= player.enemyE + 50){
    bandit = true;
    if (player.enemyE == 0){
      $('#scenetext').html('You turn your back to the door, in your average sized appartment, as the knocking continues, eventlually, you begin to hear less, and less of the knocking, until it has turned into a soft trickle in the background. The door bursts open, which, of course, shocks you out of your sleep. <br> <br> "Hey! What gi-" you start to say before you see who forcefully open your door. Three hooded figures enter your appartment. This is impossible! No one should have been after you in the first place! You were loved by the people! Not only that, but you  do not have anything of worth! Panicing, hopping out of your bed');
    }else{
      $('#scenetext').html('You turn your back to the door, in your average sized appartment, as the knocking continues, eventlually, you begin to hear less, and less of the knocking, until it has turned into a soft trickle in the background. The door bursts open, which, of course, shocks you out of your sleep. <br> <br> "Hey! What gi-" you start to say before you see who forcefully open your door. Three hooded figures enter your appartment. How badly did I cover my tracks? You wonder to yourself, as you slowly climb out of bed. I thought I did a good job! Panicing, hopping out of your bed.');
    }
    $('#scenetext').html('You turn your back to the door, in your average sized appartment, as the knocking continues, eventlually, you begin to hear less, and less of the knocking, until it has turned into a soft trickle in the background. The door bursts open, which, of course, shocks you out of your sleep. <br> <br> "Hey! What gi-" you start to say before you see who forcefully open your door. Three hooded figures enter your appartment.');

    if (player.magic != 0){
      $('#question').html("Those hooded figures don't look too freindly. What will you do?! Convince, arm yourself (AY), or magic attack (MA)");
      var magic = true;
    }else{
      if (player.enemyE != 0){
        var prepared = true;
        $('#question').html("Those hooded figures don't look too freindly. What will you do?! Convince, arm yourself (AY), or secret weapon (SW)");
      }else{
        $('#question').html("Those hooded figures don't look too freindly. What will you do?! Convince, arm yourself (AY)");
      }
    }
  }else{
    LP = Number(LP) + 25;
    updateStats();
    $('#scenetext').html('You turn around, ignoring the knocking. <br> <br> "Come back in the morning!" you call out as you slip back under your covers of your bed. You shut your eyes, and you slowly fall back into sleep.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
  $('#question').html('Type Enter to go to Level Select');
    End = true;
   sleep = true;
  }
}

function scene31Answer(answer){
  if (answer != 'AY' && answer != 'SW' && answer != 'MA' && answer != 'Convince' && answer != 'Enter' && answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured' && answer != ''){
    $('#message').html('Please enter one of the given options.');
    return;
  }
if (answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Capture'){
  if (answer == 'AY'){
    scene32();
  }
  if (answer == 'Enter'){
    if (End == true){
    levelSelect0();
    }else{
      $('#message').html('Nice try! Select one of the TRUE option!')
    }
  }
  if (answer == 'SW'){
    if (prepared == true && player.character != "FEM" || player.character != "MHW"){
      scene33();
    }else{
      $('#message').html('That is not an action you can preform.');
    return;
    }
  }
  if (answer == 'MA'){
    if (magic == true){
      scene34();
    }else{
      $('#message').html('That is not an action you can preform.');
      return;
    }
  }
  if (answer == 'Convince'){
    scene35();
  }
}else{
	     if (answer === 'Escort'){
          if (chapter1_sidequest1 == true){
            scene81();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Flee'){
      if (chapter1_sidequest3 == true){
        scene70();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Captured'){
      if (chapter1_sidequest2 == true){
        scene90();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Chapter 2'){
      if (chapter2 == true){
        scene110();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
}
  $('#message').html('');
}



function scene32(){
    currentScene = 32;
      if (x <= player.speed){
        $('#scenetext').html('You hop out of bed, quickly grabbing your ' + player.weapons +' from your hiding place. You notice something glinting around their cuffs, and with practice ease, you prepare yourself for combat.');
        $('#question').html('Type "Combat!" to go to combat');
      }else{
        LP = Number(LP) + 17;
        updateStats();
        End = true;
        $('#scenetext').html('You try to swifly roll out of your bed to reach your ' + player.weapons + ', but before you can, you are swifly overwealmed by the force of your assailents.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
        var enemyCapture = true;
        $('#question').html('Type "Enter" to go to Level Select');
      }
  }
  function scene32Answer(answer){
    //this function needs scene28() and levelSelect()
    if (answer != 'Enter' && answer != 'Combat!' && answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured' && answer == ''){
      $('#message').html('Please type the option');
      return;
    }
    if (answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
        if (answer == 'Combat!'){
          scene28();
        }
      if (answer == 'Enter'){
        if (End == true){
        levelSelect0();
        }
      }
    }else{
	     if (answer === 'Escort'){
          if (chapter1_sidequest1 == true){
            scene81();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Flee'){
      if (chapter1_sidequest3 == true){
        scene70();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Captured'){
      if (chapter1_sidequest2 == true){
        scene90();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Chapter 2'){
      if (chapter2 == true){
        scene110();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
}
}

function scene28(){
  currentScene = 28;
    if (player.race == 'elf'){
    $('#question').html("What will you do?! Attack, or Dodge and Strike (DAS)");
  }else{
    if (player.magic != 0){
      $('#question').html("What will you do?! Defend, attack, or Defend and Strike (DAS), or magic");
    }else{
  $('#question').html("What will you do?! Defend, attack, or Defend and Strike (DAS)");
    }
  }
}

function scene28Answer(answer){
  if (answer != 'DAS' && answer != 'Defend' && answer != 'attack' && answer != 'magic'){
    $('#message').html('Please enter one of the options above');
      return;
  }
  if (answer == 'DAS'){
    scene36();
  }
  if (answer == 'Defend'){
    if (player.race == 'elf'){
      $('#message').html('Your character is unable to do that action');
      return;
    }else{
      scene37();
    }
  }
  if (answer == 'magic'){
    if (magic <! 0){
      scene38();
    }else{
      $('#message').html('Your character is unable to do that action');
      return;
    }
  }
  if (answer == 'attack'){
    scene39();
  }
  $('#message').html('');
}

function scene29(){
  currentScene = 29;
  if (enemy > 0){
    if (enemy == 1){
    $('#scenetext').html('There is ' + enemy + " enemy left!");
    }else{
      $('#scenetext').html('There are still ' + enemy + " enemies left!");
    }
    if (player.weapons == 'bow' || player.weapons == 'crossbow'){
      $('#question').html("What now?! Attack, or Dodge and Strike (DAS)");
    }else{
      if (player.magic != 0){
        $('#question').html("What now?! Defend, attack, or Defend and Strike (DAS), or magic");
      }else{
        $('#question').html("What now?! Defend, attack, or Defend and Strike (DAS)");
      }  
    }
  }else{
    LP = Number(LP) + 5;
    updateStats();
    $('#scenetext').html('Congratgulations! You defeated all your intruders!<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type "Enter" to go to Level Select');
    End = true;
    var evation2 = true;
  }
}

function scene29Answer(answer){
  if (answer != 'DAS' && answer != 'Defend' && answer != 'attack' && answer != 'magic' && answer != 'Enter' && answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
    $('#message').html('Please enter one of the options above');
      return;
  }
  if (answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
    if (answer == 'DAS'){
      scene36();
    }
    if (answer == 'Defend'){
      if (player.race == 'elf'){
        $('#message').html('Your character is unable to do that action');
        return;
      }else{
        scene37();
      }
    }
    if (answer == 'magic'){
      if (magic != 0){
        scene38();
      }else{
        $('#message').html('Your character is unable to do that action');
        return;
      }
    }
    if (answer == 'attack'){
      scene39();
    }
    if (answer == 'Enter'){
      if (End == true){
      levelSelect0();
      }else{
        ('#message').html('Nice try! Select one of the TRUE options!')
      }
    }
  }else{
	     if (answer === 'Escort'){
          if (chapter1_sidequest1 == true){
            scene81();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Flee'){
      if (chapter1_sidequest3 == true){
        scene70();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Captured'){
      if (chapter1_sidequest2 == true){
        scene90();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Chapter 2'){
      if (chapter2 == true){
        scene110();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
}
  $('#message').html('');
}

function scene33(){
  currentScene = 33;
  if (player.race == 'dwarf'){
    if (x <= player.accuracyR){
      $('#scenetext').html("You swiftly reach under your pillow, and grab your trusty throwing axe that you always keep on you. <br> You throw your axe into the oncoming crowd. The axe lands cleanly in the enemy's chest, and he tumbles to the ground,  tripping a one of your other assailents.");
      enemy = Number(enemy) - 1;
    }else{
      $('#scenetext').html("You swiftly reach under your pillow, and grab your trusty throwing axe that you always keep on you. <br> You throw your axe into the oncoming crowd. But to you're dismay, it doesn't hit any of them.");
      miss = true;
    }
  }else{
    if (x <= player.accuracyR){
    $('#scenetext').html("You swiftly reach under your pillow, and grab your trusty throwing knife that you always keep on you. <br> You throw your knife into the oncoming crowd. The knife lands cleanly in the enemy's stomach, and he instantly drops to the ground, tripping a second one of your other assailents.");
      enemy = Number(enemy) - 1;
    }else{
      $('#scenetext').html("You swiftly reach under your pillow, and grab your trusty throwing knife that you always keep on you. <br> You throw your knife into the oncoming crowd. But to you're dismay, it doesn't hit any of them.");
      miss = true;
    }
  }
  if (miss == true){
    $('#question').html("Your assailents are swiftly advancing! What will you do? <br> Run, Distract and Run (DAR), or stall");
  }else{
    $('#question').html("You are left with only two opponients left. What will you do? <br> Arm Yourself (AY), convince, or flee");
  }
}

function scene33Answer(answer){
  if (answer != 'AY' && answer != 'DAR' && answer != 'stall' && answer != 'convince' && answer != 'flee' && answer != 'run'){
    $('#message').html('Please pick one of the actions above.');
      return;
  }
    if (answer == 'AY'){
      scene32();
    }
    if (answer == 'DAR'){
      if (miss != true){
        $('#message').html('You are not in the position to use this action');
      return;
      }else{
        scene40();
      }
    }
    if (answer == 'stall'){
      if (miss != true){
        $('#message').html('You are not in the position to use this action');
      return;
      }else{
        scene41();
      }
    }
    if (answer == 'convince'){
      if (miss == true){
        $('#message').html('You are not in the position to use this action');
        return;
      }else{
      scene35();
      }
    }
    if (answer == 'flee' || answer != 'run'){
      scene42();
    }
  $('#message').html('');
}

function scene34(){
  currentScene = 34;
  if (x <= player.magic && x <= player.accuracyR){
     $('#scenetext').html("You aren't as powerfull without your staff, but it'll have to work. You throw your hands out, shouting <br> 'Globus Igneus!' Before you can finsih your cantrip, a fire ball leaves your hands, compleatly engulfing one of the intruders.");
     $('#question').html("You are left with only two opponients left. What will you do? <br> Arm Yourself (AY), convince, or flee");
  }else{
    LP = Number(LP) + 17;
    updateStats();
     $('#scenetext').html("You aren't as powerfull without your staff, but it'll have to work. You throw your hands out, shouting <br> ''Globus Igneus!' But, to your dismay, only a small puff of smoke leaves your open palms. Before you can try again, you are swiftly surrounded, and captured by your assailants <br> <br> Your current LP (Level Points) count is " + LP + "!");
     $('#question').html('Type "Enter" to go to Level Select');
     var enemyCapture = true;
    End = true;
  }
}

function scene34Answer(answer){
  if (answer != 'AY' && answer != 'convince' && answer != 'flee' || answer != 'run' && answer != 'Enter' && answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
    $('#message').html('Please pick one of the actions above.');
      return;
  }
  if (answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
      if (answer == 'Enter'){
      if (End == True){
          levelSelect0();
        }else{
          ('#message').html('Nice try! Next time, choose the TRUE option.')
        }
      }
      if (answer == 'AY'){
        scene32();
      }
      if (answer == 'convince'){
        scene35();
  
      }
      if (answer == 'flee' || answer != 'run'){
        scene42();
      }
  }else{
	     if (answer === 'Escort'){
          if (chapter1_sidequest1 == true){
            scene81();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Flee'){
      if (chapter1_sidequest3 == true){
        scene70();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Captured'){
      if (chapter1_sidequest2 == true){
        scene90();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Chapter 2'){
      if (chapter2 == true){
        scene110();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
}
  $('#message').html('');
}

function scene35(){
  currentScene = 35;
  if (x <= player.charisma){
    $('#scenetext').html('"Wait! I am not your enemy! We can talk thorugh this!" Dispite your words, they seem to ignore you, and continue pressing forward.');
    $('#question').html("What should you do? Distract and run, (DAR), stall, or Run to Kitchen (RTK)");
  }else{
    LP = Number(LP) + 17;
    updateStats();
    $('#scenetext').html('Before you can even get the words out of your mouth, they are already upon you, and swiftly silence you.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type "Enter" to go to Level Select');
    var enemyCapture = true;
    End = true;
  }
}

function scene35Answer(answer){
  if (answer != 'DAR' && answer != 'stall' && answer != 'RTK' && answer != 'Enter' && answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
    $('#message').html('Please pick one of the actions above.');
      return;
  }
  if (answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
    if (answer == 'DAR'){
      scene40();
    }
    if (answer == 'stall'){
      scene41();
    }
    if (answer == 'RTK'){
      scene45();
    }
    if (answer == 'Enter'){
        if (End == True){
          levelSelect0();
        }else{
          ('#message').html('Nice try! Next time, choose the TRUE option.')
      }
    }
  }else{
	     if (answer === 'Escort'){
          if (chapter1_sidequest1 == true){
            scene81();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Flee'){
      if (chapter1_sidequest3 == true){
        scene70();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Captured'){
      if (chapter1_sidequest2 == true){
        scene90();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Chapter 2'){
      if (chapter2 == true){
        scene110();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
}
  $('#message').html('');
}

function scene36(){
currentScene = 36;
  if (enemy > 0){
    if (player.race != 'elf'){
      if (x <= player.accuracyM && x <= player.strength){
        if (x <= player.randomCrit){
          if (enemy != 1){
          $('#scenetext').html('You ready yourself for the oncomeing onslaught. You effortlessly parry the first assailent with your ' + player.secondarys + ', strikeing down the second one with your' + player.weapons + ' and dodging the third. To your surpise, you ended up knocking out one of the assailents when you parried. Good for you.');
          enemy = Number(enemy) - 2;
          }else{
            $('#scenetext').html('You ready yourself for the oncomeing onslaught. You  parry the last assailent with your ' + player.weapons + ', redirecting the bandits blade to fly into your wall. You just had that fixed! You think to yourself. With frustration, you knock out the assailent with your ' + player.secondarys + ' and he crumples to the floor.');
          }
          }else{
          if (enemy == 2){
            $('#scenetext').html('You ready yourself for the oncomeing onslaught. You effortlessly parry the first assailent with your ' + player.secondarys + ', strikeing down the second one with your ' + player.weapons + '.');
            enemy = Number(enemy) - 1;
          }else{
            if (enemy == 1){
              $('#scenetext').html('You ready yourself for the oncomeing onslaught. The bandit swings at you with what appers to be a dagger, which you effortlessly parry  with your ' + player.weapons + ', and stabbing him in the side with your ' + player.secondarys + '.');
              enemy = Number(enemy) - 1;
            }else{
                $('#scenetext').html('You ready yourself for the oncomeing onslaught. You effortlessly parry the first assailent with your ' + player.secondarys + ', strikeing down the second one with your ' + player.weapons + ' and dodging the third.');
            enemy = Number(enemy) - 1;
            }
          }
          $('#question').html('Type "Enter" to continue.');
        }
          }else{
            LP = Number(LP) + 17;
        updateStats();
            $('#scenetext').html('You attempt to block the first figure with your ' + player.secondarys + ', but to your horror, you fail to do so. The assailent dives at you, knocking away your weapons.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
            $('#question').html('Type "Enter" to go to Level Select');
              var enemyCapture = true;
          }
    }else{
      if (x <= player.dodge && x <= player.speed){
        if (x <= player.accuracyR){
          if (x <= player.randomCrit){
            $('#scenetext').html("You dive out of the way of your assailents, launching your arrows towards one of the enemies. You hear the satifying sound of an arrow hitting the target, but luckly for you, you got two of them! Make sure you don't get too cocky though....");
          enemy = Number(enemy) - 2;
          }else{
          $('#scenetext').html("You dive out of the way of your assailents, launching your arrows towards one of the enemies. You hear the satifying sound of an arrow hitting the target, but don't get too cocky.");
          enemy = Number(enemy) - 1;
          }
          $('#question').html("Press enter to continue.");
        }else{
        $('#scenetext').html("You dive out of the way of your assailents, launching your arrows towards one of the enemies. To your dismay, you it doesn't seem that you hit any of your assailents");
        }
      }else{
        LP = Number(LP) + 17;
        updateStats();
        $('#scenetext').html("You attempt to dive out of the reach of the assailents, but you didn't move fast enough. You swiftly are disarmed of your " + player.weapons + ', something sharp touching your throat.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
        $('#question').html('Type "Enter" to go to Level Select');
        var enemyCapture = true;
        End = true;
      }
    }
  }
}

function scene36Answer(answer){
  if (answer == 'Enter'){
    if (End == True){
        levelSelect0();
      }else{
        ('#message').html('Nice try! Next time, choose the TRUE option.')
    }
  }
  if (answer == ''){
    scene29(); 
  }
    $('#message').html('');
}

function scene37(){
currentScene = 37;
    if (enemy > 0){
    if (x <= player.strength){
      if (x <= player.randomCrit){
        $('#scenetext').html('You stand your ground, and prepare to defend yourself from the three attackers. You effectivly parry all the attacks from your assailents. In fact, you hit them so hard, you knocked out one cold on the ground.');
        enemy = Number(enemy) - 1;
      }else{
        $('#scenetext').html('You stand your ground, and prepare to defend yourself from the three attackers. You effectivly parry all the attacks from your assailents.');
      }
      $('#question').html('Press Enter to continue.');
    }else{
      LP = Number(LP) + 17;
      updateStats();
      $('#scenetext').html("You stand your ground, and prepare to defend yourself from the three attackers. The first one charges at you hard, knocking the" + player.weapons +", you are unable to retrieve your weapon in time.<br> <br> Your current LP (Level Points) count is " + LP + "!");
      $('#question').html('Type "Enter" to go to Level Select');
      var enemyCapture = true;
      End = true;
    }
  }
}

function scene37Answer(answer){
  if (answer == 'Enter'){
    if (End == True){
        levelSelect0();
      }else{
        ('#message').html('Nice try! Next time, choose the TRUE option.')
    }
  }
  if (answer == ''){
    scene29(); 
  }
    $('#message').html('');
}

function scene38(){
currentScene = 38;
  if (enemy > 0){
    if (x <= player.magic && x <= player.accuracyR){
      if (x <= player.randomCrit){
        $('#scenetext').html('You throw your hands out towards the advancing assailent. With your staff, you slightly more powerfull than you are without it. <br> <br> "Fulgur Percutiens!" you shout despretly, hoping that it will work this time. Electrisity fills your veins, and a lightning bolt shoots out from your fingertips. It lands directly through one of the assailents, then, like a leaping rabbet, the bolt lept to the second one, shocking the secoond one as well.');
        enemy = Number(enemy) - 2;
      }else{
        $('#scenetext').html('You throw your hands out towards the advancing assailent. With your staff, you slightly more powerfull than you are without it. <br> <br> "Fulgur Percutiens!" you shout despretly, hoping that it will work this time. Electrisity fills your veins, and a lightning bolt shoots out from your fingertips. It lands directly through one of the assailents, leaving a black scorch mark where the bolt traveled.');
        enemy = Numer(enemy) - 1;
      }
     $('#question').html('Press enter to continue.');
    }else{
      LP = Number(LP) + 17;
      updateStats();
      $('#scenetext').html('You throw your hands out towards the advancing assailent. With your staff, you slightly more powerfull than you are without it. <br> <br> "Fulgur Percutiens!" you shout despretly, hoping that it will work this time. Only a small bolt shoots from your fingers, no where near close enough for it to be lethal. You are swiftly surrounded, and disarmed of your weapon.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      $('#question').html('Type "Enter" to go to Level Select');
      var enemyCapture = true;
      End = true;
    }
  }
}

function scene38Answer(answer){
  if (answer == 'Enter'){
  if (End == True){
        levelSelect0();
      }else{
        ('#message').html('Nice try! Next time, choose the TRUE option.')
    }
  }
    if (answer == ''){
    scene29(); 
  }
    $('#message').html('');
}

function scene39(){
  currentScene = 39;
  if (enemy > 0){
    if (player.race == 'elf'){
      if (x <= player.accuracyR){
        if (x <= player.randomCrit){
          if (enemy != 1){
            if (enemy == 3){
          $('#scenetext').html('You fire an arrow into the advanceing group. Luckly for you, it hits one of them. To your surpise, it ricochets off of the first assailent, and into the second one. Congrats.');
          enemy = Number(enemy) - 2;
            }else{
              $('#scenetext').html('You fire an arrow into the advanceing group. Luckly for you, it hits one of them. To your surpise, it ricochets off of the first assailent, and into the last of your foe. Congrats.');
          enemy = Number(enemy) - 2;
            }
          }else{
            $('#scenetext').html('You fire an arrow into the advanceing group. Luckly for you, it spears the last enemy right between the eyes. Congrats!');
          enemy = Number(enemy) - 1;
          }
        }else{
          $('#scenetext').html('You fire an arrow into the advanceing group. Luckly for you, it hits one of them. Congrats.');
          enemy = Number(enemy) -1;
        }
        $('#question').html("Press enter to continue.");
      }else{
        LP = Number(LP) + 17;
        updateStats();
        $('#scenetext').html('You fire an arrow blindly into the group, and to your shock, it misses all of your assailents. You are swiflty surrounded and disarmed by the opposing party. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
        var enemyCapture = true;
        $('#question').html('Type "Enter" to go to Level Select');
      }
    }else{
          if (x <= player.accuracyM){
        if (x <= player.randomCrit){
          if (enemy != 1){
            if (enemy == 3){
          $('#scenetext').html('You charge head first into your assailents, screaming at them with your world renound battle cry. You effectivly use your ' + player.weapons + ' to incompacitate two of your assailents as you hop out of your assailents reach before they can effectivly hurt you. Congrats!');
          enemy = Number(enemy) - 2;
            }else{
              $('#scenetext').html('You charge head first into your assailents, screaming at them with your world renound battle cry. You effectivly use your ' + player.weapons + ' to incompacitate the last two of your assailents. Congrats!');
          enemy = Number(enemy) - 2;
            }
          }else{
            if (player.secondarys != 'no secondary'){
            $('#scenetext').html('You charge head first into your assailents, screaming at them with your world renound battle cry. You parry the knife from the bandit with your ' + player.secondarys + ' and finsihed the last bandit off with your ' +player.weapons+'. Congrats!');
          enemy = Number(enemy) - 1;
            }else{
              $('#scenetext').html('You charge head first into your assailents, screaming at them with your world renound battle cry. You parry the knife from the bandit with your ' + player.weapons + ' to incompacitate two of your assailents as you hop out of your assailents reach before they can effectivly hurt you. Congrats!');
          enemy = Number(enemy) - 1;
            }
          }
        }else{
          $('#scenetext').html('You charge head first into your assailents, screaming at them with your world renound battle cry. You effectivly use your ' + player.weapons + ' to incompacitate one of your assailents. You hop out of your assailents reach before they can effectivly hurt you.');
          enemy = Number(enemy) - 1;
        }
        $('#question').html("Press enter to continue.");
      }else{
        LP = Number(LP) + 17;
            updateStats();
        $('#scenetext').html('You charge head first into your assailents, screaming at them with your world renound battle cry. You try to use your '+ player.weapons + ' to harm your foes, but you are swiftly overwealmed. You are disarmed and surrounded.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
        var enemyCapture = true;
        End = true;
        $('#question').html('Type "Enter" to go to Level Select');
      }
    }
  }
}

function scene39Answer(answer){
  if (answer == 'Enter'){
    if (End == True){
        levelSelect0();
      }else{
        ('#message').html('Nice try! Next time, choose the TRUE option.')
    }
  }
  if (answer == ''){
    scene29(); 
  }
    $('#message').html('');
}

function scene40(){
  currentScene = 40;
  if (x <= player.charisma){
    if (player.race == 'Dragonhalf'){
      if (x <= player.speed){
        if (x <= player.dodge){
          LP = Number(LP) +5;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My cash hord!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door. You run past the first assailents, and dodge the other remaining assailents. You run out your door, and into your appartment complex. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var evadeThroughDoor = true;
          $('#question').html('Type "Enter" to go to Level Select');
        }else{
          LP = Number(LP) + 17;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My cash hord!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but not quite fast enough. You are grabbed by your assailents, but you attempt to get out of their grip, you are thrown to the ground.');
          $('#question').html('Type "Enter" to go to Level Select');
          var enemyCapture = true;
        }
      }else{
        LP = Number(LP) + 5;
        updateStats();
        if (x <= player.dodge && x <= player.dodge){
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My cash hord!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but you are grabbed by your tail. You whorle around, and with ease, kick your assailent, freeing your tail. You run out your door, and into your appartment complex. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var evadeThroughDoor = true;
         $('#question').html('Type "Enter" to go to Level Select');
        }else{
          LP = Number(LP) + 17;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My cash hord!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but not quite fast enough. You are grabbed by your assailents, but you attempt to get out of their grip, you are thrown to the ground. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var enemyCapture = true;
          $('#question').html('Type "Enter" to go to Level Select');
        }
      }
    }

    if (player.character == 'MHW'){
      if (x <= player.speed){
        if (x <= player.dodge){
          LP = Number(LP) + 5;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing towards the kitchen. "My super-expensive magic items!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door. You run past the first assailents, and dodge the other remaining assailents. You run out your door, and into your appartment complex.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var evadeThroughDoor = true;
           $('#question').html('Type "Enter" to go to Level Select');
        }else{
          LP = Number(LP) + 17;
          updateStats();
           $('#scenetext').html('"LOOK!" You shout pointing towards the kitchen. "My super-expensive magic items!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but not quite fast enough. You are grabbed by your assailents, but you attempt to get out of their grip, you are thrown to the ground.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var enemyCapture = true;
           $('#question').html('Type "Enter" to go to Level Select');
        }
      }else{
        if (x <= player.dodge && x <= player.dodge){
          LP = Number(LP) + 5;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My cash hord!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but you are grabbed. You whorle around, and with ease, kick your assailent, freeing your tail. You run out your door, and into your appartment complex. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var evadeThroughDoor = true;
           $('#question').html('Type "Enter" to go to Level Select');
        }else{
          LP = Number(LP) + 17;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing towards the kitchen. "My super-expensive magic items!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but not quite fast enough. You are grabbed by your assailents, but you attempt to get out of their grip, you are thrown to the ground.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var enemyCapture = true;
           $('#question').html('Type "Enter" to go to Level Select');
        }
      }
    }

    if (player.character == 'FDC'){
      if (x <= player.speed){
        if (x <= player.dodge){
          LP = Number(LP) + 5;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My Holy Items of the planes that will surely sell on the Black Market!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door. You run past the first assailents, and dodge the other remaining assailents. You run out your door, and into your appartment complex.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
           $('#question').html('Type "Enter" to go to Level Select');
          var evadeThroughDoor = true;
        }else{
          LP = Number(LP) + 17;
          updateStats();
           $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My Holy Items of the planes that will surely sell on the Black Market!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but not quite fast enough. You are grabbed by your assailents, but you attempt to get out of their grip, you are thrown to the ground.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var enemyCapture = true;
           $('#question').html('Type "Enter" to go to Level Select');
        }
      }else{
        if (x <= player.dodge && x <= player.dodge){
          LP = Number(LP) + 5;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My Holy Items of the planes that will surely sell on the Black Market!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but you are grabbed. You whorle around, and with ease, kick your assailent, freeing your tail. You run out your door, and into your appartment complex.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var evadeThroughDoor = true;
           $('#question').html('Type "Enter" to go to Level Select');
        }else{
          LP = Number(LP) + 17;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My Holy Items of the planes that will surely sell on the Black Market!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but not quite fast enough. You are grabbed by your assailents, but you attempt to get out of their grip, you are thrown to the ground.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var enemyCapture = true;
           $('#question').html('Type "Enter" to go to Level Select');
        }
      }
    }else{
      if (x <= player.speed){
        if (x <= player.dodge){
          LP = Number(LP) + 5;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My expensive arrow collection!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door. You run past the first assailents, and dodge the other remaining assailents. You run out your door, and into your appartment complex.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
           $('#question').html('Type "Enter" to go to Level Select');
          var evadeThroughDoor = true;
        }else{
          LP = Number(LP) + 17;
          updateStats();
           $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My expensive arrow collection!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but not quite fast enough. You are grabbed by your assailents, but you attempt to get out of their grip, you are thrown to the ground.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
            $('#question').html('Type "Enter" to go to Level Select');
          var enemyCapture = true;
        }
      }else{
        if (x <= player.dodge && x <= player.dodge){
          LP = Number(LP) + 5;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My expensive arrow collection!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but you are grabbed. You whorle around, and with ease, kick your assailent, freeing your tail. You run out your door, and into your appartment complex.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
           $('#question').html('Type "Enter" to go to Level Select');
          var evadeThroughDoor = true;
        }else{
          LP = Number(LP) + 17;
          updateStats();
          $('#scenetext').html('"LOOK!" You shout pointing in a random direction. "My expensive arrow collection!" The assailents look excitedly towards the direction you pointed. Nows your chance. You sprint towards the door, but not quite fast enough. You are grabbed by your assailents, but you attempt to get out of their grip, you are thrown to the ground.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
           $('#question').html('Type "Enter" to go to Level Select');
          var enemyCapture = true;
        }
      }
    }
  }else{
    LP = Number(LP) + 17;
    updateStats();
    $('#scenetext').html('"uhhhhhhhhh....." you start to say, but you are swiftly over run by your assailents.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
     $('#question').html('Type "Enter" to go to Level Select');
    var enemyCapture = true;
  }
}

function scene40Answer(answer){
    levelSelect0();
    $('#message').html('');
}

function scene41(){
currentScene = 41;
if (x <= player.charisma && x <= player.charisma && x <= player.charisma){
    $('#scenetext').html('"Wait!" you shout before they can get their hands on you. "I can pay double whatever your being payed, if you let me go." This was mostly true, however, you werent exactly going to hand them cash. All you need is just time for the authorities to arrive. Someone mustve heard their forced entery, and should arrive soon. <br>    "Your kidding, right?" <br> "No" you say. "In fact, Ill  pay triple if you tell me who sent you" You say with confidence. <br>    "We would like you to pay up front." said one of the goons. Just as you hear that, you hear a small click out side. Someone else is coming.');
    $('#question').html("Would you like to continue to distract? y or n");
    }else{
      LP = Number(LP) + 17;
  updateStats();
      $('#scenetext').html('"Wait! I will pa-" Before you can finish, you are swiflty overrun by the assailents.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
       $('#question').html('Type Enter to go to Level Select');
    var enemyCapture = true;
  End = true;
  }
}

function scene41Answer(answer){
  if (answer != 'y' && answer != 'n' && answer != 'Enter' && answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
  $('#message').html('Please pick one of the actions above.');
      return;
  }
  if (answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
    if (answer == 'y'){
      scene43();
    }
    if (answer == 'n'){
      scene44();
    }
    if (answer == 'Enter'){
      if (End == True){
          levelSelect0();
        }else{
          ('#message').html('Nice try! Next time, choose the TRUE option.')
      }
    }
  }else{
	     if (answer === 'Escort'){
          if (chapter1_sidequest1 == true){
            scene81();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Flee'){
      if (chapter1_sidequest3 == true){
        scene70();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Captured'){
      if (chapter1_sidequest2 == true){
        scene90();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Chapter 2'){
      if (chapter2 == true){
        scene110();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
}
    $('#message').html('');
}

function scene42(){
  currentScene = 42;
  if (x <= player.dodge || player.speed && x <= player.dodge || player.speed && x <= player.dodge || player.speed){
    LP= Number(LP) + 10;
     $('#scenetext').html('There is only one way out, and its blocked by your three assailants. You sprint towards the door, slideing underneath the legs of the first, rolling past the second, and You sprint swiftly past the third one. Running out the door.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      $('#question').html('Type Enter to go to Level Select');
     var chaseScene = true;
  }else{
    LP = Number(LP) + 17;
    updateStats();
    $('#scenetext').html("You try to run pass one of your assailants, but you aren't fast enough. You are swiftly grabbed, and thrown to the ground. <br> <br> Your current LP (Level Points) count is " + LP + "!");
      $('#question').html('Type Enter to go to Level Select');
    var enemyCapture = true; 
  }
}

function scene42Answer(answer){
    levelSelect0();
    $('#message').html('');
}

function scene43(){
  currentScene = 43;
  LP = Number(LP) + 15;
  updateStats();
  if (x <= player.wisdom){
  $('#scenetext').html('   "Wait here." you say casually, pretending not to notice the clicking of the door. "and I will grab that cash" You walk calmly towards the kitchen, and gentally close the door behind you. As you do so, you grab some pots that you have lying around, and make a small ruckus. Enough so that it sounds like your digging through some stuff. Then you hear it. The entery door flies open, and soon you hear a commotion outside your door. After the ruckus, you put your pots down, and you exit the kitchen. Outside, two guards had pinned two of the hooded figures, while the third one was lying on the ground, passed out.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      $('#question').html('Type Enter to go to Level Select');
  var planRoom = true;
  }else{
    $('#scenetext').html('   "Wait here." you say casually, pretending not to notice the clicking of the door. "and I will grab that cash for you" You walk calmly towards the kitchen, and gentally close the door behind you. You gentally press your ear agenst the door, and you silently listen carefully. Nothing seemed to be happening, but after a little while, you hear it. The entery door flies open, and soon you hear a commotion outside your door. After the ruckus, you put your pots down, and you exit the kitchen. Outside, two guards had pinned two of the hooded figures, while the third one was lying on the ground, passed out.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      $('#question').html('Type Enter to go to Level Select');
    var planRoom = true;
  }
}

function scene43Answer(answer){
    levelSelect0();
    $('#message').html('');
}

function scene44(){
  currentScene = 44;
  LP = Number(LP) + 15;
  updateStats();
     $('#scenetext').html('"I uhhhh, actually do not have that cash..." you say sheepishly. Your assailants, with irration in their eyes, start advancing towards you, but just before they can get to you, the door in front of you flys open, and two people in uniforms fly out. They wore the same uniform, both of them had the matching  dark leather outfits that seem to mirror that of the night, while in contrast, their silver-colored helments reflected the moonlight into your room. They dive onto two of your assailants, while the third one whips around at the commotion. You, take the oppertnity to dive at your third assailant, and pin him to to the ground.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type Enter to go to Level Select');
     var plan = true;
}

function scene44Answer(answer){
    levelSelect0();
    $('#message').html('');
}

function scene45(){
  currentScene = 45;
  if (x <= player.charisma || x <= player.speed){
    $('#scenetext').html('"I will be right back" You say with haste. You calmly speed-walk into your kitchen, and a little too hardly, slam the door. Before you can even think, you grab a char just within arms reach, and place it on the door. It will for sure not last for long.');
    $('#question').html('You can quickly hear your assailants coming towards your door. What do you do? Find a Weapon (FAW), or Hide Yourself (HY)?');
  }else{
    $('#scenetext').html('"I... Hold that thought" You say with haste. You sprint from the unfazed bandits, with them hot on your heals. You rush past your oak door, and before you can even think, you grab a char just within arms reach, and place it on the door. It will for sure not last for long.');
    $('#question').html('You can quickly hear your assailants coming towards your door. What do you do? Find a Weapon (FAW), or Hide Yourself (HY)?');
  }
}

function scene45Answer(answer){
  if (answer != 'FAW' && answer != 'HY'){
    $('#message').html('Please pick one of the actions above.');
      return;
  }
    if (answer == 'FAW'){
      scene46();
    }
    if (answer =='HY'){
      scene47();
    }
    $('#message').html('');
}

function scene46(){
  currentScene = 46;
    LP = Number(LP) + 17;
  updateStats();
   $('#scenetext').html('You look around despretly, and to your luck, you find a cutting knife and prepare the sneak attack. The door opens and you attack. However, to your dismay, you miss all three of the guards and you are grabbed and thrown into the living room.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type Enter to go to Level Select');
   var enemyCapture = true;
}

function scene46Answer(answer){
    levelSelect0();
    $('#message').html('');
}

function scene47(){
  currentScene = 47;
  if (x <= player.wisdom){
    $('#scenetext').html("You start walking towards one of your hiding places before a thought stops you. Why am I hiding if they already know I'm in here in the first place? Would you like to try to find a weapon instead?");
    $('#question').html('Would you like to try to find a weapon instead? y or n');
  }else{
    LP = Number(LP) + 17;
    updateStats();
   $('#scenetext').html('You run within your kitchen, and find a small cubbie to stuff yourself within. Just as you finish hiding, you hear the door open, and you stop your breathing. You hear the boots walking around the kitchen, and before the cabnet door flys open, and you are dragged out, and thrown onto the floor of your living room.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
          $('#question').html('Type Enter to go to Level Select');
   var enemyCapture = true; 
  }
}

function scene47Answer(answer){
    levelSelect0();
    $('#message').html('');
}

function scene47a(){
  currentScene = 47;
  LP = Number(LP) + 17;
  updateStats();
  $('#scenetext').html('You run within your kitchen, and find a small cubbie to stuff yourself within. Just as you finish hiding, you hear the door open, and you stop your breathing. You hear the boots walking around the kitchen, and before the cabnet door flys open, and you are dragged out, and thrown onto the floor of your living room.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
         $('#question').html('Type Enter to go to Level Select');
   var enemyCapture = true;
}
function scene47aAnswer(answer){
    levelSelect0();
    $('#message').html('');
}

function scene47Answer(answer){
  if (answer != 'y' && answer != 'n'){
    $('#message').html('Please pick one of the actions above.');
      return;
  }
  if (answer == 'y'){
    scene46();
  }
  if (answer == 'n'){
    scene47a();
  }
    $('#message').html('');
}
function scene11(){
  currentScene = 11;
  if (x <= player.strength){
    $('#scenetext').html('You effortlessly slide a dresser, and some of the chairs that were laying around, onto the door.');
    $('#question').html('What would you do now? arm yourself (AY), set a Trap, or hide yourself (HY). <br>Note: Once you select hide yourself (HY), you cannot do any other action.');
  }else{
    $('#scenetext').html('You try to push the closest dresser to the door, but you are only able to push the dresser an inch. Maybe you should try something else...');
    weak = true;
    $('#question').html('What would you do instead? Hide, Investigate, or return to sleep (Sleep)');
  }
}

function scene11Answer(answer){
  if (answer != 'Hide' && answer != "Investigate" && answer != 'Sleep' && answer != 'AY' && answer != 'Trap' && answer != 'HY'){
    $('#message').html('Please enter one of the given options.');
    return;
  }else{
    if (weak == true){
      if (answer == 'Hide'){
        scene8();
      }else if (answer == 'Sleep'){
        scene9();
      }else{
        scene10();
      }
    }else{
      if (answer == 'HY'){
        scene12();
      }else if (answer == 'Trap'){
        scene13();
      }else{
        scene14();
      }
    }
  }
}

//hiding...
function scene12() {
  currentScene = 12;
  if (armed == true){
    if (player.race == 'dragonhalf'){
       $('#scenetext').html('You run into your kitchen with your ' + player.weapons + ". You've already picked the perfect spot to hide within. Inside the kitchen, your run into an empty closet that you've just cleared for this situation, making sure that your weapons don't clatter as you get comfortable. You slip into the closet, making sure to tuck your tail into the closet with you as you move in.");
    }else{
      $('#scenetext').html('You run into your kitchen with your ' + player.weapons + ". You've already picked the perfect spot to hide within. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet with relative ease, making sure that your weapons don't clatter as you get comfortable. Then you wait.");
    }
  }else{
    if (player.race == 'dragonhalf'){
       $('#scenetext').html("You run into your kitchen with swift speed, for you've already picked the perfect spot to hide within. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet, making sure to tuck your tail into the closet with you as you move in.");
    }else{
      $('#scenetext').html("You run into your kitchen with swift speed, for you've already picked the perfect spot to hide within. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet with relative ease, and you wait.");
    }
  }
  $('#question').html('Press enter to continue');
}

function scene12Answer(answer){
  if (answer == ''){
    scene16();
  }else{
    $('#message').html('Try clearing the answer box');
    return;
  }
}

//Trap
function scene13(){
  currentScene = 13;
  //if You did ay
  if (armed == true){
    if (x <= player.wisdom){
      trapSet = true;
      prepared = true;
      if (player.character == 'FEM' || player.character == 'MES' || player.character == 'FDM' || player.character == 'MDA'){
        if (player.secondary != 'no secondary'){
            $('#scenetext').html('Slinging your '+ player.weapons +' and your ' + player.secondary +' on your back, you head back to your barricade and with relitive haste put together a trap, by using the things scattered around your home. It somewhat resembles a bear trap you use to set up for hunting.');
          }else{
            $('#scenetext').html('Slinging your '+ player.weapons +' on your back, you head back to your barricade and with relitive haste put together a trap, by using the things scattered around your home. It somewhat resembles a bear trap you use to set up for hunting.');
          }
        }else{
          if (player.secondary != 'no secondary'){
            $('#scenetext').html('Slinging your '+ player.weapons +' and your ' + player.secondary +' on your back, you head back to your barricade and with relitive haste put together a trap, by using the things scattered around your home. It somewhat resembles a bear trap from the "Traps and Survival Tips" novel you were recently reading.');
          }else{
            $('#scenetext').html('Slinging your '+ player.weapons +' on your back, you head back to your barricade and with relitive haste put together a trap, by using the things scattered around your home. It somewhat resembles a bear trap from the "Traps and Survival Tips" novel you were recently reading.');
          }
        }
      }else{
        notSmart = true;
        $('#scenetext').html('You attempt to set a trap on the barricade, but it instantly falls apart as soon as you have it set.');
      }
      $('#question').html('Would you like to hide now? y or n');
      //if you did not do ay
    }else{
      if (x <= player.wisdom){
        trapSet = true;
        if (player.character == 'FEM' || player.character == 'MES' || player.character == 'FDM' || player.character == 'MDA'){
            $('#scenetext').html('You headed back to your barricade and with relitive haste put together a trap, by using the things scattered around your home. It somewhat resembles a bear trap you use to set up for hunting.');
        }else{
            $('#scenetext').html('ou headed back to your barricade and with relitive haste put together a trap, by using the things scattered around your home. It somewhat resembles a bear trap you' +have+' seen in your copy of "Traps and Survivel Tips" novel you' +have+' been reading recently.');
        }
        $('#question').html('Would you like to hide now or arm yourself (AY)');
      }else{
        notSmart = true;
        $('#scenetext').html('You attempt to set a trap on the barricade, but it instantly falls apart as soon as you have it set.');
        $('#question').html('Now what will you do?! Arm Yourself (AY) or hide.');
      }
  }
}

function scene13Answer(answer){
  if (answer != 'AY' && answer != 'HY' && answer != 'y' && answer != 'n'){
    $('#message').html('Please enter one of the given options.');
    return;
  }else{
    if (prepared == true){
      if (answer == 'y'){
        scene12();
      }else if (answer == 'n'){
        scene15();
      }else{
        $('#message').html('What? What are you saying? Pick one of the options above');
      return;
      }
    }else{
      if (answer == 'AY'){
        scene14();
      }else if (answer == 'HY'){
        scene12();
      }else{
        $('#message').html('What? What are you saying? Pick one of the options above');
      return;
      }
    }
  }
  $('#message').html('');
}

//Arm yourself
function scene14(){
  currentScene = 14;
  armed = true;
  if (trapSet == true || notSmart == true){
    prepared = true;
    if (notSmart == true){
      if (player.secondary != 'no secondary'){
        $('#scenetext').html('You run from your barricade and grab your ' + player.weapons +' and ' + player.secondary + ' from their hiding place.');
      }else{
        $('#scenetext').html('You run from your barricade and grab your ' + player.weapons +' from its hiding place.');
      }
    }else{
      if (player.secondary != 'no secondary'){
        $('#question').html('Would you like to hide now? y or n');
      }else{
        $('#scenetext').html('You run from your barricade and your well set trap, and grab your ' + player.weapons +' from its hiding place.');
      }
    }
    $('#question').html('Would you like to hide now? y or n');
  }else{
    if (player.secondary != 'no secondary'){
      $('#scenetext').html('You run from your barricade  and grab your ' + player.weapons +' and ' + player.secondary + ' from their hiding places.');
    }else{
      $('#scenetext').html('You run from your barricade  and grab your ' + player.weapons +' from its hiding places.');
    }
    $('#question').html('Now what will you do?! Trap or Hide Yourself (HY).');
  }
}

function scene14Answer(answer){
  if (answer != 'HY' && answer != 'Trap' && answer != 'y' && answer != 'n'){
    $('#message').html('Please enter one of the given options.');
    return;
  }else{
    if (prepared == true){
      if (answer == 'y'){
        scene12();
      }else if (answer == 'n'){
        scene15();
      }
    }else{
      if (answer == 'Trap' && notSmart != true){
        scene13();
      }else if (notSmart == true){
        $('#message').html('You already tried that and epically failed. Its probably best not not waist more time.');
      }else if (answer == 'HY'){
        scene12();
      }else{
        $('#message').html('What? What are you saying? Pick one of the options above');
    return;
      }
    }
  }
  $('#message').html('');
}

// You didn't go hide
function scene15(){
  currentScene = 15;
  sleep = true;
  End = true;
  LP = Number(LP) + 25;
  updateStats();
  $('#scenetext').html('Interesting... <br> You sit down on the floor and wait till something happens. You get so bored in fact, that you return to your bed, and go back to sleep. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
 $('#question').html('Type "Enter" to go to Level Select');
}

function scene15Answer(){
  levelSelect();
  $('#message').html('');
}

// if you did hide, what happens?
function scene16(){
  currentScene = 16;
  if (trapSet == true){
    harm = true;
    var harmedHidden = true;
    if (x <= (player.stealth - 20)){
      LP = Number(LP) + 20;
      updateStats();
      $('#scenetext').html('You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you did' + not + ' set them up well. However, you can hear your trap snap into life, and someone screaming in responce. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft foot steps within the kitchen, and you pray that he does' + not + ' find you. <br> Luckly for you, he does' + not + '. You hear the man behind your door run out to assist his fallen comrade. <br> Or at least you think so. You don' + not + ' move out of your hiding spot until all is quite. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
      End = true;
      hidden = true;
      $('#question').html('Type Enter to go to Level Select');
    }else{
      if (armed == true && x <= player.accuracyM || x <= player.speed){
        if (player.secondary == 'no secondary'){
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. However, you can hear your trap snap into life, and someone screaming in responce. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft foot steps within the kitchen, and you pray that he doesn't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the guard in front of you. The gurad in front of you towers over you, as he glares at you with rage in his eyes. He wore the green uniforms you've seen around town, with a simple glistening helment. The guard, to your dismay, is baring a war hammer. To your shock, the guard strikes at you, but thanks to your swift thinking and lightning reflexes, you were able to block all the incoming strikes with your " + player.weapons + '.');
        }else{
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. However, you can hear your trap snap into life, and someone screaming in responce. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft foot steps within the kitchen, and you pray that he doesn't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the guard in front of you. The gurad in front of you towers over you, as he glares at you with rage in his eyes. He wore the green uniforms you've seen around town, with a simple glistening helment. The guard, to your dismay, is baring a war hammer. To your shock, the guard strikes at you, but thanks to your swift thinking and lightning reflexes, you were able to block all the incoming strikes with your " + player.weapons + ' and ' + player.secondary + '.');
        }
        $('#question').html('What will you do now?! Get Away (GA), or Persuade');
      }else{
        if (x <= player.dodge || x <= player.speed){
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. However, you can hear your trap snap into life, and someone screaming in responce. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft foot steps within the kitchen, and you pray that he doesn't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the guard in front of you. The gurad in front of you towers over you, as he glares at you with rage in his eyes. He wore the green uniforms you've seen around town, with a simple glistening helment. The guard, to your dismay, is baring a war hammer. To your shock, the guard strikes at you, but thanks to your swift thinking and lightning reflexes, you were able to dodge all the oncoming attacks. You can see the rage growing on the guards face as you dive out of your hideing place.");
          $('#question').html('What will you do now?! Get Away (GA), or Persuade');
        }else{
          LP = Number(LP) + 10;
          updateStats();
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. However, you can hear your trap snap into life, and someone screaming in responce. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft foot steps within the kitchen, and you pray that he doesn't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the guard in front of you. The gurad in front of you towers over you, as he glares at you with rage in his eyes. He wore the green uniforms you've seen around town, with a simple glistening helment. The guard, to your dismay, is baring a war hammer. To your shock, the guard strikes at you, but thanks to your swift thinking and lightning reflexes, you were able to dodge all the oncoming attacks.  Unfortinatly for you, you aren't able to dodge the oncoming blows. His hammer hits you cleanly agenst the sholder, and you are thrown unto the ground in front of them <br> <br> Your current LP (Level Points) count is " + LP + "!");
          $('#question').html('Type Enter to go to Level Select');
        }
      }
    } 
  }else{
    if (x <= player.stealth - 20){
      LP = Number(LP) +20;
      End = true;
      var harmedHidden = true;
      $('#scenetext').html('You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you did' + not + ' set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are do' +not +'  find you. <br> Luckly for you, he does' + not +'. You hear the people behind your door run out and into the next room. <br> Or at least you think so. You do' + not +' move out of your hiding spot until all is quite <br> <br> Your current LP (Level Points) count is ' + LP + '!');
       $('#question').html('Type Enter to go to Level Select');
    }else{
      if (armed == true && x <= player.accuracyM || x <= player.speed){
        if (player.secondary != 'no secondary'){
        $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are don't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the two guards in front of you. One of them is extreamly tall compaired to the shorter one. Each of them wore the same green uniforms you've seen around town, with glistening helments. The only splash of color you could see, was the red beard the dwarf wore. While they staired at you, you could tell that the tall one was baring a war hammer of some sorts, while the dwarf was bering a short sword. <br> Before the dwarf can speak, the taller guard strikes at you. Thanks to your quick thinking, you were able to parry the attack with your " + player.weapons + ' and your ' + player.secondary +'.');
        }else{
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are don't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the two guards in front of you. One of them is extreamly tall compaired to the shorter one. Each of them wore the same green uniforms you've seen around town, with glistening helments. The only splash of color you could see, was the red beard the dwarf wore. While they staired at you, you could tell that the tall one was baring a war hammer of some sorts, while the dwarf was bering a short sword. <br> Before the dwarf can speak, the taller guard strikes at you. Thanks to your quick thinking, you were able to parry the attack with your " + player.weapons + '.');
        }
      $('#question').html('What will you do now?! Get Away (GA), or Persuade');
      }else{
        if (x <= player.dodge || x <= player.speed){
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are don't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the two guards in front of you. One of them is extreamly tall compaired to the shorter one. Both of them wore the same green uniforms you've seen around town, with glistening helments. The only splash of color you could see, was the red beard the dwarf wore. While they staired at you, you could tell that the tall one was baring a war hammer of some sorts, while the dwarf was bering a short sword. <br> Before the dwarf can speak, the taller guard strikes at you. You being the swift young lass you are, are able to dodge all the blows from the guard. You can see the rage growing on the guards face as you dive out of your hideing place.");
          $('#question').html('What will you do now?! Get Away (GA), or Persuade');
        }else{
          LP = Number(LP) + 10;
          updateStats();
          End = true;
          var freindlyCapture = true;
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are don't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the two guards in front of you. One of them is extreamly tall compaired to the shorter one. Each of them wore the same green uniforms you've seen around town, with glistening helments. The only splash of color you could see, was the red beard the dwarf wore. While they staired at you, you could tell that the tall one was baring a war hammer of some sorts, while the dwarf was bering a short sword. <br> Before the dwarf can speak, the taller guard strikes at you. Unfortinatly for you, you aren't able to dodge the oncoming blows. His hammer hits you cleanly agenst the sholder, and you are thrown unto the ground in front of them <br> <br> Your current LP (Level Points) count is " + LP + "!");
        }
      }
    }
  }
}

function scene16Answer(answer){
  if (answer != 'GA' && answer != 'Persuade' && answer != 'Enter'){
    $('#message').html('Please select one of the options above');
    return;
  }else{
    $('#message').html('');
    if (End == true){
      if (answer == 'Enter'){
        levelSelect();
      }
    }else if (answer == 'GA'){
      scene17();
    }else if (answer == 'Persuade'){
      scene18();
    }else{
      $('#message').html('You cannot do that!');
      return;
    }
  }
}

// GET AWAY FROM THEM!
function scene17(){
  $('#message').html('');
  currentScene = 17;
  if (trapSet != true){
    if (armed == true){
      if (x <= player.strength && x <= player.accuracyM){
        LP = Number(LP) + 13;
        updateStats();
          $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully block the attack with your ' + player.weapons + ' and ' + player.secondary + '. You throw his war hammer off of you, and make it towards the door. You run past the dwarf, who also tried to stop you in your path. Just as you make it towards the door, you can hear one of the guards shouting to the other. <br> "Private what are you doing?!?" You run out the door, and into safety <br> <br> Your current LP (Level Points) count is ' + LP + '!');
                $('#question').html('Type Enter to go to Level Select');
            var freindlyChase = true;
      }else if (x <= player.dodge){
        LP = Number(LP) + 10;
        $('#scenetext').html('Somehow you are able muscle your way out of your position underneath the war hammer, but you aren' + not +' able to dodge his next attack. Before you can get away, the hammer swings towards you, hitting you in the shoulder, and throwing you at your cupboards, shattering them. As you fall from the wall, stars begin to fill your vision as you slowly pass out. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          player.health = Number(player.health) - 25;
            updateStats();
        $('#question').html('Type Enter to go to Level Select');
          injured = true;
        var knockout = true;
        var freindlyCapture = true;
      }else{
        LP = Number(LP) + 10;
        $('#scenetext').html('You try to muscle your way out of your position underneath the war hammer, but you fail. You try to escape from his hammers grip it cleanly hits your sholder, and you tumble to the ground. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
        player.health = Number(player.health) - 25;
        updateStats();
        $('#question').html('Type "Enter" to go to Level Select');
          injured = true;
          var freindlyCapture = true;
      }
    }else{
      if (x <= player.dodge && x <= player.speed || x <= player.dodge && x <= player.speed){
        LP = Number(LP) + 13;
        updateStats();
        $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way before he can crush you. You roll into the kitchen, periodicly dodging the guards hammer strikes. The dwarven guard stutters as he tries to get the other guards attetion, but the anger in the giants eyes seemed unfazed. As you dodge, you notice that as the hammer strikes your floor, as the weight of the hammer strikes the floor leaves splinter and depressions where the hammer missed you. Thats going to be expensive to replace, you say to yourself. You sprint past tall guard when he attempts to strike you, rushing past the dwarf who did' + not +' seem to notice you rushing past, and into the next room, and out into safty');
        $('#question').html('Type "Enter" to go to Level Select');
          var freindlyChase = true;
      }else{
        LP = Number(LP) + 10;
        $('#scenetext').html('You try to dive out of the way of the falling hammer, but quite not fast enough. The hammer, unfortinatly for you, lands right on your leg with a stomach sickening crunch. You cry out in pain, and try to get crawl away. The dwarven guard cried out in terror. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
        player.health = Number(player.health) - 75;
        updateStats();
        $('#question').html('Type Enter to go to Level Select');
        injuredLeg = true;
        var freindlyCapture = true;
      }
    }
  }else{
    if (armed == true){
      if (x <= player.strength && x <= player.accuracyM || x <= player.dodge){
        if (player.secondary != 'no secondary'){
          $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully block the attack with your ' + player.weapons + ' and ' + player.secondary + '. You throw his war hammer off of you, and make it towards the door. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
        }else{
          $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully block the attack with your ' + player.weapons + '. You throw his war hammer off of you, and make it towards the door. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
        }
        $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
      }else if (x <= player.dodge){
        LP = Number(LP) + 10;
         $('#scenetext').html('Somehow you are able muscle your way out of your position underneath the war hammer, but you aren' + not +' able to dodge his next attack. Before you can get away, the hammer swings towards you, hitting you in the shoulder, and throwing you at your cupboards, shattering them. As you fall from the wall, stars begin to fill your vision as you slowly pass out. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
        player.health =Number(player.health) -25;
        updateStats();
        $('#question').html('Type Enter to go to Level Select');
        injured = true;
        var knockout = true;
        var freindlyCapture = true;
      }else{
        LP = Number(LP) + 10;
        $('#scenetext').html('You try to muscle your way out of your position underneath the war hammer, but you fail. You try to escape from his hammers grip it cleanly hits your sholder, and you tumble to the ground. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
        player.health = Number(player.health) - 25;
        updateStats();
        $('#question').html('Type "Enter" to go to Level Select');
          injured = true;
          var freindlyCapture = true;
      }
    }else{
      if (x <= player.dodge && x <= player.speed){
        $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way before he can crush you. You roll into the kitchen, periodicly dodging the guards hammer strikes. Under the weight of the hammer, the floor is left depressions where the hammer missed you. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
          $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
      }else{
        LP = Number(LP) + 10;
        $('#scenetext').html('You try to dive out of the way of the falling hammer, but quite not fast enough. The hammer, unfortinatly for you, lands right on your leg with a stomach sickening crunch. You cry out in pain, and try to get crawl away. The dwarven guard cried out in terror. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          player.health = Number(player.health) - 75;
          updateStats();
            $('#question').html('Type Enter to go to Level Select');
        injuredLeg = true;
        var freindlyCapture = true;
      }
    }
  }
}

function scene17Answer(answer){
  if (answer != 'WHU' && answer != 'THW' && answer != 'LH' && answer != 'Enter'){
    $('#message').html('Please select one of the options above');
    return;
  }else{
    $('#message').html('');
    if (answer == 'WHU'){
      scene19();
    }else if (answer == 'THW'){
      scene20();
    }else if (answer == "LH"){
      scene21();
    }else if (End == true){
      if (answer == 'Enter'){
        levelSelect();
      }
    }else{
      $('#message').html('That is' +not + 'an option');
    }
  }
}

//persuade them!
function scene18(){
  currentScene = 19;
  if (trapSet == true){
    if (x <= player.charisma || x <= player.charisma){
      LP = Number(LP) + 15;
      updateStats();
      $('#scenetext').html('"Whoa chill!" You shout holding your hands out. "What do you want?!" This makes the tall hammer-weilder pause, but unexpectedly, it was long enough for the dwaft to disarm him of his weapon. "For all the Plains, Private! We talked about this!" <br> <br> Your current LP (Level Points) count is ' + LP + '!');
      var communication = true;
    }else if (x <= player.dodge && x <= player.speed){
      LP = Number(LP) + 13;
      updateStats();
      $('#scenetext').html('"What i-" Before you can even try to get what you are saying out, the guard, brings his hammer on you, thankfully, you step out of the way of his hammer and run for the door. The dwarf is frozen in shock as you brush past him, and out of your appartment. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
      var freindlyChase = true
    }else{
       LP = Number(LP) + 10;
      updateStats();
      $('#scenetext').html('"What i-" Before you can even try to get what you are saying out, the guard, brings his hammer on you, knocking you down out of your feet, and into the cupboards, shattering them. As you fall to the ground, you can barely reconize that your sholder aches, as you slowly pass out. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
      $('#question').html('Type Enter to go to Level Select');
      var freindlyCapture = true;
    }
    End = true;
    $('#question').html('Type Enter to go to Level Select');
  }else{
    if (player.charisma && player.dodge){
      $('#scenetext').html('"Whoa chill!" You shout holding your hands out. "What do you want?!" This makes the tall hammer-weilder pause, but instead of listening to what you have to say, he prepares to strike at you again. You dive out of the way, hearing the hammer crash behind you. The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way before he can crush you. You roll into the kitchen, periodicly dodging the guards hammer strikes. Under the weight of the hammer, the floor left depressions where the hammer missed you. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
       $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
    }else if (x <= player.dodge){
      $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way before he can crush you. You roll into the kitchen, periodicly dodging the guards hammer strikes. Under the weight of the hammer, the floor is left depressions where the hammer missed you. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
       $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
    }else{
      LP = Number(LP) + 10;
      $('#scenetext').html('You try to dive out of the way of the falling hammer, but quite not fast enough. The hammer, unfortinatly for you, lands right on your leg with a stomach sickening crunch. You cry out in pain, and try to get crawl away. The dwarven guard cried out in terror. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
      player.health = Number(player.health) - 75;
            updateStats();
              $('#question').html('Type Enter to go to Level Select');
          injuredLeg = true;
          End = true;
          var freindlyCapture = true;
    }
  }
}

function scene18Answer(answer){
  if (answer != 'WHU' && answer != 'THW' && answer != 'LH' && answer != 'Enter'){
     $('#message').html('Please select one of the options above');
    return;
  }else{
     $('#message').html('');
    if (answer == 'WHU'){
      scene19();
    }else if (answer == 'THW'){
      scene20();
    }else if (answer == 'LH'){
      scene21();
    }else if (End == true){
      if (answer == Enter){
        levelSelect();
      }
    }else{
      $('#message').html('That is' + not + ' an option');
    }
  }
}

//Wake him up!
function scene19(){
  currentScene = 19;
  nextToGuard = true;
  $('#scenetext').html('<br> "Sir, sir!" You kneel down beside the dwarf, and shake his sholders. If your fast enough, than you should be able to wake up this guard to talk some sence into the other guard. "Are you ok sir?!" you try more franticly, but it seems that he wont wake up. How far did you set that trap!?');
  $('#question').html('Check his pulse? y or n');
}

function scene19Answer(answer){
  if (answer != 'y' && answer != 'n'){
    $('#message').html('Please select one of the options above');
    return;
  }else{
    $('#message').html('');
    if (answer == 'y'){
      scene22();
      awards.caring = 'Found!';
    }else{
      scene21();
    }
  }
}

//Take him with you! duh!
function scene20(){
  currentScene = 20;
  if (nextToGuard == true){
    if (x <= player.speed || x <=player.speed){
      LP = Number(LP) +13;
      updateStats();
      $('#scenetext').html('You reach down to the dwarf, and swiftly throw the man over your sholder. He should know what was going on. Just as you finish, the other guard enters the living room, his eyes wide at what you are doing. <br> "Stop ' + player.name + '!" but you are out the door before he could stop you. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
      var escapeWithDwarf = true;
    }else{
       LP = Number(LP) + 10;
      updateStats();
      $('#scenetext').html('You try to grab the dwarf to throw him over your sholder, but he is surpisingly heavy. Before you can get a better angle on him, you hear a footstep behind you. Before you can react, you are swiftly thrown off the dwarf, farther away. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
      var freindlyCapture = true;
    }
  }else{
    LP = Number(LP) +13;
    updateStats();
    $('#scenetext').html('You run over to the dwarf, and swiftly throw the man over your sholder. He should know what was going on. Just as you finish, the other guard enters the living room, his eyes wide at what you are doing. <br> "Stop ' + player.name + '!" but you are out the door before he could stop you. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
  }
  $('#question').html('Type "Enter" to go to Level Select');
}

function scene21Answer(answer){
  levelSelect();
}

//NO!
function scene21(){
  currentScene = 21;
   LP = Number(LP) + 13;
  updateStats();
  if (nextToGuard == true){
  $('#scenetext').html('"This is a waste of time! He' + will +' be fine.... probably." <br> You stand up, and swiftly make towards your door just as the giant apears from the kitchen. Without another word, you sprint out the door and into freedom <br> <br> Your current LP (Level Points) count is ' + LP + '!');
    var freindlyChase =true;
  }else{
     LP = Number(LP) + 13;
    updateStats();
  $('#scenetext').html("This is a waist of time! He'll be fine.... probably. <br> You swiftly make you're way to the exit just as the giant apears from the kitchen. Without another word, you sprint out the door and into freedom <br> <br> Your current LP (Level Points) count is " + LP + "!");
  }
  $('#question').html('Type "Enter" to go to Level Select');
  var freindlyChase = true;
}

function scene21Answer(answer){
  levelSelect();
}

//Checking Pulse....
function scene22(){
  currentScene = 22;
  if (player.race == 'dragonhalf'){
    $('#scenetext').html('You quickly put your fingers into where one of his arteries on his neck are, and find a slow pulse. Almost as if he was sleeping. He is alive, but out cold');
  }else{
    $('#scenetext').html('You quickly put your fingers into where one of his arteries on his neck are, and find a slow pulse. He is alive, but out cold');
  }
  $('#question').html('What would you like to do? Take him with (THW), or leave him (LH)');
}

function scene22Answer(answer){
  if (answer != 'THW' && answer != 'LH'){
    $('#message').html('Please select one of the options above');
    return;
  }else{
    $('#message').html('');
    if (answer == 'THW'){
      scene20();
    }else if (answer == 'LH'){
      scene21();
    }
  }
}
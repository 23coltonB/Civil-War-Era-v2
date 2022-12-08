function scene11(){
  currentScene = 11;
  if (x <= player.strength){
    $('#scenetext').html('You effortlessly slide a dresser, and some of the chairs that were laying around, onto the door.');
    $('#question').html('What would you do now? arm yourself (ay), set a trap (trap), or hide.');
  }else{
    $('#scenetext').html('You try to push the closest dresser to the door, but you are only able to push the dresser an inch. Maybe you should try something else...');
    weak = true;
    $('#question').html('What would you do instead? Hide, investigate, or return to sleep (rts)');
  }
}

function scene11Answer(answer) {
  if (answer != 'hide' && answer != 'investigate' && answer != 'rts' && answer != 'ay' && answer && 'trap' && 'hide'){
    $('#message').html('Please enter one of the given options.');
    return;
  }
  if (weak == true){
    if (answer == 'hide'){
      scene8();
    }
    if (answer == 'rts'){
      scene9();
    }
    if (answer == 'investigate'){
      scene10();
    }
  }else{
    if (answer == 'hide'){
      scene12();
    }
    if (answer == 'trap'){
      scene13();
    }
    if (answer == 'ay'){
      scene14();
    }
  }
}

function scene12(){
  currentScene = 12;
  if (x <= player.wisdom){
    if (armed == true){
   if (player.race == 'dragonhalf'){
        $('#scenetext').html('You run into your kitchen with your ' + player.weapons + ". You've already picked the perfect spot to hide within. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet, making sure to tuck your tail into the closet with you as you move in.");
     }else{
       $('#scenetext').html('You run into your kitchen with your ' + player.weapons + ". You've already picked the perfect spot to hide within. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet with relative ease, and you wait.");
     }
    }else{
      if (player.race == 'dragonhalf'){
        $('#scenetext').html("You run into your kitchen with swift speed, for you've already picked the perfect spot to hide within. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet, making sure to tuck your tail into the closet with you as you move in.");
     }else{
       $('#scenetext').html("You run into your kitchen with swift speed, for you've already picked the perfect spot to hide within. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet with relative ease, and you wait.");
     }
    }
  }else{
    if (player.race == 'dragonhalf'){
      $('#scenetext').html('You run into your kitchen with your ' + player.weapons + ". You may not have an already picked spot, but you know that there better hiding places in the kitchen than in the barricaded room. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet, making sure to tuck your tail into the closet with you as you move in.");
      }else{
          $('#scenetext').html("You run into your kitchen with extream speed. You may not have an already picked spot, but you know that there better hiding places in the kitchen than in the barricaded room. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet, making sure to tuck your tail into the closet with you as you move in.");
      }
      if (armed == true){
            $('#scenetext').html('You run into your kitchen with your ' + player.weapons + ". You may not have an already picked spot, but you know that there better hiding places in the kitchen than in the barricaded room. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet, making sure to silently close the door when you are fully inside");
      }else{
          $('#scenetext').html("You run into your kitchen with extream speed. You may not have an already picked spot, but you know that there better hiding places in the kitchen than in the barricaded room. Inside the kitchen, your run into an empty closet that you've just cleared for this situation. You slip into the closet, making sure to silently close the door when you are fully inside");
      }
    }
  $('#question').html('Press enter to continue');
}

function scene12Answer(answer) {
  if (answer == ''){
    scene17();
  }
}

function scene13(){
  currentScene = 13;
  if (x <= player.wisdom){
     trapSet = true;
    $('#scenetext').html('You booby trap the barricade, by using the things scattered around your home.');
    if (armed == true){
       prepared = true;
      $('#question').html('Would you like to hide now? y or n');
    }else{
      $('#question').html('Now what will you do?! Arm Yourself (ay) or hide.');
    }
  }else{
    $('#scenetext').html('You attempt to set a trap on the barricade, but it instantly falls apart as soon as you have it set.');
    if (armed == true){
       prepared = true;
      $('#question').html('Would you like to hide now? y or n');
    }else{
      $('#question').html('Now what will you do?! Arm Yourself (ay) or hide.');
    }
  }
}

function scene13Answer(answer){
  if (answer != 'ay' && answer != 'hide' && answer != 'y' && answer != 'n' ){
     $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == 'ay'){
    scene14();
  }
  if (answer == 'hide'){
    scene12();
  }
  if (prepared == true){
    if (answer == 'y'){
      scene15();
    }
    if (answer == 'n'){
      scene16();
    }
  }else{
    $('#message').html('What? What are you saying? Pick one of the options above');
    return;
  }
}

function scene14(){
  currentScene = 14;
  $('#scenetext').html('You run from your barricade, and grab your ' + player.weapons +' and ' + player.twoWeapons + ' from your hiding place.');
   armed = true;
  if (trapSet == true){
    prepared = true;
    $('#question').html('Would you like to hide now? y or n');
  }else{
    $('#question').html('Now what will you do?! trap or hide.');
  }
}

function scene14Answer(answer){
  if (answer != 'hide' && answer != 'trap' && answer != 'y' && answer != 'n' ){
    $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == 'hide'){
    scene12();
  }
  if (answer == 'trap'){
    scene13();
  }
  if (prepared == true){
    if (answer == 'y'){
      scene15();
    }
    if (answer == 'n'){
      scene16();
    }
  }else{
    $('#message').html('What? What are you saying? Pick one of the options above');
    return;
  }
}

function scene15(){
  currentScene = 15;
 scene12();
}

function scene16(){
  currentScene = 16;
  var rts = true;
  LP = Number(LP) + 10;
  $('#scenetext').html('Thats not smart, but ok... <br> You sit down on the floor and wait till something happens. You get so bored in fact, that you return to your bed, and go back to sleep. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
  $('#question').html('Press Enter to go to Level Select');
}

function scene16Answer(answer){
  levelSelect();
}

function scene17(){
  currentScene = 17;
  if (trapSet == true){
    harm = true;
    guardCount = Number(guardCount) - 1;
    var harmedHidden = true;
    if (x <= player.stealth - 20){
      LP = Number(LP) + 10;
      $('#scenetext').html('You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you did' + not + ' set them up well. However, you can hear your trap snap into life, and someone screaming in responce. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft foot steps within the kitchen, and you pray that he does' + not + ' find you. <br> Luckly for you, he does' + not + '. You hear the man behind your door run out to assist his fallen comrade. <br> Or at least you think so. You don' + not + ' move out of your hiding spot until all is quite. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          $('#question').html('Type Enter to go to Level Select');
    }else{
      if (armed == true && x <= player.accuracyM || player.speed){
      $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. However, you can hear your trap snap into life, and someone screaming in responce. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft foot steps within the kitchen, and you pray that he doesn't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the guard in front of you. The gurad in front of you towers over you, as he glares at you with rage in his eyes. He wore the green uniforms you've seen around town, with a simple glistening helment. The guard, to your dismay, is baring a war hammer. To your shock, the guard strikes at you, but thanks to your swift thinking and lightning reflexes, you were able to block all the incoming strikes with your " + player.weapons + ' and ' + player.twoWeapons + '.');
      $('#question').html('What will you do now?! Get Away (GA), or convince');
      }else{
        if (x <= player.dodge || player.speed){
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. However, you can hear your trap snap into life, and someone screaming in responce. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft foot steps within the kitchen, and you pray that he doesn't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the guard in front of you. The gurad in front of you towers over you, as he glares at you with rage in his eyes. He wore the green uniforms you've seen around town, with a simple glistening helment. The guard, to your dismay, is baring a war hammer. To your shock, the guard strikes at you, but thanks to your swift thinking and lightning reflexes, you were able to dodge all the oncoming attacks. You can see the rage growing on the guards face as you dive out of your hideing place.");
          $('#question').html('What will you do now?! Get Away (GA), or convince');
        }
      }
    }
  }else{
    if (x <= player.stealth - 20){
      LP = Number(LP) + 10;
    $('#scenetext').html('You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you did' + not + ' set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are do' +not +'  find you. <br> Luckly for you, he does' + not +'. You hear the people behind your door run out and into the next room. <br> Or at least you think so. You do' + not +' move out of your hiding spot until all is quite <br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type Enter to go to Level Select');
    var harmedHidden = true;
    }else{
      if (armed == true && x <= player.accuracyM || x <= player.speed){
      $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are don't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the two guards in front of you. One of them is extreamly tall compaired to the shorter one. Each of them wore the same green uniforms you've seen around town, with glistening helments. The only splash of color you could see, was the red beard the dwarf wore. While they staired at you, you could tell that the tall one was baring a war hammer of some sorts, while the dwarf was bering a short sword. <br> Before the dwarf can speak, the taller guard strikes at you. Thanks to your quick thinking, you were able to parry the attack with your " + player.weapons + ' and your ' + player.twoWeapons +'.');
      $('#question').html('What will you do now?! Get Away (GA), or convince');
      }else{
        if (x <= player.dodge || player.speed){
          if (player.sex == 'female'){
        $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are don't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the two guards in front of you. One of them is extreamly tall compaired to the shorter one. Both of them wore the same green uniforms you've seen around town, with glistening helments. The only splash of color you could see, was the red beard the dwarf wore. While they staired at you, you could tell that the tall one was baring a war hammer of some sorts, while the dwarf was bering a short sword. <br> Before the dwarf can speak, the taller guard strikes at you. You being the swift young lass you are, are able to dodge all the blows from the guard. You can see the rage growing on the guards face as you dive out of your hideing place.");
        $('#question').html('What will you do now?! Get Away (GA), or convince');
          }else{
        $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are don't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the two guards in front of you. One of them is extreamly tall compaired to the shorter one. Each of them wore the same green uniforms you've seen around town, with glistening helments. The only splash of color you could see, was the red beard the dwarf wore. While they staired at you, you could tell that the tall one was baring a war hammer of some sorts, while the dwarf was bering a short sword. <br> Before the dwarf can speak, the taller guard strikes at you. You being the  swift young lad you are, are able to dodge all the blows from the guard. You throw yourself out of your hiding place,");
        $('#question').html('What will you do now?! Get Away (GA), or convince');
          }
        }else{
          LP = Number(LP) + 10;
          $('#scenetext').html("You press your ear gentally agenst your door, and you swiftly hear something loud coming from the other side. You can hear your defenses falling, after all, in your haste, you didn't set them up well. You hear the front door of the kitchen fly open and you hold your breath. You can hear the soft two sets of foot steps within the kitchen, and you pray that whoever they are don't find you. <br> Unfortunately for you, he does. The door in front of you flys open, revealing the two guards in front of you. One of them is extreamly tall compaired to the shorter one. Each of them wore the same green uniforms you've seen around town, with glistening helments. The only splash of color you could see, was the red beard the dwarf wore. While they staired at you, you could tell that the tall one was baring a war hammer of some sorts, while the dwarf was bering a short sword. <br> Before the dwarf can speak, the taller guard strikes at you. Unfortinatly for you, you aren't able to dodge the oncoming blows. His hammer hits you cleanly agenst the sholder, and you are thrown unto the ground in front of them <br> <br> Your current LP (Level Points) count is " + LP + "!");
              $('#question').html('Type Enter to go to Level Select');
          var freindlyCapture = true;
        }
      }
    }
  }
}

function scene17Answer(answer){
 if (answer != 'GA' && answer != 'convince' && answer != 'Enter'){
   $('#message').html('Please select one of the options above');
    return;
 }
 if (answer == 'GA'){
   scene18();
 }
 if (answer == 'convince'){
   scene19();
 }
 if (answer = 'Enter'){
   levelSelect();
 }
}

function scene18(){
  currentScene = 18;
    if (armed == true){
      if (guardCount == 2){
        if (x <= player.strength && x <= accuracyM){
          if (x <= player.dodge){
            LP = Number(LP) + 10;
            $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully block the attack with your ' + player.weapons + ' and ' + player.twoWeapons + '. You throw his war hammer off of you, and make it towards the door. You run past the dwarf, who also tried to stop you in your path. Just as you make it towards the door, you can hear one of the guards shouting to the other. <br> "Private what are you doing?!?" You run out the door, and into safety <br> <br> Your current LP (Level Points) count is ' + LP + '!');
                $('#question').html('Type Enter to go to Level Select');
            var freindlyChase = true;
          }else{
            $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully block the attack with your ' + player.weapons + ' and ' + player.twoWeapons + '. You throw his war hammer off of you, and make it towards the door. You trip over something, rolling out of the kitchen and into the next room. You turned around to see what you tripped over, and find the dwarf lying on the ground where you had tripped over.');
            $('#question').html('What will you do now?! Escape or convince');
          }
        }else{
          LP = Number(LP) + 10;
          $('#scenetext').html('You try to muscle your way out of your position underneath the war hammer, but you fail. You try to escape from his hammers grip it cleanly hits your sholder, and you tumble to the ground. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
              $('#question').html('Type Enter to go to Level Select');
          injured = true;
          var freindlyCapture = true;
        }
      }else{
        if (x <= player.strength && x <= accuracyM){
          $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way before he can crush you. You roll into the kitchen, periodicly dodging the guards hammer strikes. Under the weight of the hammer, the floor left depressions where the hammer missed you. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
          $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
        }else{
          LP = Number(LP) + 10;
        $('#scenetext').html('You try to muscle your way out of your position underneath the war hammer, but you fail. Before you can get away, the hammer falls on you, hurting your sholder, and throwing you to the ground. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
           $('#question').html('Type Enter to go to Level Select');
        injured = true;
        var freindlyCapture = true;
      }
      if (guardCount == 2){
        if (x <= player.dodge && x <= player.speed){
        if (x <= player.dodge && x <= player.speed){
          $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way before he can crush you. You roll into the kitchen, periodicly dodging the guards hammer strikes. Under the weight of the hammer, the floor left depressions where the hammer missed you. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
          $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
        }else{
          $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way. You roll into standing, and begin to sprint towards the door. You trip over something, rolling out of the kitchen and into the next room. You turned around to see what you tripped over, and find the dwarf lying on the ground where you had tripped over. Perhaps he knows whats going on?');
            $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
        }
        }else{
          LP = Number(LP) + 10;
          $('#scenetext').html('You try to dive out of the way of the falling hammer, but quite not fast enough. The hammer, unfortinatly for you, lands right on your leg with a stomach sickening crunch. You cry out in pain, and try to get away. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
            $('#question').html('Type Enter to go to Level Select');
        injuredLeg = true;
        var freindlyCapture = true;
        }
      }else{
        if (x <= player.dodge && x <= player.speed){
          $('#scenetext').html('The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way before he can crush you. You roll into the kitchen, periodicly dodging the guards hammer strikes. Under the weight of the hammer, the floor left depressions where the hammer missed you. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
          $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
        }else{
          LP = Number(LP) + 10;
          $('#scenetext').html('You try to dive out of the way of the falling hammer, but quite not fast enough. The hammer, unfortinatly for you, lands right on your leg with a stomach sickening crunch. You cry out in pain, and try to get away. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
              $('#question').html('Type Enter to go to Level Select');
          var freindlyCapture = true;
          injuredLeg = true;
        }
      }
    }
  }
}

function scene18Answer(answer){
  if (answer != 'WHU' && answer != 'THW' && answer != 'LH' && answer != 'Enter'){
    $('#message').html('Please select one of the options above');
    return;
  }
  if (answer == 'WHU'){
    scene20();
  }
  if (answer == 'THW'){
    scene21();
  }
  if (answer =='LH'){
    scene22();
  }
  if (answer == 'Enter'){
    levelSelect();
  }
}

function scene19(){
  currentScene = 19;
  if (guardCount == 2){
    if (x <= player.charisma && x <= charisma && x <= player.dodge){
      LP = Number(LP) + 15;
      $('#scenetext').html('"Whoa chill!" You shout holding your hands out. "What do you want?!" This makes the tall hammer-weilder pause, but unexpectedly, it was long enough for the dwaft to disarm him of his weapon. "For all the Plains, Private! We talked about this!" <br> <br> Your current LP (Level Points) count is ' + LP + '!');
           $('#question').html('Type Enter to go to Level Select');
      var closetCommunication = true;
    }else{
      LP = Number(LP) + 10;
      $('#scenetext').html('Before you can even try to convince the guard, he brings his hammer on you, knocking you down out of your hiding place, and into the kitchen. Your sholder aches, as you slowly pass out. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
            $('#question').html('Type Enter to go to Level Select');
      var freindlyCapture = true;
    }
  }else{
       if (x <= player.charisma && x <= player.dodge){
      $('#scenetext').html('"Whoa chill!" You shout holding your hands out. "What do you want?!" This makes the tall hammer-weilder pause, but instead of listening to what you have to say, he prepares to strike at you again. You dive out of the way, hearing the hammer crash behind you. The giant guard attempts to crush you once again with his war hammer, but you are able to succsesfully dive out of the way before he can crush you. You roll into the kitchen, periodicly dodging the guards hammer strikes. Under the weight of the hammer, the floor left depressions where the hammer missed you. You sprint past tall guard when he attempts to strike you, and into the next room. On the ground, there was a short man who wore the same outfit of the man who attacked you. Perhaps he knows whats happening? ');
        $('#question').html('Would you like to do? Wake him up (WHU), take him with (THW), or leave him (LH)');
      
    }else{
      LP = Number(LP) + 10;
      $('#scenetext').html('Before you can even try to convince the guard, he brings his hammer on you, knocking you down out of your hiding place, and into the kitchen. Your sholder aches, as you slowly pass out. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          $('#question').html('Type Enter to go to Level Select');
      var freindlyCapture = true;
    }
  }
}

function scene19Answer(answer){
  if (answer != 'WHU' && answer != 'THW' && answer != 'LH' && answer != 'Enter'){
    $('#message').html('Please select one of the options above');
    return;
  }
  if (answer == 'WHU'){
    scene20();
  }
  if (answer == 'THW'){
    scene21();
  }
  if (answer =='LH'){
    scene22();
  }
  if (answer == 'Enter'){
    levelSelect();
  }
}``

function scene20(){
  currentScene = 20;
  $('#scenetext').html('<br> "Sir, sir!" You kneel down beside the dwarf, and shake his sholders. If your fast enough, than you should be able to wake up this guard to talk some sence into the other guard. "Are you ok sir?!" you try more franticly, but it seems that he wont wake up. How far did you set that trap!?');
  $('#question').html('Check his pulse? y or n');
}

function scene20Answer(answer){
  if (answer != 'y' && answer != 'n'){
    $('#message').html('Please select one of the options above');
    return;
  }
  if (answer == 'y'){
    scene23();
  }
  if (answer == 'n'){
    scene24();
  }
}

function scene21(){
  currentScene = 21;
  if (nextToGuard == true){
    if (x <= player.speed || x <= player.speed){
      LP = Number(LP) +13;
        $('#scenetext').html('You reach down to the dwarf, and swiftly throw the man over your sholder. He should know what was going on. Just as you finish, the other guard enters the living room, his eyes wide at what you are doing. <br> "Stop ' + player.name + '!" but you are out the door before he could stop you. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
        $('#question').html('Press Enter to go to Level Select');
        var escapeWithDwarf = true;
    }else{
      LP = Number(LP) + 10;
      $('#scenetext').html('You try to grab the dwarf to throw him over your sholder, but he is surpisingly heavy. Before you can get a better angle on him, you hear a footstep behind you. Before you can react, you are swiftly thrown off the dwarf, farther away. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
   $('#question').html('Press Enter to go to Level Select');
      var freindlyCapture = true;
    }
  }else{
    LP = Number(LP) +13;
    $('#scenetext').html('You run over to the dwarf, and swiftly throw the man over your sholder. He should know what was going on. Just as you finish, the other guard enters the living room, his eyes wide at what you are doing. <br> "Stop ' + player.name + '!" but you are out the door before he could stop you. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
   $('#question').html('Press Enter to go to Level Select');
  }
}

function scene21Answer(answer){
  if (answer == ''){
    levelSelect();
  }
}

function scene22(){
  currentScene = 22;
  LP = Number(LP) + 10;
  if (nextToGuard == true){
  $('#scenetext').html('"This is a waste of time! He' + will +' be fine.... probably." <br> You stand up, and swiftly make towards your door just as the giant apears from the kitchen. Without another word, you sprint out the door and into freedom <br> <br> Your current LP (Level Points) count is ' + LP + '!');
  }else{
  $('#scenetext').html("This is a waist of time! He'll be fine.... probably. <br> You swiftly make you're way to the exit just as the giant apears from the kitchen. Without another word, you sprint out the door and into freedom <br> <br> Your current LP (Level Points) count is " + LP + "!");
  }
   $('#question').html('Press Enter to go to Level Select');
  var freindlyChase = true;
}

function scene22Answer(answer){
  if (answer == ''){
    levelSelect();
  }
}

function scene23(){
  currentScene = 23;
  nextToGuard = true;
  if (player.race == 'dragonhalf'){
  $('#scenetext').html('You quickly put your fingers into where one of his arteries on his neck are, and find a slow pulse. Almost as if he was sleeping. He is alive, but out cold');
  }else{
    $('#scenetext').html('You quickly put your fingers into where one of his arteries on his neck are, and find a slow pulse. He is alive, but out cold');
  }
  $('#question').html('What would you like to do? Take him with (THW), or leave him (LH)');
}

function scene23Answer(answer){
  if (answer != 'THW' && answer != 'LH'){
    $('#message').html('Please select one of the options above');
    return;
  }
  if (answer == 'THW'){
    scene21();
  }
  if (answer =='LH'){
    scene22();
  }
}

function scene24(){
  currentScene = 24;
  nextToGuard = true;
  $('#question').html('What would you like to do instead? Take him with (THW), or leave him (LH)');
}

function scene24Answer(answer){
  if (answer != 'THW' && answer != 'LH'){
    $('#message').html('Please select one of the options above');
    return;
  }
  if (answer == 'THW'){
    scene21();
  }
  if (answer =='LH'){
    scene22();
  }
}
//This code needs to start on 48-69.
function scene8(){
currentScene = 8;
if (x <= player.stealth){
  hidden = true;
  if (x <= player.perseption){
    if (player.sex == 'male'){
    $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" From the style of their boots, and the formiliarity of the mans voice, they seem to be the guards that were posted around one of the markets you often go to. "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps he is not home. We should come back later." The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lad you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.');
    $('#question').html('What would you like to do? Stay hidden (SH), or confront');
    }else{
      $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" From the style of their boots, and the formiliarity of the mans voice, they seem to be the guards that were posted around one of the markets you often go to. "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps she is not home. We should come back later."The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lass you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.');
    $('#question').html('What would you like to do? Stay hidden (SH), or confront');
    }
  }else{
    if (player.sex == 'male'){
    $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps he is not home. We should come back later." The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lad you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.');
    $('#question').html('What would you like to do? Stay hidden (SH), or confront');
    }else{
      $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps she is not home. We should come back later."The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lass you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.');
    $('#question').html('What would you like to do? Stay hidden (SH), or confront');
    }
  }  
}else{
$('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" From the style of their boots, and the formiliarity of the mans voice, they seem to be the guards that were posted around one of the markets you often go to. "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps he is not home. We should come back later." The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the drowsy, dull-witted person you are in the morning, called out, <br> "I am under the bed hold on!" The guards next to you freeze, and just then you realize your horid mistake, you slap your head. You reluctantly roll out from underneath the bed and reveiled yourself');
$('#question').html('Now what?! FIGHT or convince.');
  }
}

function scene8Answer(answer){
  if (answer != 'FIGHT' && answer != 'convince' && answer != 'SH' && answer != 'confront'){
    $('#message').html('Please enter one of the given options.');
    return;
  }else{
    $('#message').html('');
    if (answer == 'FIGHT'){
      if (hidden == true){
        $('#message').html('You are not in the position to do that.');
      return;
      }else{
        scene48();
      }
    }
    if (answer == 'convince'){
      if (hidden == true){
        $('#message').html('You are not in the position to do that.');
        return;
      }else{
        scene49();
      }
    }
    if (answer == 'SH'){
      if (hidden == false){
        $('#message').html('You are not in the position to do that.');
        return;
      }else{
        scene50();
      }
    }
    if (answer == 'confront'){
      if (hidden == false){
        $('#message').html('You are not in the position to do that.');
        return;
      }else{
        scene51();
      }
    }
  }
}

function scene48(){
  currentScene = 48;
$('#scenetext').html('Are you sure? Your unarmed, and fighting agenst two highly trained Guards of the Dutches Queen herself. Your odds of surviving are EXTREAMLY low.');
$('#question').html('Are you sure? y or n');
}

function scene48Answer(answer){
  if (answer != 'y' && answer != 'n'){
    $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == 'y'){
    scene52();
  }
  if (answer == 'n'){
    scene49();
  }
  $('#message').html('');
}

function scene49(){
  currentScene = 49;
  LP = Number(LP) + 15;
  if (player.race == 'dragonhalf' || 'dwarf'){
  $('#scenetext').html('"What are you doing in my appartment?!" you say rather annoyed. Although this is not the first time someone or something intrueded into your space. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
  }else{
    $('#scenetext').html('"What are you doing in my appartment?!" you say rather annoyed. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
  }
    $('#question').html('Type Enter to go to Level Select');
  var communication = true;
}

function scene49Answer(answer){
  if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene50(){
  currentScene = 50;
  LP = Number(LP) + 10;
  $('#scenetext').html('Tired, you lazyily lay under your bed. And by mystake, you have sucsessfully fallen asleep underneath it. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type Enter to go to Level Select');
  var sleepUnderBed = true;
}

function scene50Answer(answer){
    if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene51(){
  currentScene = 51;
    $('#scenetext').html('You expertly and silently roll out from underneath your bed, and go towards the kitchen where the guards disapeard off to.');
    if (player.x <= player.wisdom){
    smart = true;
    $('#question').html('What would you like to do? Wait, Surpise attack (SA) or enter the kichen (ETK)');
  }else{
    $('#question').html('What would you like to do? Surpise attack (SA) or enter the kichen (ETK)');
  }
}

function scene51Answer(answer){
  if (answer != 'SA' && answer != 'ETK' && answer != 'wait'){
    $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == 'SA'){
    scene54();
  }
  if (answer == 'ETK'){
    scene55();
  }
  if (answer == 'wait'){
    scene56();
  }
  $('#message').html('');
}

function scene52(){
  currentScene = 52;
  $('#question').html('Are you SURE your sure? y or n');
}

function scene52Answer(answer){
    if (answer != 'y' && answer != 'n'){
    $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == 'y'){
    scene53();
  }
  if (answer == 'n'){
    scene49();
  }
  $('#message').html('');
}

function scene53(){
  currentScene = 53;
  if (player.sex = 'male'){
  $('#scenetext').html('Ugh! FINE! If you insist! You sprint at them, full speed, screaming, startling the guards. The guards jump at your sudden hostelness, and as you run at the guards full speed, without warning, however, the tallest one of them strikes you down, dead, on the ground. <br> "Why in all the Plains priviate!" Shouted the shorter guard to the taller guard. "We needed him alive!" The tall one just shrugged, and turned away, with the dwarf fumeing as he followed him outside. <br> <br> GAME OVER! <br> Game tip: If you ever fight anything without weapons, IRL or not, your odds of surviving are zero. Period.');
  }else{
  $('#scenetext').html('Ugh! FINE! If you insist! You sprint at them, full speed, screaming, startling the guards. The guards jump at your sudden hostelness, and as you run at the guards full speed, without warning, however, the tallest one of them strikes you down, dead, on the ground. <br> "Why in all the Plains priviate!" Shouted the shorter guard to the taller guard. "We needed her alive!" The tall one just shrugged, and turned away, with the dwarf fumeing as he followed him outside. <br> <br> GAME OVER! <br> Game tip: If you ever fight anything without weapons, IRL or not, your odds of surviving are zero. Period.');
  }
  $('#question').html('To restart the game, type "quitgame"');
}

function scene54(){
  currentScene = 54;
  LP =Number(LP) + 10;
  if (x <= player.stealth){
    $('#scenetext').html('You sneak towards where the guards had disapeared off to. As you reach the door, open the door slowly. This room was your kitchen that, to your shock, has not been cleaned in a while. And to your shock, you could not see the guards. Whithout warning, the door of solid oak flys forward, smaking you inbetween the door and the wall. Stars fill your vision, and before you could pass out, you cry out for help.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
  }else{
    $('#scenetext').html('"SNEAK ATTACK!" you cry out as you charge to the door where the guards had disapeared. Unsurprisingly however, the door of solid oak flies into your face, effectively slamming you hard between the door and the wall. Stars fill your vision, and before you could pass out, you cry out for help. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
  }
  var freindlyKnockout = true;
    $('#question').html('Type Enter to go to Level Select');
}

function scene54Answer(answer){
    if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene55(){
  currentScene = 55;
  if (x + 10 <= player.dodge){
  $('#scenetext').html('You walk towards the kitchen door, and slowly open it. Just as you do so, you see the tall guard stairing you back down. You yelp, hop back behind the door, and slam the door in his face. <br>"Sorry!" you shout through the door, "Perhaps we can-" before you can finish, the door flys open, and you, thankfully, jump out of the way of the door. The tall guard now advaces towards you. ');
  $('#question').html('What will you do? Evade and convince (EAC), subdue, or hold him down (HHD)');
  }else{
    if (x <= player.accuracyM){
       $('#scenetext').html('You walk towards the kitchen door, and slowly open it. Just as you do so, you see the tall guard stairing you back down. You yelp, hop back behind the door, and slam the door in his face. <br> "Sorry!" you shout through the door, "Perhaps we can-" before you can finish, the door flys open, and slams into your face, knocking you back on the floor. The giant guard towers above you. A gleaming war hammer hanges from his back. He attempts to strike at you with his fists. You parry it, and trip him, throwing him to the ground.');
      $('#question').html('What will you do? Evade and convince (EAC), subdue, or hold him down (HHD)');
      onTheFloor = true;
    }else{
      LP = Number(LP) + 10;
      $('#scenetext').html('You walk towards the kitchen door, and slowly open it. Just as you do so, you see the tall guard stairing you back down. You yelp, hop back behind the door, and slam the door in his face. <br> "Sorry!" you shout through the door, "Perhaps we can-" before you can finish, the door flys open, and slams into your face, knocking you back on the floor. The giant guard towers above you. A gleaming war hammer hanges from his back. He attempts to strike at you with his fists. You fail to block the punch, and he punches you square on the kisser, effectively knocking you out.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      var freindlyKnockout = true;
      var bloodyLips = true;
    $('#question').html('Type Enter to go to Level Select');
    }
  }
}

function scene55Answer(answer){
   if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene55Answer(answer){
  if (answer != 'EAC' && answer != 'subdue' && answer != 'HHD'){
  $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == 'EAC'){
    scene57();
  }
  if (answer == 'subude'){
    scene58();
  }
  if (answer == 'HHD'){
    scene59();
  }
  $('#message').html('');
}

function scene56(){
  currentScene = 56;
  if (player.sex == 'female'){
    $('#scenetext').html('You, being the smart young lad you are, deside to wait on your bed till the guards return from the other room. After all, going in after them unarmed would be such a stupid desition. Thankfully, the guards return in a short time, entering one at a time. The first one, seemed to just barely miss the head of the door frame as he enter, while the second one was about half the first ones height. The short one seemed to have a beard that almost reached his waist. They both were wearing the same dark leather outfits that seem to mirror that of the night, while in contrast, their silver-colored helments reflected the moonlight into your room. <br> At first, they did not noticed you until you called out to them. <br> "Ummm, excuse me, but what are you doing in my home?" Just as you finish saying that the tall one jump at the sight of you, barely missing the roof of your appartment. With a big thud The tall man fell to the ground landing on the ground with a large crash. The short guard finally noticed you too, and with great strength, helped his fallen compatriot up. You suppress a laugh');
  }else{
    $('#scenetext').html('You, being the smart young lad you are, deside to wait on your bed till the guards return from the other room. After all, going in after them unarmed would be such a stupid desition. Thankfully, the guards return in a short time, entering one at a time. The first one, seemed to just barely miss the head of the door frame as he enter, while the second one was about half the first ones height. The short one seemed to have a beard that almost reached his waist. They both were wearing the same dark leather outfits that seem to mirror that of the night, while in contrast, their silver-colored helments reflected the moonlight into your room. <br> At first, they did not noticed you until you called out to them. <br> "Ummm, excuse me, but what are you doing in my home?" Just as you finish saying that the tall one jump at the sight of you, barely missing the roof of your appartment. With a big thud The tall man fell to the ground landing on the ground with a large crash. The short guard finally noticed you too, and with great strength, helped his fallen compatriot up. You suppress a laugh');
  }
}

function scene57(){
  currentScene = 57;
  if (x <= player.dodge){
    if (x <= player.charisma){
      LP = Number(LP) + 15;
      if (onTheFloor == true){
        if (player.sex == 'male'){
      $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are able to dodge all of them, but occationally, one or two of them graze you. <br> "Hey man calm down!" You say redurecting one of his puches, throwing him to the ground. "I do not want to hurt you. Just tell me what you need." Rage fills the eyes of tall man on the ground as he tries to get back up. Just as the guard get up, a voice behind you shouts. <br> "Private, thats enough!" The voice was rough like sandpaper, but loud enough to startle you. How did you forget about the second guard? Instinctivly, you throw your back against the nearest wall, so you can face both of the guards. The one who spoke, turned gingerly towards you holding his hands up in surrender. "So sorry ' + player.name + ', sir about your misshap dimwitted Squadmate, but I need you to come with us. The Dragon Dutches is requeseting an audiance with you."<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
        }else{
           $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are able to dodge all of them, but occationally, one or two of them graze you. <br> "Hey man calm down!" You say redurecting one of his puches, throwing him to the ground. "I do not want to hurt you. Just tell me what you need." Rage fills the eyes of tall man on the ground as he tries to get back up. Just as the guard get up, a voice behind you shouts. <br> "Private, thats enough!" The voice was rough like sandpaper, but loud enough to startle you. How did you forget about the second guard? Instinctivly, you throw your back against the nearest wall, so you can face both of the guards. The one who spoke, turned gingerly towards you holding his hands up in surrender. "So sorry ' + player.name + ', miss about your misshap with my dimwitted Squadmate, but I need you to come with us. The Dragon Dutches is requeseting an audiance with you."<br> <br> Your current LP (Level Points) count is ' + LP + '!');
        }
      }else{
        if (player.sex == 'male'){
            $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are able to dodge all of them, but occationally, one or two of them graze you. <br> "Hey man calm down!" You say redurecting one of his puches, throwing him to the ground. "I do not want to hurt you. Just tell me what you need." Rage fills the eyes of tall man on the ground as he tries to get back up. Just as the guard get up, a voice behind you shouts. <br> "Private, thats enough!" The voice was rough like sandpaper, but loud enough to startle you. How did you forget about the second guard? Instinctivly, you throw your back against the nearest wall, so you can face both of the guards. The one who spoke, turned gingerly towards you holding his hands up in surrender. "So sorry ' + player.name + ', sir about your misshap dimwitted Squadmate, but I need you to come with us. The Dragon Dutches is requeseting an audiance with you."<br> <br> Your current LP (Level Points) count is ' + LP + '!');
        }else{
           $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are able to dodge all of them, but occationally, one or two of them graze you. <br> "Hey man calm down!" You say redurecting one of his puches, throwing him to the ground. "I do not want to hurt you. Just tell me what you need." Rage fills the eyes of tall man on the ground as he tries to get back up. Just as the guard get up, a voice behind you shouts. <br> "Private, thats enough!" The voice was rough like sandpaper, but loud enough to startle you. How did you forget about the second guard? Instinctivly, you throw your back against the nearest wall, so you can face both of the guards. The one who spoke, turned gingerly towards you holding his hands up in surrender. "So sorry ' + player.name + ', miss about your misshap with my dimwitted Squadmate, but I need you to come with us. The Dragon Dutches is requeseting an audiance with you."<br> <br> Your current LP (Level Points) count is ' + LP + '!');
        }
      }
    $('#question').html('Type Enter to go to Level Select');
      var communication = true;
    }else{
      if (x <= player.perception){
        if (onTheFloor == true){
         $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You attempt to block the punch from the guard, but one misses your blocking, and hits you in the face, knocking you back. The guard stands up, and you recover from your hit. Something is dripping from your nostril. You did not bother to check, for you lock eyes with the guard, preparing to attack. Out of the corner of your eye, you notice something at the door of your kitchen. What is that?');
         $('#question').html('Would you like to look at it?');
         figure = true;
        }else{
          LP= Number(LP) + 10;
          $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are unable to dodge all of them, and he knocks you out clean on the ground. Your vision slowly fades to black <br> <br> Your current LP (Level Points) count is ' + LP + '!');
          var freindlyKnockout = true;
    $('#question').html('Type Enter to go to Level Select');
        }
      }else{
        LP = Number(LP) + 10;
        $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are unable to dodge all of them, and he knocks you out clean on the ground. Your vision slowly fades to black<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type Enter to go to Level Select');
          var freindlyKnockout = true;
      }
    }
  }else{
    LP = Number(LP) + 10;
    $('#scenetext').html('Before you can get up, you are swiftly overcome by the guard you hit earlyer.Rage fills his eyes as raised his fists to strike you, and begins to pumble you.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type Enter to go to Level Select');
    var pumble = true;
    var freindlyKnockout = true;
  }
}

function scene57Answer(answer){
  if (answer != 'y' && answer != 'n'&& answer != 'Enter'){
  $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == 'y'){
    scene60();
  }
  if (answer =='n'){
    scene61();
  }
  if (answer == 'Enter'){
      if (answer == 'Enter'){
    levelSelect();
    }
  }
  $('#message').html('');
}

function scene58(){
  currentScene = 58;
  LP = Number(LP) + 10;
  if (x <= player.accuracyM){
  $('#scenetext').html('You rush over to the guard, and tackle him to the ground. You both great the floor, and fortunately, you get on top of your opponint. You punch the guard until he passes out. You should have enough time to get ou- <br> Before you can finish your thought prossess, something smacks you in the back of the head. The force of the blow knocks you onto the floor, making you face plant into the hard wood. You are unable to figure out who hit you before you pass out.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
  }else{
    $('#scenetext').html('You rush over to the guard, and tackle him to the ground. You both great the floor. Unfortunately, your opponint lands on top of  you. He proceeds to punch you until stars fills your eyes, and you slowly fade into black.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    var bloody = true;
  }
    $('#question').html('Type Enter to go to Level Select');
  var freindlyKnockout = true;
}

function scene58Answer(answer){
    if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene59(){
  currentScene = 59;
  if (x <= player.accuracyM && x <= player.strenghth){
  $('#scenetext').html('You rush over to the guard, and tackle him to the ground. You both great the floor, and fortunately, you get on top of your opponint. You hold him down sucsessfully, however, he still struggles beneith your grip.');
  $('#question').html('Now that you have him under relative control, what would you like to do? Knockout, convince, or interrogate');
  }else{
    LP = Number(LP) + 10;
    $('#scenetext').html('You rush over to the guard, and tackle him to the ground. You both great the floor. Unfortunately, your opponint lands on top of  you. He proceeds to punch you until stars fills your eyes, and you slowly fade into black.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    var bloody = true;
    var freindlyKnockout = true;
    $('#question').html('Type Enter to go to Level Select');
  }
}

function scene59Answer(answer){
  if (answer != 'Knockout' && answer != 'convince' && answer != 'interrogate' && answer != 'Enter'){
  $('#message').html('Please enter one of the given options.')
    return;
  }
  if (answer == 'Knockout'){
    scene63();
  }
  if (answer == 'convince'){
    scene64();
  }
  if (answer == 'interrogate'){
    scene65();
  }
  if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene60(){
  currentScene = 60;
   $('#scenetext').html('You glance swiftly towards the shape, and notice its a dwarf. He is wearing the same green tunic-outfit-thingy as the man in front of you, with the only acseption being his red breard haning from his chin, cascading towards his shins.');
   dwarfSeen = true;
   $('#question').html('press enter to continue');
}

function scene60Answer(answer){
  if (answer == ''){
    scene62();
  }
}

function scene61(){
  currentScene = 61;
   $('#scenetext').html('You ignore the shape, and it quickly slips out of your vision. Perhaps it was a figment of your imagination.');
   $('#question').html('press enter to continue');
}

function scene61Answer(answer){
  if (answer == ''){
    scene62();
  }
}

function scene62(){
  currentScene = 62;
  if (dwarfSeen == true){
    LP = Number(LP) + 15
    $('#scenetext').html('You maintan your staring contest with the towering giant, until, to your surpise, you hear someone behind you. <br> "Private! Thats enough!" The guard in front of you glances behind you, and reluctantly drops his guard. You, realising what was happening, follow his suit. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type Enter to go to Level Select');
    var communication = true;
  }else{
    LP = Number(LP) + 10;
    $('#scenetext').html('You maintan your staring contest with the towering giant, until, to your surpise, you hear someone behind you. <br> "Private! Thats enough!" You jump in surpise, giving the guard in front of you enough time to dive at you, and throws you into the wall, effectively knocking you out cold.<br> <br> Your current LP (Level Point) count is ' + LP + '!');
    var freindlyKnockout = true;
    $('#question').html('Type Enter to go to Level Select');
  }
}

function scene62Answer(answer){
    if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene63(){
  currentScene = 63;
  LP = Number(LP) + 10;
  $('#scenetext').html('You rase your fist, about to give the guard the final blow, but before you can throw the punch, something smacks you in the back of your head, throwing you off the guard. Your head achs as you try to get up. As you do so, you are swiftly knocked back down by your unseen assalent, and stars begain to fill your vision. You try to force yourself out of your potential passing out, but to no avail. Your vision turns to black. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
  var freindlyKnockout = true;
    $('#question').html('Type Enter to go to Level Select');
}

function scene63Answer(answer){
    if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene64(){
  currentScene = 64;
  if (x <= player.charisma){
    if (player.race == 'dragonhalf'){
    $('#scenetext').html('"Look man, I do' + not + ' want to hurt you. I am not your enemy." You say with relative calmness. "Just tell me why you are -" Before you can finish, the guard beneath you spits on your face. With discust, you wipe it off you. <br> "You overgrown lizard! When I get my hands on you-" The guard beneath you trys to throw you off, but you are able to stay on.');
    racist = true;
    $('#question').html('What would you like to do? Knockout, Run, or punish.');
    }else{
      if (player.race == 'dwarf'){
        $('#scenetext').html('"Look man, I do' + not + ' want to hurt you. I am not your enemy." You say with relative calmness. "Just tell me why you are here" The guard beneath you stays silent, looking away from your gaze. The rage that usually fills his eyes, left. He does' + not + ' seem to want to respond');
        $('#question').html('What would you like to do? Knockout, Run, or ask again (AA)');
      }else{
        if (player.race == 'elf'){
          $('#scenetext').html('"Look man, I do' + not + ' want to hurt you. I am not your enemy." You say with relative calmness. "Just tell me why you are -" Before you can finish, the guard beneath you spits on your face. With discust, you wipe it off you. <br> "You knifed-eared freak! When I get my hands on you-" The guard beneath you trys to throw you off, but you are able to stay on.');
          racist = true;
          $('#question').html('What would you like to do? Knockout, Run, or punish.');
        }else{
          $('#scenetext').html('"Look man, I do' + not + ' want to hurt you. I am not your enemy." You say with relative calmness. "Just tell me why you are here" The guard beneath you stays silent, looking away from your gaze. The rage that usually fills his eyes, left. He does' + not + ' seem to want to respond. This could be an oppertunitiy for you to excape.');
          $('#question').html('What would you like to do? Knockout, or Run.');
        }
      }
    }
  }else{
    LP = Number(LP) + 10;
      if (player.character == 'FDC'){
    $('#scenetext').html('"Look man I... do' + not + ' want to hurt you..." You say with unconfidence. "Just tell me why are you here." The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough." Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    }else{
      if (player.race == 'dragonhalf'){
    $('#scenetext').html('"Look man I... do' + not + ' want to hurt you..." You say with little confidence. "Just tell me why are you here." The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough."  Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      }else{
        $('#scenetext').html('"Look man I... do' + not + ' want to hurt you..." You say with little confidence. "Just tell me why are you here." The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough." Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      }
    }
    var freindlyKnockout = true;
        $('#question').html('Type Enter to go to Level Select');
  }
}

function scene64Answer(answer){
  if (answer != 'AA' && answer != 'Run' &&  answer != 'Knockout' && answer != 'punish' && answer != 'Enter'){
    $('#message').html('Please enter one of the given options.');
    return;
  }
  if (answer == 'knockout'){
    scene63();
  }
  if (answer == 'AA'){
    if (player.race == 'dwarf'){
      scene66();
    }else{
      $('#message').html('Please enter one of the given options.');
      return;
    }
  }
  if (answer == 'punish'){
    if (player.race == 'dragonhalf' && player.race == 'elf'){
      scene67();
    }else{
      $('#message').html('Please enter one of the given options.');
      return;
    }
  }
  if (answer == 'Run'){
    scene68();
  }
  if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene65(){
  currentScene = 65;
  LP = Number(LP) + 10;
  if (x <= player.charisma){
  if (player.character == 'FDC'){
  $('#scenetext').html('"Who are you!?!" You shout into the guards face. "And who sent you?!" for a little while, the guard stairs at you, with rage in his eyes. "If you do not answer me, I will ensure that you will not see the light of day." Suddenly the man broke, his eyes lost their iconic flare of anger, and was swiftly changed into a look of shear terror. Your going to have to repent for this, for the Lord will not like this. Without warning, he cried out. <br> "Alright alright!" he cries out in terror. "My companion and I were sent here to-" Before the guard can get the words out of his mouth, something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
  pray = true;
  var freindlyKnockout = true;
  }else{
    if (player.race == 'dragonhalf'){
  $('#scenetext').html('"Who are you!?!" You shout into the guards face. "And who sent you?!" for a little while, the guard stairs at you, with rage in his eyes. "If you do not answer me, I will ensure that you will not see the light of day." Suddenly the man broke, his eyes lost their iconic flare of anger, and was swiftly changed into a look of shear terror. You have' + not + ' lost your touch. Without warning, he cried out. <br> "Alright alright!" he cries out in terror. "My companion and I were sent here to-" Before the guard can get the words out of his mouth, something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
  var freindlyKnockout = true;
    }else{
      $('#scenetext').html('"Who are you!?!" You shout into the guards face. "And who sent you?!" for a little while, the guard stairs at you, with rage in his eyes. "If you do not answer me, I will ensure that you will not see the light of day." Suddenly the man broke, his eyes lost their iconic flare of anger, and was swiftly changed into a look of shear terror. Wow... your surpisingly good at this... Without warning, he cried out. <br> "Alright alright!" he cries out in terror. "My companion and I were sent here to-" Before the guard can get the words out of his mouth, something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      var freindlyKnockout = true;
    }
  }
  }else{
    if (player.character == 'FDC'){
  $('#scenetext').html('"Who are you!?!" You shout with a surpisingly weak voice. "Why are you here?!?" The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough." Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
  }else{
    if (player.race == 'dragonhalf'){
  $('#scenetext').html('"Who are you!?!" You shout with a surpisingly weak voice. "Why are you here?!?" The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough."  Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    }else{
      $('#scenetext').html('"Who are you!?!" You shout with a surpisingly weak voice. "Why are you here?!?" The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough." Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
    }
      var freindlyKnockout = true;
    }
  }
    $('#question').html('Type Enter to go to Level Select');
}

function scene65Answer(answer){
    if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene66(){
  currentScene = 66;
  LP = Number(LP) + 10;
      $('#scenetext').html('"Hey man," you say calmly, but you can feel your irration slowly growing. "Just tell me who sent you, and I can let you go on your way. Jus-" Just before you can finish your sentince, something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
      var freindlyKnockout = true;
    $('#question').html('Type Enter to go to Level Select');
}

function scene66Answer(answer){
    if (answer == 'Enter'){
    levelSelect();
  }
  $('#message').html('');
}

function scene67(){
  currentScene = 67;
  if (player.race == 'dragonhalf'){
    if (player.sex = 'female'){
      $('#scenetext').html('You wipe the spit off your your scaly face, and rub it into the guards uniform. You sigh, as the mans face begins to pail. After all, this wasn' + not + ' your first rodeo. <br> "You know," you say with slight irration in your voice. "I' + have + ' done so many things to get my people where we are today, but to my dismay, it appears that scummy people like you still exist here. My people have suffered long and hard because of ignorent people like you!" You slap the guard in a fit of rage, leaving somewhat deep cuts in his face. The guard cried out, but you feel no remorse for this person. You could do more, to punish him, but someone might be coming soon to investigate.');
    }else{
     $('#scenetext').html('You wipe the spit off your your scaly face, and rub it into the guards uniform. <br>   "Now, where I come from, normally, if a person were to so much as breath something like what you said to me, or to anyone else, they' + would + ' be dead." You say as you you place your hand around the guards forehead."But for you, since you don' + not + ' seem to know me, or what my standards are when it comes to equality, I' + will + ' let you off easy. With swift effecentcy, you dig your claw of your other hand into the side of the guards cheek. Not too far, of course, just deep enough so that it will scar. <br> The guard screams as you drag your claw, like a pen, across his cheek. Blood was dripping off his cheek, and onto the hard floor as you worked, finishing the design swiftly. The cut looked like a whip, which to him, and to anyone with half a brain, represented a racist person. For the crimes they'+ have +' done to everyone else. Blood dripped off of your claw, as he with drew it, and wiped it on the guards uniform again. The guard was whimpering at this point, although you didn' + not + ' really care. He deserves it.'); 
    }
    scar = true;
  }else{
    if (player.sex = 'female'){
      $('#scenetext').html('You roll your eyes, whiping the spit off your face. You' + have +' been called worse. "Look," you say, withholding some discust. "You probably don' + not + ' understand how crule and rude that is, but I' + will + ' keep it short with you. You are to stop your racial actions when I release you, or else-" <br> "Or else what?" the guard interjected before you can finsih. "I don' + not + ' fear your kind." You sigh. Before you realise what you' + are +' doing, you punch the guard in face, rage filling your heart. You look back at the guard, shocked at what you have done. The guard eyes rolled back to the back of his head, blood poured from the guards nose, and after a little more inspection, you realise that his nose is slightly crooked. He may have desirved it, but you still feel slightly guilty about hitting him so hard.');
    }else{
     $('#scenetext').html('You stair down at the guard, whipeing the spit from your face. You cannot stand for this. "Look," you start, glaring menicingly at the guard. "calling me a knife eared freak isn' + not + 'going to do you any good. Especially in the position you are in." The guard looks around, but rage still filled his eyes. "Now my suggestion to you, is that-" before you can finish, the guard once again trys to throw you off, but fortinantly for you, you stay on. <br> "Why when I get my hands on you!" You seem to be loosing your grip. Whithout thinking, you throw a punch blindly into the guards face, and luckly for you, you hit. The guard stops moving from benith you, and you look down. The guard eyes rolled back to the back of his head, blood poured from the guards nose, and after a little more inspection, you realise that his nose is slightly crooked. He may have desirved it, but you still feel slightly guilty about hitting him so hard.');
    }
    noseBroke = true;
  }
  var ruthless = true;
  $('#question').html('Press enter to continue');
}

function scene67Answer(answer){
    scene69();
}

function scene68(){
  currentScene = 68;
  LP = Number(LP) + 10;
 $('#scenetext').html('You figure out that he will not speak, so without warning, you shove the head of the guard into the grown, hard enough that it bonces off the hardwood floor, and sprint towards the door.Thankfully for you, no one seems to be on their way to stop you... at least to your knowledge...<br> <br> Your current LP (Level Points) count is ' + LP + '!');
 var freindlyChase = true;
    $('#question').html('Type Enter to go to Level Select');
}

function scene68Answer(answer){
  if (answer == 'Enter' && answer == ''){
    levelSelect();
  }
  $('#message').html('');
}

function scene69(){
  currentScene = 69;
  LP = Number(LP) + 10;
  $('#scenetext').html('You jump up from the guard, and swiftly make your way out the door. Just before you make it out the door, something hard hits the back of your head, and you tumble onto the floor. Stars fill your vision as you see a figure standing above you.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
    $('#question').html('Type Enter to go to Level Select');
}

function scene69Answer(answer){
    if (answer == 'Enter' && answer == ''){
    levelSelect();
  }
  $('#message').html('');
}
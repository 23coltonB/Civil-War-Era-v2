//This code needs to start on 48-69. 
function scene8(){ 
  currentScene = 8; 
  if (weak == false){ 
    if (x <= player.stealth){ 
      hidden = true;
      if (x <= player.perseption){ 
        if (player.sex == 'male'){             
           $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" From the style of their boots, and the formiliarity of the mans voice, they seem to be the guards that were posted around one of the markets you often go to. "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps he is not home. We should come back later." The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lad you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.'); 
          scene8QuestionA();
          $('#question').html('What would you like to do? Stay hidden (SH), or confront'); 
        }else{ 
          $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" From the style of their boots, and the formiliarity of the mans voice, they seem to be the guards that were posted around one of the markets you often go to. "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps she is not home. We should come back later."The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lass you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.');
          scene8QuestionA();
          $('#question').html('What would you like to do? Stay hidden (SH), or confront'); 
        } 
      }else{ 
        if (player.sex == 'male'){ $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps he is not home. We should come back later." The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lad you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.');  
                                  scene8QuestionA();
                                  $('#question').html('What would you like to do? Stay hidden (SH), or confront'); 
                                 }else{ $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps she is not home. We should come back later."The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lass you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.'); 
                                       scene8QuestionA();
                                       $('#question').html('What would you like to do? Stay hidden (SH), or confront'); 
                                      } 
      } 
    }else{ 
      $('#scenetext').html('You thow yourself out of bed, onto the cold floor, and proceed to roll under the bed, slightly terrified at what you might come across. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" From the style of their boots, and the formiliarity of the mans voice, they seem to be the guards that were posted around one of the markets you often go to. "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps he is not home. We should come back later." The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the drowsy, dull-witted person you are in the morning, called out, <br> "I am under the bed hold on!" The guards next to you freeze, and just then you realize your horid mistake, you slap your head. You reluctantly roll out from underneath the bed and reveiled yourself'); 
      scene8QuestionB();
      $('#question').html('Now what?! FIGHT or convince.'); 
    } 
  }else{ 
    if (player.stealth >= x){ 
      hidden = true; 
      $('#scenetext').html('Slightly frustrated that you could' +not +' lift a piece of oak furniture, you hear the noises and footsteps closing in on your positions, and you dive underneath your bed. After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps she is not home. We should come back later."The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the smart young lass you are, you stay silent, as the guards shuffle silently towards one of the doors. The door to the kitchen to be exact. They slip behind the door.'); 
      scene8QuestionA();
      $('#question').html('What would you like to do? Stay hidden (SH), or confront'); 
    }else{ 
      $('#scenetext').html('Slightly frustrated that you could' +not +' lift a piece of oak furniture, you hear the noises and footsteps closing in on your positions, and you dive underneath your bed.  After what seems like a century, something knocks on the door, and you hold your breath. You dont dare to breath. Without any other indication,the door gentally pushes open. As the door opens wide open, you can see two pairs of iron boots enter into the room. One of them called softly, <br> "Hello? Is anyone home?" From the style of their boots, and the formiliarity of the mans voice, they seem to be the guards that were posted around one of the markets you often go to. "Sorry to intrude, but we really need to talk to you." A second voice roughly interjected, as he said to the other. <br> "Perhaps he is not home. We should come back later." The first voice sighed. <br> "We should check just in case. He might be home, but unable to hear us". <br> "Fine" retorted the second voice. You, being the drowsy, dull-witted person you are in the morning, called out, <br> "I am under the bed hold on!" The guards next to you freeze, and just then you realize your horid mistake, you slap your head. You reluctantly roll out from underneath the bed and reveiled yourself'); 
      scene8QuestionB();
      $('#question').html('Now what?! FIGHT or convince.'); 
    } 
  } 
}

function scene8Answer(options){ 
  switch (options){
    case 'FIGHT':
      scene48();
      break;
      
    case 'Convince':
      scene49();
      break;

    case 'Stay hidden':
      scene50();
      break;

    case 'Confront':
      scene51();
      break;
  }
}

function scene48(){ 
  currentScene = 48; 
  $('#scenetext').html('Are you sure? Your unarmed, and fighting agenst two highly trained Guards of the Dutches Queen herself. Your odds of surviving are EXTREAMLY low.'); 
  $('#question').html('Are you sure? y or n'); 
} 

function scene48Answer(options){ 
  switch (options){
    case 'Yes':
      scene52();
      break;
      
    case 'No':
      scene49();
      break;
  }
}

function scene49(){ 
  currentScene = 49; 
  LP = Number(LP) + 15; 
  updateStats();
  if (player.race == 'dragonhalf' || 'dwarf'){ 
    $('#scenetext').html('"What are you doing in my appartment?!" you say rather annoyed. Although this is not the first time someone or something intrueded into your space. <br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
    var conmunication = true;
  }else{ 
    $('#scenetext').html('"What are you doing in my appartment?!" you say rather annoyed. <br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  } 
  scene49Question();
  $('#question').html('Type Enter to go to Level Select'); 
  var communication = true; 
}

function scene49Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  } 
} 

function scene50(){ 
  currentScene = 50; 
  LP = Number(LP) + 25; 
  updateStats();
  $('#scenetext').html('Tired, you lazyily lay under your bed. And by mystake, you have sucsessfully fallen asleep underneath it. <br> <br> Your current LP (Level Points) count is ' + LP + '!');
  scene50Question();
  $('#question').html('Type Enter to go to Level Select'); 
  sleep = true; 
} 

function scene50Answer(options){ 
    switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  } 
} 
function scene51(){ 
  currentScene = 51; 
  $('#scenetext').html('You expertly and silently roll out from underneath your bed, and go towards the kitchen where the guards disapeard off to.'); 
  if (player.x <= player.wisdom){ 
    smart = true; 
    scene51QuestionA();
    $('#question').html('What would you like to do? Wait, Surpise attack (SA) or enter the kichen (ETK)'); 
  }else{ 
    scene51QuestionB();
    $('#question').html('What would you like to do? Surpise attack (SA) or enter the kichen (ETK)'); 
  } 
} 

function scene51Answer(options){ 
  switch (options){
  case 'Wait':
    scene56();
    break;
    
  case 'Surpise attack':
    scene54();
    break;

  case 'Enter the kitchen':
    scene55();
    break;
  }
} 

function scene52(){ 
  currentScene = 52; 
  scene52Question();
  $('#question').html('Are you SURE your sure? y or n'); 
} 

function scene52Answer(options){ 
  switch (options){
    case 'Yes':
      scene53();
      break;
      
    case 'No':
      scene49();
      break;
  }
}

function scene53(){ 
  currentScene = 53;
  player.health = Number(player.health) - 100; 
  updateStats(); 
  if (player.sex = 'male'){ 
    $('#scenetext').html('Ugh! FINE! If you insist! You sprint at them, full speed, screaming, startling the guards. The guards jump at your sudden hostelness, and as you run at the guards full speed, without warning, however, the tallest one of them strikes you down, dead, on the ground. <br> "Why in all the Plains priviate!" Shouted the shorter guard to the taller guard. "We needed him alive!" The tall one just shrugged, and turned away, with the dwarf fumeing as he followed him outside. <br> <br> GAME OVER! <br> Game tip: If you ever fight anything without weapons, IRL or not, your odds of surviving are zero. Period.'); 
  }else{ 
    $('#scenetext').html('Ugh! FINE! If you insist! You sprint at them, full speed, screaming, startling the guards. The guards jump at your sudden hostelness, and as you run at the guards full speed, without warning, however, the tallest one of them strikes you down, dead, on the ground. <br> "Why in all the Plains priviate!" Shouted the shorter guard to the taller guard. "We needed her alive!" The tall one just shrugged, and turned away, with the dwarf fumeing as he followed him outside. <br> <br> GAME OVER! <br> Game tip: If you ever fight anything without weapons, IRL or not, your odds of surviving are zero. Period.'); 
  }
  scene53Question();
  $('#question').html('Hit the restart button to start from the beginning'); 
} 

function scene53Answer(options){
  switch (options){
    case 'Restart':
      scene7();
      break;
  }
}

function scene54(){ 
  currentScene = 54; 
  LP =Number(LP) + 10; 
  if (x <= player.stealth){ $('#scenetext').html('You sneak towards where the guards had disapeared off to. As you reach the door, open the door slowly. This room was your kitchen that, to your shock, has not been cleaned in a while. And to your shock, you could not see the guards. Whithout warning, the door of solid oak flys forward, smaking you inbetween the door and the wall. Stars fill your vision, and before you could pass out, you cry out for help.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
                          }else{ 
    $('#scenetext').html('"SNEAK ATTACK!" you cry out as you charge to the door where the guards had disapeared. Unsurprisingly however, the door of solid oak flies into your face, effectively slamming you hard between the door and the wall. Stars fill your vision, and before you could pass out, you cry out for help. <br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  } 
  var freindlyCapture = true; 
  scene54Question();
  $('#question').html('Type Enter to go to Level Select'); 
} 

function scene54Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  }
}

function scene55(){ 
  currentScene = 55; 
  if (x + 10 <= player.dodge){ 
    $('#scenetext').html('You walk towards the kitchen door, and slowly open it. Just as you do so, you see the tall guard stairing you back down. You yelp, hop back behind the door, and slam the door in his face. <br>"Sorry!" you shout through the door, "Perhaps we can-" before you can finish, the door flys open, and you, thankfully, jump out of the way of the door. The tall guard now advaces towards you. '); 
    $('#question').html('What will you do? Evade and convince (EAC), subdue, or hold him down (HHD)'); 
    scene55QuestionB();
  }else{
    if (x <= player.accuracyM){ 
      $('#scenetext').html('You walk towards the kitchen door, and slowly open it. Just as you do so, you see the tall guard stairing you back down. You yelp, hop back behind the door, and slam the door in his face. <br> "Sorry!" you shout through the door, "Perhaps we can-" before you can finish, the door flys open, and slams into your face, knocking you back on the floor. The giant guard towers above you. A gleaming war hammer hanges from his back. He attempts to strike at you with his fists. You parry it, and trip him, throwing him to the ground.'); 
      $('#question').html('What will you do? Evade and convince (EAC), subdue, or hold him down (HHD)');
      scene55QuestionB();
      onTheFloor = true; 
    }else{ 
      LP = Number(LP) + 10; 
      updateStats();
      $('#scenetext').html('You walk towards the kitchen door, and slowly open it. Just as you do so, you see the tall guard stairing you back down. You yelp, hop back behind the door, and slam the door in his face. <br> "Sorry!" you shout through the door, "Perhaps we can-" before you can finish, the door flys open, and slams into your face, knocking you back on the floor. The giant guard towers above you. A gleaming war hammer hanges from his back. He attempts to strike at you with his fists. You fail to block the punch, and he punches you square on the kisser, effectively knocking you out.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
      var freindlyCapture = true; 
      var bloodyLips = true; 
      $('#question').html('Type Enter to go to Level Select'); 
      scene55QuestionA();
    } 
  } 
} 

function scene55Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;

    case 'Evade and convince':
      scene57();
      break;

    case 'Subdue':
      scene58();
      break;

    case 'Hold him down':
      scene59();
      break;
  }
}

function scene56(){ 
  currentScene = 56;
  LP = Number(LP) + 15;
  updateStats();
  if (player.sex == 'female'){ 
    $('#scenetext').html('You, being the smart young lad you are, deside to wait on your bed till the guards return from the other room. After all, going in after them unarmed would be such a stupid desition. Thankfully, the guards return in a short time, entering one at a time. The first one, seemed to just barely miss the head of the door frame as he enter, while the second one was about half the first ones height. The short one seemed to have a beard that almost reached his waist. They both were wearing the same dark leather outfits that seem to mirror that of the night, while in contrast, their silver-colored helments reflected the moonlight into your room. <br> At first, they did not noticed you until you called out to them. <br> "Ummm, excuse me, but what are you doing in my home?" Just as you finish saying that the tall one jump at the sight of you, barely missing the roof of your appartment. With a big thud The tall man fell to the ground landing on the ground with a large crash. The short guard finally noticed you too, and with great strength, helped his fallen compatriot up. You suppress a laugh. <br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  }else{ 
    $('#scenetext').html('You, being the smart young lad you are, deside to wait on your bed till the guards return from the other room. After all, going in after them unarmed would be such a stupid desition. Thankfully, the guards return in a short time, entering one at a time. The first one, seemed to just barely miss the head of the door frame as he enter, while the second one was about half the first ones height. The short one seemed to have a beard that almost reached his waist. They both were wearing the same dark leather outfits that seem to mirror that of the night, while in contrast, their silver-colored helments reflected the moonlight into your room. <br> At first, they did not noticed you until you called out to them. <br> "Ummm, excuse me, but what are you doing in my home?" Just as you finish saying that the tall one jump at the sight of you, barely missing the roof of your appartment. With a big thud The tall man fell to the ground landing on the ground with a large crash. The short guard finally noticed you too, and with great strength, helped his fallen compatriot up. You suppress a laugh. <br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  } 
  scene56Question();
  $('#question').html('Type Enter to go to Level Select');
} 

function scene56Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  }
}

function scene57(){ 
  currentScene = 57; 
  if (x <= player.dodge){ 
    if (x <= player.charisma){ 
      LP = Number(LP) + 15; 
      updateStats();
      if (onTheFloor == true){ 
        if (player.sex == 'male'){ 
          $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are able to dodge all of them, but occationally, one or two of them graze you. <br> "Hey man calm down!" You say redurecting one of his puches, throwing him to the ground. "I do not want to hurt you. Just tell me what you need." Rage fills the eyes of tall man on the ground as he tries to get back up. Just as the guard get up, a voice behind you shouts. <br> "Private, thats enough!" The voice was rough like sandpaper, but loud enough to startle you. How did you forget about the second guard? Instinctivly, you throw your back against the nearest wall, so you can face both of the guards. The one who spoke, turned gingerly towards you holding his hands up in surrender. "So sorry ' + player.name + ', sir about your misshap dimwitted Squadmate, but I need you to come with us. The Dragon Dutches is requeseting an audiance with you."<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
        }else{ 
          $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are able to dodge all of them, but occationally, one or two of them graze you. <br> "Hey man calm down!" You say redurecting one of his puches, throwing him to the ground. "I do not want to hurt you. Just tell me what you need." Rage fills the eyes of tall man on the ground as he tries to get back up. Just as the guard get up, a voice behind you shouts. <br> "Private, thats enough!" The voice was rough like sandpaper, but loud enough to startle you. How did you forget about the second guard? Instinctivly, you throw your back against the nearest wall, so you can face both of the guards. The one who spoke, turned gingerly towards you holding his hands up in surrender. "So sorry ' + player.name + ', miss about your misshap with my dimwitted Squadmate, but I need you to come with us. The Dragon Dutches is requeseting an audiance with you."<br> <br> Your current LP (Level Points) count is ' + LP + '!'); } 
      }else{ 
        if (player.sex == 'male'){ 
          $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are able to dodge all of them, but occationally, one or two of them graze you. <br> "Hey man calm down!" You say redurecting one of his puches, throwing him to the ground. "I do not want to hurt you. Just tell me what you need." Rage fills the eyes of tall man on the ground as he tries to get back up. Just as the guard get up, a voice behind you shouts. <br> "Private, thats enough!" The voice was rough like sandpaper, but loud enough to startle you. How did you forget about the second guard? Instinctivly, you throw your back against the nearest wall, so you can face both of the guards. The one who spoke, turned gingerly towards you holding his hands up in surrender. "So sorry ' + player.name + ', sir about your misshap dimwitted Squadmate, but I need you to come with us. The Dragon Dutches is requeseting an audiance with you."<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
        }else{ 
          $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are able to dodge all of them, but occationally, one or two of them graze you. <br> "Hey man calm down!" You say redurecting one of his puches, throwing him to the ground. "I do not want to hurt you. Just tell me what you need." Rage fills the eyes of tall man on the ground as he tries to get back up. Just as the guard get up, a voice behind you shouts. <br> "Private, thats enough!" The voice was rough like sandpaper, but loud enough to startle you. How did you forget about the second guard? Instinctivly, you throw your back against the nearest wall, so you can face both of the guards. The one who spoke, turned gingerly towards you holding his hands up in surrender. "So sorry ' + player.name + ', miss about your misshap with my dimwitted Squadmate, but I need you to come with us. The Dragon Dutches is requeseting an audiance with you."<br> <br> Your current LP (Level Points) count is ' + LP + '!');
        } 
      } 
      scene57QuestionA();
      $('#question').html('Type Enter to go to Level Select'); 
      var communication = true; 
    }else{ 
      if (x <= player.perception){ 
        if (onTheFloor == true){ 
        $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You attempt to block the punch from the guard, but one misses your blocking, and hits you in the face, knocking you back. The guard stands up, and you recover from your hit. Something is dripping from your nostril. You did not bother to check, for you lock eyes with the guard, preparing to attack. Out of the corner of your eye, you notice something at the door of your kitchen. What is that?'); 
          $('#question').html('Would you like to look at it?'); 
                scene57QuestionB();
          figure = true; 
        }else{ 
          LP= Number(LP) + 10; 
          $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are unable to dodge all of them, and he knocks you out clean on the ground. Your vision slowly fades to black <br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
          var freindlyCapture = true; 
          $('#question').html('Type Enter to go to Level Select'); 
                scene57QuestionA();
        } 
      }else{ 
        LP = Number(LP) + 10; 
        updateStats();
        $('#scenetext').html('You get up swiftly from the ground, advancing on the downed soldier. He also gets up and attempts to punch you again. You dodge out of the way, but he keeps coming with his punches. You are unable to dodge all of them, and he knocks you out clean on the ground. Your vision slowly fades to black<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
        $('#question').html('Type Enter to go to Level Select'); 
              scene57QuestionA();
        var freindlyCapture = true; 
      } 
    } 
  }else{ 
    LP = Number(LP) + 10; 
    updateStats();
    $('#scenetext').html('Before you can get up, you are swiftly overcome by the guard you hit earlyer.Rage fills his eyes as raised his fists to strike you, and begins to pumble you.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
    $('#question').html('Type Enter to go to Level Select'); 
          scene57QuestionA();
    var pumble = true; 
    var freindlyCapture = true; 
  } 
} 

function scene57Answer(options){ 
  switch (options){
    case 'Yes':
      scene60();
      break;

    case 'No':
      scene61();
      break;

    case 'Level Select':
      levelSelect300();
      break
  }
}

function scene58(){ 
  currentScene = 58; 
  LP = Number(LP) + 10;
  updateStats();
  if (x <= player.accuracyM){ 
    $('#scenetext').html('You rush over to the guard, and tackle him to the ground. you both hit the floor, and fortunately, you get on top of your opponint. You punch the guard until he passes out. You should have enough time to get ou- <br> Before you can finish your thought prossess, something smacks you in the back of the head. The force of the blow knocks you onto the floor, making you face plant into the hard wood. You are unable to figure out who hit you before you pass out.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  }else{ 
    $('#scenetext').html('You rush over to the guard, and tackle him to the ground. you both hit the floor. Unfortunately, your opponint lands on top of  you. He proceeds to punch you until stars fills your eyes, and you slowly fade into black.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
    var bloody = true; 
  } 
  scene58Question();
  $('#question').html('Type Enter to go to Level Select'); 
  var freindlyCapture = true; 
}

function scene58Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  }
} 

function scene59(){ 
  currentScene = 59; 
  if (x <= player.accuracyM || x <= player.strenghth){ 
    $('#scenetext').html('You rush over to the guard, and tackle him to the ground. you both hit the floor, and fortunately, you get on top of your opponint. You hold him down sucsessfully, however, he still struggles beneith your grip.'); 
    scene59QuestionB();
    $('#question').html('Now that you have him under relative control, what would you like to do? Knockout, convince, or interrogate'); 
  }else{ 
    LP = Number(LP) + 10; 
    scene59QuestionA();
    updateStats();
    $('#scenetext').html('You rush over to the guard, and tackle him to the ground. You both hit the floor with a defining thud. Unfortunately, your opponint lands on top of  you. He proceeds to punch you until stars fills your eyes, and you slowly fade into black.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
    var bloody = true; 
    var freindlyCapture = true; 
    End = true; 
    $('#question').html('Type Enter to go to Level Select'); 
  } 
} 

function scene59Answer(options){ 
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
    case 'Knockout':
      scene63();
      break;
    case 'Convince':
      scene64();
      break;
    case 'Interrogate':
      scene65();
      break;
  } 
} 

function scene60(){ 
  currentScene = 60; 
  $('#scenetext').html('You glance swiftly towards the shape, and notice its a dwarf. He is wearing the same green tunic-outfit-thingy as the man in front of you, with the only acseption being his red breard haning from his chin, cascading towards his shins.'); 
  dwarfSeen = true; 
  scene60Question();
  $('#question').html('Press "Enter" to continue'); 
} 

function scene60Answer(options){ 
    switch (options){
    case 'Continue':
      scene62();
  }
} 

function scene61(){ 
  currentScene = 61; 
  $('#scenetext').html('You ignore the shape, and it quickly slips out of your vision. Perhaps it was a figment of your imagination.'); 
  $('#question').html('Press Enter to continue'); 
  scene61Question();
} 

function scene61Answer(options){
  switch (options){
    case 'Continue':
      scene62();
      break;
  }
}

function scene62(){ 
  currentScene = 62; 
  if (dwarfSeen == true){ 
    LP = Number(LP) + 15;
      $('#scenetext').html('You maintan your staring contest with the towering giant, until, to your surpise, you hear someone behind you. <br> "Private! Thats enough!" The guard in front of you glances behind you, and reluctantly drops his guard. You, realising what was happening, follow his suit. <br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
    var communication = true; 
  }else{ 
    LP = Number(LP) + 10; 
    $('#scenetext').html('You maintan your staring contest with the towering giant, until, to your surpise, you hear someone behind you. <br> "Private! Thats enough!" You jump in surpise, giving the guard in front of you enough time to dive at you, and throws you into the wall, effectively knocking you out cold.<br> <br> Your current LP (Level Point) count is ' + LP + '!'); 
    var freindlyCapture = true; 
  }
      updateStats();
  $('#question').html('Type Enter to go to Level Select');
  scene62Question();
} 

function scene62Answer(options){ 
    switch (options){
      case 'Level Select':
        levelSelect300();
        break;
    }
}

function scene63(){ 
  currentScene = 63; 
  LP = Number(LP) + 10;
  updateStats();
  $('#scenetext').html('You rase your fist, about to give the guard the final blow, but before you can throw the punch, something smacks you in the back of your head, throwing you off the guard. Your head achs as you try to get up. As you do so, you are swiftly knocked back down by your unseen assalent, and stars begain to fill your vision. You try to force yourself out of your potential passing out, but to no avail. Your vision turns to black. <br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  var freindlyCapture = true; 
  scene63Question();
  $('#question').html('Type Enter to go to Level Select'); 
}

function scene63Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  }
} 

function scene64(){ 
  currentScene = 64; 
  if (x <= player.charisma){ 
    if (player.race == 'dragonhalf'){ 
      $('#scenetext').html('"Look man, I do' + not + ' want to hurt you. I am not your enemy." You say with relative calmness. "Just tell me why you are -" Before you can finish, the guard beneath you spits on your face. With discust, you wipe it off you. <br> "You overgrown lizard! When I get my hands on you-" The guard beneath you trys to throw you off, but you are able to stay on.'); 
      racist = true; 
      scene64QuestionB();
      $('#question').html('What would you like to do? Knockout, Run, or punish.'); 
    }else{ 
      if (player.race == 'dwarf'){ 
        $('#scenetext').html('"Look man, I do' + not + ' want to hurt you. I am not your enemy." You say with relative calmness. "Just tell me why you are here" The guard beneath you stays silent, looking away from your gaze. The rage that usually fills his eyes, left. He does' + not + ' seem to want to respond'); 
        scene64QuestionC();
        $('#question').html('What would you like to do? Knockout, Run, or ask again (AA)'); 
      }else{ 
        if (player.race == 'elf'){ 
          $('#scenetext').html('"Look man, I do' + not + ' want to hurt you. I am not your enemy." You say with relative calmness. "Just tell me why you are -" Before you can finish, the guard beneath you spits on your face. With discust, you wipe it off you. <br> "You knifed-eared freak! When I get my hands on you-" The guard beneath you trys to throw you off, but you are able to stay on.'); 
          racist = true; 
          scene64QuestionB();
          $('#question').html('What would you like to do? Knockout, Run, or punish.'); 
        }else{ 
          $('#scenetext').html('"Look man, I do' + not + ' want to hurt you. I am not your enemy." You say with relative calmness. "Just tell me why you are here" The guard beneath you stays silent, looking away from your gaze. The rage that usually fills his eyes, left. He does' + not + ' seem to want to respond. This could be an oppertunitiy for you to excape.'); 
          scene64QuestionC();
          $('#question').html('What would you like to do? Knockout, or Run.'); 
        } 
      } 
    } 
  }else{ 
    LP = Number(LP) + 10; 
    updateStats();
    if (player.character == 'FDC'){ 
      $('#scenetext').html('"Look man I... do' + not + ' want to hurt you..." You say with unconfidence. "Just tell me why are you here." The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough." Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
      var freindlyCapture = true;
    }else{ 
      if (player.race == 'dragonhalf'){ 
        $('#scenetext').html('"Look man I... do' + not + ' want to hurt you..." You say with little confidence. "Just tell me why are you here." The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough."  Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
      }else{ 
        $('#scenetext').html('"Look man I... do' + not + ' want to hurt you..." You say with little confidence. "Just tell me why are you here." The guard beneath you just laughs in your face. <br> "You' + will + ' get what you deseve soon enough." Suddenly something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
      } 
    } 
    scene64QuestionA();
    var freindlyCapture = true; 
    $('#question').html('Type Enter to go to Level Select'); 
  } 
} 

function scene64Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
    case 'Knockout':
      scene63();
      break;
    case 'Punish':
      scene67();
      break;
    case 'Run':
      scene68();
      break;
    case 'Ask again':
      scene66();
      break;
  }
} 

function scene65(){ 
  currentScene = 65; 
  LP = Number(LP) + 10; 
  updateStats();
  if (x <= player.charisma){ 
    if (player.character == 'FDC'){ 
      $('#scenetext').html('"Who are you!?!" You shout into the guards face. "And who sent you?!" for a little while, the guard stairs at you, with rage in his eyes. "If you do not answer me, I will ensure that you will not see the light of day." Suddenly the man broke, his eyes lost their iconic flare of anger, and was swiftly changed into a look of shear terror. Your going to have to repent for this, for the Lord will not like this. Without warning, he cried out. <br> "Alright alright!" he cries out in terror. "My companion and I were sent here to-" Before the guard can get the words out of his mouth, something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
      pray = true; 
      var freindlyCapture = true; 
    }else{ 
      if (player.race == 'dragonhalf'){ 
        $('#scenetext').html('"Who are you!?!" You shout into the guards face. "And who sent you?!" for a little while, the guard stairs at you, with rage in his eyes. "If you do not answer me, I will ensure that you will not see the light of day." Suddenly the man broke, his eyes lost their iconic flare of anger, and was swiftly changed into a look of shear terror. You have' + not + ' lost your touch. Without warning, he cried out. <br> "Alright alright!" he cries out in terror. "My companion and I were sent here to-" Before the guard can get the words out of his mouth, something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
        var freindlyCapture = true; 
      }else{ 
        $('#scenetext').html('"Who are you!?!" You shout into the guards face. "And who sent you?!" for a little while, the guard stairs at you, with rage in his eyes. "If you do not answer me, I will ensure that you will not see the light of day." Suddenly the man broke, his eyes lost their iconic flare of anger, and was swiftly changed into a look of shear terror. Wow... your surpisingly good at this... Without warning, he cried out. <br> "Alright alright!" he cries out in terror. "My companion and I were sent here to-" Before the guard can get the words out of his mouth, something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
        var freindlyCapture = true; 
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
      var freindlyCapture = true; 
    } 
  } 
  scene65Question();
  $('#question').html('Type Enter to go to Level Select'); 
} 

function scene65Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  }
} 

function scene66(){ 
  currentScene = 66; 
  LP = Number(LP) + 10; 
  updateStats();
  $('#scenetext').html('"Hey man," you say calmly, but you can feel your irration slowly growing. "Just tell me who sent you, and I can let you go on your way. Jus-" Just before you can finish your sentince, something hard smacks you in the back of your head, effectively knocking you off the guard. Stars fill your vision, as you struggle to get up, but as your vision slowly fades to black, you see another figure hovering over the guard.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  var freindlyCapture = true; 
  scene66Question();
  $('#question').html('Type Enter to go to Level Select'); 
} 

function scene66Answer(options){
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  }
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
  scene67Question();
  $('#question').html('Press "Enter" to continue'); 
} 

function scene67Answer(options){
  switch (options){
    case 'Continue':
      scene69();
      break;
  }
} 

function scene68(){ 
  currentScene = 68;
  LP = Number(LP) + 10;
  updateStats();
  $('#scenetext').html('Without any indication, you get up from the guard on the ground, and sprint for the open door. If you run just fast enough, you can out run them.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  var freindlyChase = true; 
  scene68Question();
  $('#question').html('Type Enter to go to Level Select'); 
} 

function scene68Answer(options){ 
  switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  }
} 

function scene69(){ 
  currentScene = 69; 
  LP = Number(LP) + 10; 
  updateStats();
  $('#scenetext').html('You jump up from the guard, and swiftly make your way out the door. Just before you make it out the door, something hard hits the back of your head, and you tumble onto the floor. Stars fill your vision as you see a figure standing above you.<br> <br> Your current LP (Level Points) count is ' + LP + '!'); 
  scene69Question();
  $('#question').html('Type Enter to go to Level Select'); 
  var freindlyCaptrue= true;
} 

function scene69Answer(options){ 
     switch (options){
    case 'Level Select':
      levelSelect300();
      break;
  }
}
//needs to be 81-109 onwards
function scene81(){
  $('#answer').val('');
  currentScene = 81;
  if (sleep == true){
    if (player.sex == 'male'){
      $('#scenetext').html('The door knocks and it jolts you awake. As you slowly regain your senses, you can pick up a soft ambiance from the bustling street next to your window. How long did you sleep? Your stomach growls angrily, demanding to be fed. You get up from your bed to get something to eat, only to be interrupted again by the door knocking, this time a little more attentive.');
    }else{
    $('#scenetext').html('The door knocks and it jolts you awake. As you slowly regain your senses, you can pick up a soft ambiance from the bustling street next to your window. How long did you sleep? Your stomach growls angrily, demanding to be fed. You get up from your bed, your night gown drapping peacefully down your sides. You stumble towards the kitchen to get something to eat, only to be interrupted again by the door knocking, this time a little more attentive.');
    }
     $('#question').html('What do you want to do? Answer or Eat');
  }
  if (hidden == true){
    $('#scenetext').html('null');
    $('#question').html('null');
  }
  if (communication == true){
    $('#scenetext').html('null');
    $('#question').html('null');
  }
}

function scene81Answer(answer){
  if (answer != 'Answer' && answer != 'Eat '&& answer == 'n' && answer == 'y'){
    $('#message').html('Please enter one of the answers above');
  }
  if (answer == 'Answer' || answer == 'y'){
    scene82();
  }else if (answer == 'Eat'){
    scene83();
  }
}
// answer
function scene82(){
  currentScene = 82;
  LP = Number(LP) + 5;
  updateStats();
  var hunger = true;
  $('#scenetext').html('Despite your roaring hunger, you walk to the door and open it. <br> Behind it were two men: a dwarf with a red beard that seemed to cover almost his entire body, and a man that seemed to tower over both you, and his dwarven companion. He was resting on his war hammer, seeming to radiate some form of intimidation. Both men wore matching green tunics with helmets with a rounded M for the face to poke out. You look back down at the dwarf, who smiled warmly. <br> “Good morning ' + player.name + '! My name is Dori, and this...” he motioned towards the giant standing next to him. “...spruce is called Psilós” he grunted in what you thought was in agreeance, but Psilós stares only seems to make you more uncomfortable. Sensing your discomfort, Dori brings your attention back to him. “Anyway, who we are aren’t important right now, but we tried to reach out to you last night  but the Dragon Dutchess awaits at the castle for your audience. It' + is + ' probalby best to just hurry.“ You nod, understanding the severity of the situation, and followed them out. <p> Your current LP (Level Points) count is ' + LP + '!');
  $('#question').html('Type "Enter" to go to Level Select');
}

function scene82Answer(answer){
  levelSelect();
}

// eat
function scene83(){
  currentScene = 83;
    $('#scenetext').html('You advance towards your kitchen, ignoring the persistent knocking. <br> "Comeback in later, I’m very busy!" you lie. It doesn' + not + ' matter what they think, as long as you get some food you. Just before you get into your kitchen, you hear someone shouting from the other side of your door. <br> “Please! This is very important! Please open the door!” The voice sounds very desperate in their plea. Perhaps it'+ is +' important…');
    $('#question').html('Do you answer? y or n?');
}

function scene83Answer(answer){
  if (answer != 'y' && answer != 'n'){
    $('#message').html('Try typing "y" or "n" in the text box');
  }
  if (answer == 'y'){
    scene82();
  }else if (answer == 'n'){
    scene84();
  }
}

//n option
function scene84(){
  currentScene = 84;
  awards.Mr_Resistant = 'Found!';
  if (x <= player.charisma){
    if (player.character == 'MDA' || player.character == 'FDM' || player.character == 'MES'){
      $('#scenetext').html('You shout back at the voice, <br> “If it' + is + ' so important, then why don’t you just say it here? You know no one else is in this building but me” You wait patiently for a response but after a little bit, you hear the voice again. <br> “The Dragon Dutchess,” the voice called, “is... is calling for an audience with you!” you pause, and your heart skips a beat. What did you screw up this time? Bad enough to get the Dragon Dutchess attention, apparently. You run over to the door and fling it open. Behind it were two guards that you have seen patrolling the boulevard, a dwarf with a red beard that almost reaches his shins, and a tall man who even towers over you, with some level of hate behind his eyes. Both of them, however, wore the same matching green tunic with a dragon' + is + ' emblem embroidered on their tunics and silver helmets. You look back down at the dwarf, who smiled warmly. <br> “Good morning ' + player.name + '! My name is Dori, and this...” he motioned towards the giant standing next to him. “...spruce is called Psilós” he grunted in what you thought was in agreeance, but Psilós stares only seems to make you more uncomfortable. ');
    }else{
      $('#scenetext').html('You shout back at the voice, <br> “If it' + is + ' so important, then why don’t you just say it here? You know no one else is in this building but me” You wait patiently for a response but after a little bit, you hear the voice again. <br> “The Dragon Dutchess,” the voice called, “is... is calling for an audience with you!” you pause, and your heart skips a beat. What could she possibly want with the likes of me? You run over to the door and fling it open. Behind it were two guards that you have seen patrolling the boulevard, a dwarf with a red beard that almost reaches his shins, and a tall man who even towers over you, with some level of hate behind his eyes. Both of them, however, wore the same matching green tunic with a dragon' + is + ' emblem embroidered on their tunics and silver helmets. You look back down at the dwarf, who smiled warmly. <br> “Good morning ' + player.name + '! My name is Dori, and this...” he motioned towards the giant standing next to him. “...spruce is called Psilós” he grunted in what you thought was in agreeance, but Psilós stares only seems to make you more uncomfortable. Sensing your discomfort, Dori brings your attention back to him. “Anyway, who we are aren’t important right now, but we tried to reach out to you last night but the Dragon Dutchess awaits at the castle for your audience. It' + is + ' probalby best to just hurry.“');
    }
  }else{
        if (player.character == 'MDA' || player.character == 'FDM' || player.character == 'MES'){
      $('#scenetext').html('You shout back with your lack of confidence back at the voice, <br> “Uhhhhhh.....” You' + are + 'very good with sudden interactions. "GO AWAY!" you shout through your desperation. You definently had something more witty to say... This defenently is' + not + ' your best work. You pause, hoping that whoevers at the door takes a hint, but unfortenently you hear the voice on the other side of the door. <br> “Heres the thing," said the voice, "The Dragon Dutchess is calling for an audience with you!” you pause, and your heart skips a beat. What did you screw up this time? Bad enough to get the Dragon Dutchess attention, apparently. You run over to the door and fling it open. Behind it were two guards that you have seen patrolling the boulevard, a dwarf with a red beard that almost reaches his shins, and a tall man who even towers over you, with some level of hate behind his eyes. Both of them, however, wore the same matching green tunic with a dragon' + is + ' emblem embroidered on their tunics and silver helmets. You look back down at the dwarf, who smiled warmly. <br> “Good morning ' + player.name + '! My name is Dori, and this...” he motioned towards the giant standing next to him. “...spruce is called Psilós” he grunted in what you thought was in agreeance, but Psilós stares only seems to make you more uncomfortable. Sensing your discomfort, Dori brings your attention back to him. “Anyway, who we are aren’t important right now, but we tried to reach out to you last night but the Dragon Dutchess awaits at the castle for your audience. It' + is + ' probalby best to just hurry.“');
    }else{
      $('#scenetext').html('You shout back with your lack of confidence back at the voice, <br> “Uhhhhhh.....” You' + are + 'very good with sudden interactions. "GO AWAY!" you shout through your desperation. You pause, hoping that whoevers at the door takes a hint, but unfortenently you hear the voice on the other side of the door. <br> “Heres the thing," said the voice, "The Dragon Dutchess is calling for an audience with you!” you pause, and your heart skips a beat. What could she possibly want with the likes of me? You run over to the door and fling it open. Behind it were two guards that you have seen patrolling the boulevard, a dwarf with a red beard that almost reaches his shins, and a tall man who even towers over you, with some level of hate behind his eyes. Both of them, however, wore the same matching green tunic with a dragon' + is + ' emblem embroidered on their tunics and silver helmets. You look back down at the dwarf, who smiled warmly. <br> “Good morning ' + player.name + '! My name is Dori, and this...” he motioned towards the giant standing next to him. “...spruce is called Psilós” he grunted in what you thought was in agreeance, but Psilós stares only seems to make you more uncomfortable. ');
    }
  }
  $('#question').html('(Dialoge) What do you want to ask? Dragon Dutchess, What did I do?');
}

function scene84Answer(answer){
  if (answer != 'Dragon Dutchess' && answer != 'What did I do?'){
    $('#message').html('Thats not a dialoge option');
  }
  if (answer == 'Dragon Dutchess'){
    scene85();
    $('#message').html('');
  }else if (answer == 'What did I do?'){
    scene86();
    $('#message').html('');
  }
}

//asking dragon dutchess
function scene85(){
  currentScene = 85;
  info = true;
  if (didntDoIt != true){
    if (player.character == 'MDA' || player.character == 'MES' || player.character == 'FDM'){
      $('#scenetext').html('"The who?" you ask, trying to play off the potential saverity of, the situation. It was only time before you messed up on your jobs. After all, murder is'+ not + ' legal anywhere. The guards glanced at one another. <br> "You mean to tell us you do' + not  + ' know whos been ruling over you for the past century?" asked Psilós. <br> "Not really" You say, playing into their ignorance. "Do tell me more!" <br> "Well," Dori thought aloud. "If you truely don' + not + ' know about the Dragon Dutchess, than you should be informed." Psilós made what sounded to be a groan as Dori opened his mouth to continue. <p> "The Dragon Dutchess is a ruler of our nation, The Second Civil Era, so wise and kind is she, the Dragon of Our Keep. She was there, back in the worst old days of the First Civil Government, fighting for our right to be free! Ever since the fall of the First Civil Government, the Dragon Dutchess was there, improving our dayly lives," he leaned in closer, "And to be perfectly honest, is wonderful to work with. Anyway, the Duchesses back story isn'+ not + ' important right now, but we tried to reach out to you last night  but the Dragon Dutchess awaits at the castle for your audience. It' + is + ' probalby best to just hurry." '+ info);
    }else{
      $('#scenetext').html('"The who?" you ask curiously. The guards glanced at one another. <br> "You mean to tell us you do' + not  + ' know whos been ruling over you for the past century?" asked Psilós. <br> "Not really, I have' + not +' been to this area yet, I' + am +' somewhat new." You say, leaning on the frame of the door. "Who is she?" <br> "Well," Dori thought aloud. "If you truely don' + not + ' know about the Dragon Dutchess, than you should be informed." Psilós made what sounded to be a groan as Dori opened his mouth to continue. <p> "The Dragon Dutchess is a ruler of our nation, The Second Civil Era, so wise and kind is she, the Dragon of Our Keep. She was there, back in the worst old days of the First Civil Government, fighting for our right to be free! Ever since the fall of the First Civil Government, the Dragon Dutchess was there, improving our dayly lives," he leaned in closer, "And to be perfectly honest, is wonderful to work with. Anyway, the Duchesses back story isn'+ not + ' important right now, but we tried to reach out to you last night  but the Dragon Dutchess awaits at the castle for your audience. It' + is + ' probalby best to just hurry."');
    }
  }else{
    if (player.character == 'MDA' || player.character == 'MES' || player.character == 'FDM'){
      $('#scenetext').html('"What about this... Dragon Dutchess?" you ask. Thankfully they are' + not +' after you today. Not yet anyway. <br> "You mean to tell us you do' + not  + ' know whos been ruling over you for the past century?" asked Psilós. <br> "Not really," You say, planly. "I came here from a land far away, so forgive me for not knowing." <br> "Well," Dori thought aloud. "If you truely don' + not + ' know about the Dragon Dutchess, than you should be informed." Psilós made what sounded to be a groan as Dori opened his mouth to continue. <p> "The Dragon Dutchess is a ruler of our nation, The Second Civil Era, so wise and kind is she, the Dragon of Our Keep. She was there, back in the worst old days of the First Civil Government, fighting for our right to be free! Ever since the fall of the First Civil Government, the Dragon Dutchess was there, improving our dayly lives," he leaned in closer, "And to be perfectly honest, is wonderful to work with. Anyway, the Duchesses back story isn'+ not + ' important right now, but we tried to reach out to you last night  but the Dragon Dutchess awaits at the castle for your audience. No more questions! The longer we wait, the thinner her patience grows.');
    }else{
      $('#scenetext').html('"What about the Dragon Dutchess? Who is she?" you ask curiously. The guards glanced at one another. <br> "You mean to tell us you do' + not  + ' know whos been ruling over you for the past century?" asked Psilós. <br> "Not really, I have' + not +' been to this area yet, I' + am +' somewhat new." You say, leaning on the frame of the door. "Who is she?" <br> "Well," Dori thought aloud. "If you truely don' + not + ' know about the Dragon Dutchess, than you should be informed." Psilós made what sounded to be a groan as Dori opened his mouth to continue. <p> "The Dragon Dutchess is a ruler of our nation, The Second Civil Era, so wise and kind is she, the Dragon of Our Keep. She was there, back in the worst old days of the First Civil Government, fighting for our right to be free! Ever since the fall of the First Civil Government, the Dragon Dutchess was there, improving our dayly lives," he leaned in closer, "And to be perfectly honest, is wonderful to work with. Anyway, the Duchesses back story isn'+ not + ' important right now, but we tried to reach out to you last night  but the Dragon Dutchess awaits at the castle for your audience. No more questions! The longer we wait, the thinner her patience grows."');
    }
  }
  if (didntDoIt == true && info == true){
    $('#question').html('What do you do? Go');
  }else{
    $('#question').html('(Dialoge) What do you do? Go or "What did I do?"');
  }
}

function scene85Answer(answer){
  if (answer != 'Go' && answer != 'What did I do?'){
        $('#message').html('That is' + not +' an option');
  }
  if (answer == 'Go'){
    scene87();
  }else if (answer == 'What did I do?'){
    scene86();
  }
}

//asking what did i do?
function scene86(){
  currentScene = 86;
  didntDoIt = true;
  if (info == true){
     if (player.character == 'MDA' || player.character == 'MES' || player.character == 'FDM'){
      $('#scenetext').html('"I' + am +' not introuble with the Dragon Dutchess... am I?" You ask, your heart racing. If they are after you for what you' + have +' done... <br> "Oh no, you' + are + 'fine," the dwarf says with a smile, “although, The Dragon Dutchess thinks of you quite admirably, she asked for you spacifically. You are the best of your profession after all... are you not?” you pause, shocked. <br> "I am, thank you!" you say bowing your head a little, flattered. <br> "You should tell her in person," commented Psilós roughly. <br> "Private!" shouted Dori, "Mind your manors!"');
    }else{
      $('#scenetext').html('"I' + am  +'... not in any trouble... right?" You ask timidly. <br> “No your not in trouble”, the dwarf says with a smile, “although, she thinks of you quite admirably, she asked for you spacifically. You are the best of your craft after all... are you not?” you pause, flattered. <br> "I am, thank you!" you say bowing your head a little. <br> "You should tell her in person," commented Psilós roughly. <br> "Private!" shouted Dori, "Mind your manors!"');
    }
  }else{
     if (player.character == 'MDA' || player.character == 'FDM' || player.character == 'MES'){
      $('#scenetext').html('"Your not here because I did anything wrong... right?" You ask, your heart racing. If they are after you for what you' + have +' done... <br> "Oh no, you' + are + ' fine," the dwarf says with a smile, “although, The Dragon Dutchess thinks of you quite admirably, she asked for you spacifically. You are the best of your profession after all... are you not?” you pause, shocked. <br> "I am, thank you!" you say bowing your head a little, flattered. <br> "You should tell her in person," commented Psilós roughly. <br> "Private!" shouted Dori, "Mind your manors!"');
    }else{
      $('#scenetext').html('"I' + am  +'... not in trouble... right?" You ask timidly. <br> “No your not in trouble”, the dwarf says with a smile, “although, she thinks of you quite admirably, she asked for you spacifically. You are the best of your craft after all... are you not?” you pause, flattered. <br> "I am, thank you!" you say bowing your head a little. <br> "You should tell her in person," commented Psilós roughly. <br> "Private!" shouted Dori, "Mind your manors!"');
    }
  }
   if (didntDoIt == true && info == true){
    $('#question').html('What do you do? Go');
  }else{
    $('#question').html('(Dialoge) What do you do? Go or "Dragon Dutchess"');
  }

}

function scene86Answer(answer){
   if (answer != 'Go' && answer != 'Dragon Dutchess?'){
        $('#message').html('That is' + not +' an option');
  }
  if (answer == 'Go'){
    scene87();
  }else if (answer == 'Dragon Dutchess'){
    scene85();
  }
}

//go
function scene87(){
  currentScene = 87;
  if (x <= player.charisma){
    $('#scenetext').html('"Lets go!" You say enthusiatically. "Just let me change into something more... presentable, ok?" they nod, and you gingerly shut the door.');
  }else{
    $('#scenetext').html('"Give me a minute" You say, overwhelmed. You take a deep breath. "Ok," you say, unsure. "Just let me change into something more... presentable, ok?" they nod, and you gingerly shut the door.');
  }
  $('#question').html('What do you do? Get Ready, Escape');
}

function scene87Answer(answer){
  if (answer != 'Get Ready' && answer != 'Escape'){
    $('#message').html('That is' + not +' an option');
  }
  if (answer == 'Get Ready'){
    scene88();
  }else if (answer == 'Escape'){
    scene89();
  }
}

//Get Ready
function scene88(){
  currentScene = 88;
  LP = Number(LP) + 5;
  updateStats();
  var hunger = true;
  if (player.race == 'dragonhalf'){
    $('#scenetext').html('You quickly run into the kitchen, grabbing the closest food item as you gather your gear. This time, it happened to be some steak strips from your meal the night before. Its not much, but it' + will + ' suffice for now. You get dressed, grabbing your light chainmail, extra knifes and other items you might need, and open back the door. Psilós and Dori, were waiting paitently for you. <br> "Lets go!" you say with enthusiasam. "Take me to her!" And with that, and a sigh from Psilós, they lead you away. <p> Your current LP (Level Points) count is ' + LP + '!');
  }else if (player.character != 'FDC'){
    $('#scenetext').html('You quickly run into the kitchen, grabbing the closest food item as you gather your gear. This time, it happened to be some scrap bread from your meal the night before. Its not much, but it' + will + ' suffice for now. You get dressed, and quickly gather what items you might need, and open back the door. Psilós and Dori, were waiting paitently for you. <br> "Lets go!" you say with enthusiasam. "Take me to her!" And with that, and a sigh from Psilós, they lead you away. <p> Your current LP (Level Points) count is ' + LP + '!');
  }else{
    $('#scenetext').html('You quickly run into the kitchen, grabbing the closest food item as you gather your gear. This time, it happened to be some scrap bread from your meal the night before. Its not much, but it' + will + ' suffice for now. You get dressed, putting on your heavy armor, throwing your shield over your shoulder, and grabbed your helmet. Its probably best to make a grand appearance to someone of such high stature. You walk back to the door, and open it. Psilós and Dori, were waiting paitently for you. <br> "Lets go!" you say with enthusiasam. "Take me to her!" And with that, and a sigh from Psilós, they lead you away. <p> Your current LP (Level Points) count is ' + LP + '!');
  }
  $('#question').html('Type "Enter" to go to level select!');
}

function scene88Answer(answer){
  levelSelect();
}

//Escape!
function scene89(){
  currentScene = 89;
  LP = 13;
  updateStats();
    $('#scenetext').html('You look around desprately. Theres gotta be a way out! Whatever the Dragon Dutchess wants from you, cannot be good. Somethings not right. Your eyes land on a window with the sun trickling through the curtians. That' + will + ' work! You grab your gear, and making your way to the window. You carefully crack open the window, and slipped outside. <br> "Hey!" someone shouted, making you sprint into the distance. <p> Your current LP (Level Points) count is ' + LP + '! <p> Note: You may have lost some LP points in this desistion! Do' + not + ' worry though, you will be able to get them back.');
  $('#question').html('Type "Enter" to go to level select!');
}

function scene89Answer(answer){
  levelSelect();
}
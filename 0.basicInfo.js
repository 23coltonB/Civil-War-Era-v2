
/* functions for basic info */

function scene1() {
  currentScene = 1;
  $('#scenetext').html('<h1>Welcome to Civil Era</h1><img src="images/scene1.jpg">');
  $('#question').html('Have you played this before? y or n');
}
function scene1Answer(answer) {
  if (answer == 'n') {
    scene2();
  }
  else if (answer == 'y') {
    scene3();
  }
  else {
    $('#message').html('<strong>Please enter y or n.</strong>');
  }
}

function scene2() {
  currentScene = 2;
  $('#question').html('Would you like to know how to play before you start? y or n');
}
function scene2Answer(answer) {
  if (answer == 'n') {
    scene5();
  }
  else if (answer == 'y') {
    scene4();
  }
  else {
    $('#message').html('<strong>Please enter y or n.</strong>');
  }
}

function scene3() {
  currentScene = 3;
  $('#question').html('Would you still like a quick refreasher as to how to play? y or n');
}
function scene3Answer(answer) {
  if (answer == 'n') {
    scene5();
  }
  else if (answer == 'y') {
    scene4();
  }
  else {
    $('#message').html('<strong>Please enter y or n.</strong>');
  }
}

function scene4() {
  currentScene = 4;
  $('#scenetext').html('This is a simple game where you type what actions you would like to do, in the action bar. There will be several timelines you can go through. There is about [insert number here] timelines you can go through. There is currently no save option, so try to play to the end until I can see if I can get one in later updates. There are six characters you can choose from, each one with specialties with different stats, [Stealth, melee, ranged, dodge, charisma, magic, perseption, wisdom, health, and armor], like for example, the MDA, or the Male Dragonhalf Assasain, has a specialty stat for charisma, and stealth, while FEM, or Female Elf Marksmen, has a specialty stat of range attacks and perseption. Later in the game, you will be able to see these stats by printing \'stats\' when prompted. Also, you may be able to train stats later in the game, to increase your stats. Thats basiclly it. Thank you for playing and have fun!<br /><br />- Colton Bennett, Developer<br /><img src="images/colton-bennett.jpg" />');
  $('#question').html('Click button to continue.');
}
function scene4Answer(answer) {
  scene5();
}

function scene5() {
  currentScene = 5;
  $('#scenetext').html('Please specify the name of your character.');
  $('#question').html('What would you like to be called?');
}
function scene5Answer(answer){
  player.name = answer;
  scene6();
}
function scene6(){
  currentScene = 6;
  $('#scenetext').html('Welcome ' + player.name + '! <br> Please pick your character. <br> <br> Female Elf Marksmen (FEM),' + 
  '<br> Male Dragonhalf Assasain (MDA)' +
  '<br> Male Human Wizard (MHW)' + 
  '<br>Female Dwarf Crusader (FDC)' + 
  '<br> Female Dragonhalf Mercenary (FDM)' +
  '<br> Male Elf Sniper (MES)');
  $('#question').html('Please enter your character code.');
}
function scene6Answer(answer){
  if (answer != "FEM" && answer != "MDA" && answer != "MHW" && answer != 'FDC' && answer != 'FDM' && answer != 'MES'){
    $('#message').html('Please enter the three character code.');
    return;
  }
  if (answer == 'FEM'){
    player.sex = 'female';
    player.character = 'FEM';
    player.race = 'elf';
    player.weapons = 'bow';
    player.twoWeapons = 'knife';
    player.stealth = 30;
    player.speed = 40;
    player.strength = 25;
    player.accuracyR = 50;
    player.accuracyM = 33;
    player.dodge = 35;
    player.randomCrit = [5,4,3,2,1];
    player.charisma = 30;
    player.perseption = 55;
    player.wisdom = 30;
    player.magic = 0;
    player.armor = 15;
    player.enemyE = 0;   
  }
    if (answer == 'MDA'){
    player.sex = 'male';
    player.character= 'MDA';
    player.race = 'Dragonhalf';
    player.weapons = 'rapier';
    player.twoWeapons = 'parrying dagger';
    player.stealth = 40;
    player.speed = 45;
    player.strength = 55;
    player.accuracyR = 35;
    player.accuracyM = 50;
    player.dodge = 40;
    player.randomCrit = [5,4,3,2,1];
    player.charisma = 55;
    player.perseption = 45;
    player.wisdom = 40;
    player.magic = 0;
    player.armor = 20;
    player.enemyE = 50;   
  }
    if (answer == 'MHW'){
    player.sex = 'male';
    player.character = 'MHW';
    player.race = 'human';
    player.weapons = 'magic staff';
    player.stealth = 10;
    player.speed = 50;
    player.strength = 5;
    player.accuracyR = 65;
    player.accuracyM = 40;
    player.dodge = 35;
    player.randomCrit = [5,4,3,2,1];
    player.charisma = 20;
    player.perseption = 65;
    player.wisdom = 30;
    player.magic = 40;
    player.armor = 15;
    player.enemyE = 20;   
  }
    if (answer == 'FDC'){
    player.sex = 'female';
    player.character = 'FDC';
    player.race = 'dwarf';
    player.weapons = 'war axe';
    player.stealth = 5;
    player.speed = 25;
    player.strength = 60;
    player.accuracyR = 0;
    player.accuracyM = 60;
    player.dodge = 10;
    player.randomCrit = [5,4,3,2,1];
    player.charisma = 60;
    player.perseption = 50;
    player.wisdom = 30;
    player.magic = 0;
    player.armor = 40;
    player.enemyE = 50;   
  }
    if (answer == 'FDM'){
    player.sex = 'female';
    player.character = 'FDM';
    player.race = 'dragonhalf';
    player.weapons = 'sword';
    player.stealth = 40;
    player.speed = 45;
    player.strength = 55;
    player.accuracyR = 35;
    player.accuracyM = 60;
    player.dodge = 50;
    player.randomCrit = [5,4,3,2,1];
    player.charisma = 60;
    player.perseption = 50;
    player.wisdom = 40;
    player.magic = 0;
    player.armor = 25;
    player.enemyE = 50;   
  }
    if (answer == 'MES'){
    player.sex = 'male';
    player.character = 'MES';
    player.race = 'elf';
    player.weapons = 'crossbow';
    player.stealth = 35;
    player.speed = 30;
    player.strength = 20;
    player.accuracyR = 60;
    player.accuracyM = 10;
    player.dodge = 35;
    player.randomCrit = [5,4,3,2,1];
    player.charisma = 20;
    player.perseption = 65;
    player.wisdom = 30;
    player.magic = 0;
    player.armor = 15;
    player.enemyE = 25;   
  }
  scene7();
}
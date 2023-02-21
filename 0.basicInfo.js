/* functions for basic info */

function scene1() {
  player ={
    name:'',
    character: '',
    race: '',
    sex:'',
    health: 100,
    weapons: '',
    secondary: '',
    stealth: 0,
    speed: 0,
    strength: 0,
    accuracyR: 0,
    accuracyM: 0,
    dodge: 0,
    randomCrit: 0,
    charisma: 0,
    perseption: 0,
    wisdom: 0,
    magic: 0,
    armor: 0,
    enemyE: 0
  };
  updateStats();
  currentScene = 1;
  $('#scenetext').html('<h1>The Second Civil Era</h1><img src="images/scene1.jpg">');
  $('#question').html('Have you played this before? y or n');
}
function scene1Answer(answer) {
  if (answer == 'n') {
    scene2();
  }
  else if (answer == 'y') {
    scene3();
  }else {
    $('#message').html('<strong>Please enter y or n.</strong>');
  }
    $('#message').html('');
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
    $('#message').html('');
}

function scene3() {
  currentScene = 3;
  $('#question').html('Would you still like a quick refreasher as to how to play? y or n');
LP = 0;
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
    $('#message').html('');
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
  if (answer == '' || answer == ' '){
    $('#message').html('Please type a name you would like to be called.');
    return;
  }else{
  player.name = answer;
  scene6();
    $('#message').html('');
  }
}
function scene6(){
  currentScene = 6;
  updateStats();
  $('#scenetext').html('Welcome ' + player.name + '! <br> Please pick your character. <br> <br> Female Elf Marksmen (FEM),' + 
  '<br> Male Dragonhalf Assasain (MDA)' +
  '<br> Male Human Wizard (MHW)' + 
  '<br>Female Dwarf Crusader (FDC)' + 
  '<br> Female Dragonhalf Mercenary (FDM)' +
  '<br> Male Elf Sharpshooter (MES)');
  $('#question').html('Please enter your character code.');
}
function scene6Answer(answer){
  if (answer != "FEM" && answer != "MDA" && answer != "MHW" && answer != 'FDC' && answer != 'FDM' && answer != 'MES' && answer != 'Stest' && answer != 'Ftest'){
    $('#message').html('Please enter the three character code.');
    return;
  }
    if (answer == 'Ftest'){
    player.sex = 'male';
    player.character = 'test';
    player.race = 'human';
    player.weapons = 'right hand';
    player.secondary = 'left hand';
    player.stealth = 0;
    player.speed = 0;
    player.strength = 0;
    player.accuracyR = 0;
    player.accuracyM = 0;
    player.dodge = 0;
    player.randomCrit = 0;
    player.charisma = 0;
    player.perseption = 0;
    player.wisdom = 0;
    player.magic = 0;
    player.armor = 0;
    player.enemyE = -50;   
  }
      if (answer == 'Stest'){
    player.sex = 'female';
    player.character = 'test';
    player.race = 'human';
    player.weapons = 'right hand';
    player.secondary = 'left hand';
    player.stealth = 100;
    player.speed = 100;
    player.strength = 100;
    player.accuracyR = 100;
    player.accuracyM = 100;
    player.dodge = 100;
    player.randomCrit = 100;
    player.charisma = 100;
    player.perseption = 100;
    player.wisdom = 100;
    player.magic = 100;
    player.armor = 100;
    player.enemyE = 100;   
  }
  if (answer == 'FEM'){
    player.sex = 'female';
    player.character = 'FEM';
    player.race = 'elf';
    player.weapons = 'bow';
    player.secondary = 'knife';
    player.stealth = 40;
    player.speed = 50;
    player.strength = 35;
    player.accuracyR = 60;
    player.accuracyM = 43;
    player.dodge = 45;
    player.randomCrit = 5;
    player.charisma = 40;
    player.perseption = 65;
    player.wisdom = 40;
    player.magic = 0;
    player.armor = 25;
    player.enemyE = 0;   
  }
    if (answer == 'MDA'){
    player.sex = 'male';
    player.character= 'MDA';
    player.race = 'Dragonhalf';
    player.weapons = 'rapier';
    player.secondary = 'parrying dagger';
    player.stealth = 50;
    player.speed = 55;
    player.strength = 65;
    player.accuracyR = 45;
    player.accuracyM = 60;
    player.dodge = 50;
    player.randomCrit = 5;
    player.charisma = 65;
    player.perseption = 55;
    player.wisdom = 50;
    player.magic = 0;
    player.armor = 30;
    player.enemyE = 50;   
  }
    if (answer == 'MHW'){
    player.sex = 'male';
    player.character = 'MHW';
    player.race = 'human';
    player.weapons = 'magic staff';
    player.secondary = 'no secondary';
    player.stealth = 15;
    player.speed = 60;
    player.strength = 15;
    player.accuracyR = 75;
    player.accuracyM = 50;
    player.dodge = 45;
    player.randomCrit = 5;
    player.charisma = 30;
    player.perseption = 75;
    player.wisdom = 40;
    player.magic = 50;
    player.armor = 15;
    player.enemyE = 10;   
  }
    if (answer == 'FDC'){
    player.sex = 'female';
    player.character = 'FDC';
    player.race = 'dwarf';
    player.weapons = 'war axe';
    player.secondary = 'great sheild';
    player.stealth = 5;
    player.speed = 25;
    player.strength = 60;
    player.accuracyR = 0;
    player.accuracyM = 60;
    player.dodge = 10;
    player.randomCrit = 5;
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
    player.secondary = 'no secondary';
    player.stealth = 50;
    player.speed = 55;
    player.strength = 65;
    player.accuracyR = 45;
    player.accuracyM = 70;
    player.dodge = 60;
    player.randomCrit = 5;
    player.charisma = 70;
    player.perseption = 60;
    player.wisdom = 50;
    player.magic = 0;
    player.armor = 35;
    player.enemyE = 50;   
  }
    if (answer == 'MES'){
    player.sex = 'male';
    player.character = 'MES';
    player.race = 'elf';
    player.weapons = 'crossbow';
    player.secondary = 'no secondary';
    player.stealth = 45;
    player.speed = 40;
    player.strength = 30;
    player.accuracyR = 80;
    player.accuracyM = 15;
    player.dodge = 45;
    player.randomCrit = 5;
    player.charisma = 30;
    player.perseption = 75;
    player.wisdom = 40;
    player.magic = 0;
    player.armor = 25;
    player.enemyE = 50;   
  }
  updateStats();
    $('#message').html('');
    scene7();
}
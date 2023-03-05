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
  scene1Question();
  $('#scenetext').html('<h1>The Second Civil Era</h1><img src="images/scene1.jpg">');
  $('#question').html('Have you played this before? y or n');
}

function scene1Answer(options) {
  switch (options) {
    case 'Yes':
      // call the game function for Option A
      scene2();
      break;
    case 'No':
      scene3();
      break;
  }
}


function scene2() {
  currentScene = 2;
  scene2Question();
  $('#question').html('Would you like a quick refresher as to how to play? y or n');
}

function scene2Answer(options) {
  switch (options) {
    case 'Yes':
      // call the game function for Option A
      scene3();
      break;
    case 'No':
      scene4();
      break;
  }
}

function scene3() {
  currentScene = 3;
  scene3Question();
  $('#scenetext').html('This is a simple game where you type what actions you would like to do, in the action bar. There will be several timelines you can go through. There is about [insert number here] timelines you can go through. There is currently no save option, so try to play to the end until I can see if I can get one in later updates. There are six characters you can choose from, each one with specialties with different stats, [Stealth, melee, ranged, dodge, charisma, magic, perseption, wisdom, health, and armor], like for example, the MDA, or the Male Dragonhalf Assasain, has a specialty stat for charisma, and stealth, while FEM, or Female Elf Marksmen, has a specialty stat of range attacks and perseption. Later in the game, you will be able to see these stats by printing \'stats\' when prompted. Also, you may be able to train stats later in the game, to increase your stats. Thats basiclly it. Thank you for playing and have fun!<br /><br />- Colton Bennett, Developer, Idiot<br /><img src="images/colton-bennett.jpg" />');
  $('#question').html('Click button to continue.');
}

function scene3Answer(options) {
  switch (options) {
  case 'Go':
    // call the game function for Option A
    scene4();
    break;
  }
}

function scene4(){
  currentScene = 4;
  updateStats();
  $('#scenetext').html('Please pick your character. <br> <br> Arden, a Female Elf Marksmen (FEM),' + 
  '<br> Riven, a Male Dragonhalf Assasain (MDA)' +
  '<br> Thoth, a Male Human Wizard (MHW)' + 
  '<br> Brynja, Female Dwarf Crusader (FDC)' + 
  '<br> Vritra, a Female Dragonhalf Mercenary (FDM)' +
  '<br> Axl, Male Elf Sharpshooter (MES)');
  $('#question').html('Press the button with the characters name.');
  scene4Question();
}

function scene4Answer(options){
  switch (options) {
  case 'FT':
    // call the game function for Option A
    player.name = 'Failure'
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
    updateStats();
    scene7();
    break;
      
  case 'ST':
    
    player.name = 'Success'
    player.sex = 'female';
    player.character = 'test';
    player.race = 'human';
    player.weapons = 'right hand';
    player.secondary = 'left hand';
    player.stealth = 150;
    player.speed = 150;
    player.strength = 150;
    player.accuracyR = 150;
    player.accuracyM = 150;
    player.dodge = 150;
    player.randomCrit = 150;
    player.charisma = 150;
    player.perseption = 150;
    player.wisdom = 150;
    player.magic = 150;
    player.armor = 150;
    player.enemyE = 10;
    updateStats();
    scene7();
    break;
      
  case 'Arden':
    
    player.name = 'Arden';
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
    updateStats();
    scene7();
    break;

  case 'Riven':
    player.name = 'Riven';
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
    updateStats();
    scene7();  
    break;
      
  case 'Thoth':
    player.name = 'Thoth';
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
    updateStats();
    scene7();
    break;
      
  case 'Brynja':
  player.name = 'Brynja';
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
    updateStats();
    scene7();
    break;

  case 'Virtra':
    player.name = 'Virtra';
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
    updateStats();
    scene7();
    break;
      
  case 'Axl':
    player.name = 'Axl';
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
    updateStats();
    scene7();
    break;
  }
}
/* Global Variables */
var currentScene = 1;
var player = {
  name:'none',
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
var not = "n't"
var will = "'ll"
var would = "'d"
var have = "'ve"
var is = "'s"
var are = "'re"
var am = "'m"
// options array
var options;
var newOptions;
// Variables for Chapter 1
//use functions scene25-29(); for any extra random functions that don't have anything to do with the other code. Or save them for when I want to work on further scenes on Barricade.js
var enemy = 3;
var secretWeapon = 0;
var demo = false;
var weak = false;
var trapSet = false;
var prepared = false;
var armed = false;
var miss = false;
var harm = false;
var guardCount = 2;
var nextToGuard = false;
var hidden = false;
var smart = false;
var onTheFloor = false;
var dwarfSeen = false;
var pray = false;
var racist = false;
var harmToGuard = false;
var scar = false;
var noseBroke = false;
var injured = false;
var injuredLeg = false;
var notSmart = false;
//chapter 1 ending varuables
var sleep = false;
var End = false;
//side Quest varubales
var info = false;
var didntDoIt = false;

//awards system
var awards = {
  caring: 'Not Found!',
  Mr_Resistant: 'Not Found!',
  newAward2: 'Not Found!',
  newAward3: 'Not Found!',
  newAward4: 'Not Found!'
};



//Level Point System//
var LP = 0;
/* Chapter truths*/
var chapter2 = false;
var chapter1_sidequest1 = false;
var chapter1_sidequest2 = false;  
var chapter1_sidequest3 = false;
/*randomizer function*/
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const rndInt = randomIntFromInterval(1, 100)
var x = rndInt;
/* Core functio to route to answer function */ 
function handleAnswer(answer) {
  console.log('Processing answer for scene: ' + currentScene);
  // varuable reset functions
    function varReset(){
    //chapter 1 varuables
    enemy = 3;
    scenex = 0;
    weak = false;
    trapSet = false;
    prepared = false;
    armed = false;
    miss = false;
    harm = false;
    guardCount = 2;
    nextToGuard = false;
    hidden = false;
    smart = false;
    onTheFloor = false;
    dwarfSeen = false;
    pray = false;
    racist = false;
    harmToGuard = false;
    scar = false;
    noseBroke = false;
    injured = false;
    injuredLeg = false;
    notSmart = false;
  }
  
  //reset game function
  if (answer == 'quitgame') {
    varReset();
    scene1();
    return;
  }
  // Demo activate and deactivate
  if (answer == 'aDemo'){
    if (demo == false){
    demo = true;
    $('#message').html('Demo Active');
    scene1();
    return;
    }
  }
  if (answer == 'dDemo'){
      if (demo == true){
      demo = false;
      $('#message').html('Demo Deactivated');
      scene1();
      return;
    }
  }
  
  let sceneFunctionName = 'scene' + currentScene + 'Answer';
  console.log('Calling function ' + sceneFunctionName + ' with answer: ' + answer);
  window[sceneFunctionName](answer);
}
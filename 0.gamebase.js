/* Global Variables */
var currentScene = 1;
var player = {
  name:'',
  character: '',
  race: '',
  sex:'',
  health: 100,
  weapons: '',
  twoWeapons: '',
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
// Variables for Chapter 1
//use functions scene25-29(); for any extra random functions that don't have anything to do with the other code. Or save them for when I want to work on further scenes on Barricade.js
var enemy = 3;
var demo = true;
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
var x = rndInt
console.log(x)
/* Core functio to route to answer function */ 
function handleAnswer(answer) {
  console.log('Processing answer for scene: ' + currentScene);
  if (answer == 'quitgame') {
    scene1();
    return;
  }
  let sceneFunctionName = 'scene' + currentScene + 'Answer';
  console.log('Calling function ' + sceneFunctionName + ' with answer: ' + answer);
  window[sceneFunctionName](answer);
}
// wire
// wire go button to call handleAnswer when clicked and reset input box
$('#answerForm').submit(function (e) {
  e.preventDefault();
  handleAnswer($('#answer').val()); // pass answer to handleAnswer
  $('#answer').val(''); // clear answer
});
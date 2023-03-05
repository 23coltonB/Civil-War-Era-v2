/* functions for part one of chapter 1 */
function scene7() {
  // document.getElementById("display").innerHTML = player;
  updateStats();
  currentScene = 7;
  if (x <= player.perseption){
    $('#scenetext').html('You jolt awake at a small noise that echos thow the halls, it sounds like someone dropped something matalic, and footsteps approaching you.');
  }else{
    $('#scenetext').html('You jolt awake at a small noise that echos thow the halls');
  }
  $('#question').html('What would you like to do? <br> <br> Hide, Investigate, Return to Sleep (Sleep), or Barricade?');
  scene7Question();
}

function scene7Answer(options) {
  switch (options) {
  case 'Hide':
    scene8();
    break;
      
  case 'Sleep':
    scene9();
    break;
      
  case 'Investigate':
    scene10();
    break;

  case 'Barricade':
    scene11();  
    break;
  }
}

/* functions for part one of chapter 1 */

function scene7() {
  currentScene = 7;
  if (x <= player.perseption){
    $('#scenetext').html('You jolt awake at a small noise that echos thow the halls, it sounds like someone dropped something matalic, and footsteps approaching you.');
  }else{
    $('#scenetext').html('You jolt awake at a small noise that echos thow the halls');
  }
  $('#question').html('What would you like to do? <br> <br> Hide, Investigate, Return to Sleep (Sleep), or Barricade?');
}
function scene7Answer(answer) {
  if (answer != 'Hide' && answer != 'Investigate' && answer != 'Sleep' && answer != 'Barricade'){
    $('#message').html('Please enter one of the given options.');
    return;
  }else{
    $('#message').html('')
    if (answer == 'Hide'){
      scene8();
    }
    if (answer == 'Sleep'){
      scene9();
    }
    if (answer == 'Investigate'){
      scene10();
    }
    if (answer == 'Barricade'){
      scene11();
    }
  }
    $('#message').html('');
}
function scene9(){
  currentScene = 9;
  if (weak == false){
  LP = Number(LP) + 25;
    updateStats();
  $('#scenetext').html('You turn over in your bed. No ones coming for you, so you should be fine. You slowly fall back to sleep as you hear the door quitely open.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
   $('#question').html('Type "Enter"  to go to Level Select');
  sleep = true;
  }else{
      LP = Number(LP) + 25;
    updateStats();
  $('#scenetext').html('Frustrated, you turn around and flop into your bed. No ones coming for you, so you should be fine, its just some drunkards finally getting home late at night. You slowly fall back to sleep as you hear the door quitely open.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
   $('#question').html('Type "Enter"  to go to Level Select');
  sleep = true;
  }
}
  
function scene9Answer(answer){
    levelSelect();
}
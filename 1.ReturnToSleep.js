function scene9(){
  currentScene = 9;
  LP = Number(LP) + 10;
  $('#scenetext').html('You turn over in your bed. No ones coming for you, so you should be fine. You slowly fall back to sleep as you hear the door quitely open.<br> <br> Your current LP (Level Points) count is ' + LP + '!');
   $('#question').html('Press Enter to go to Level Select');
  //var sleep = true;
}

function scene9Answer(answer){
    if (answer == 'Enter'){
    levelSelect();
  }else{
    $('#message').html('Type "Enter" instead');
    return;
  }
}


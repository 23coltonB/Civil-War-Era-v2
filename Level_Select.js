function levelSelect(){
    var chapter2 = false;
    var chapter1_sidequest1 = false;
    var chapter1_sidequest2 = false;
    var chapter1_sidequest3 = false;
    var a = 10 - LP;
    var b = 17 - LP;
    var c = 15 - LP;
    var d = 13 - LP;
    if (a < 0){
     a = a * -1;
    }
    if (b < 0){
      b = b * -1;
    }
    if (c < 0){
      c = c * -1;
    }
    if (d < 0){
      d = d * -1;
    }
    if (demo == true){
    $('#scenetext').html('Thank you for playing! That is all I have at the moment, graphics are on the way as soon as I complete the rest of the code. If you would like to try other choices throughout the game, fill free to refresh the page! <br> Thank you! <br> Colton Bennett the Developer');
    }else{
    if (LP < 18){
    if (LP > 0){
        //running away
        if (LP ==13){
          //scene70();
          chapter1_sidequest1 = true;
        }
        //freindly capture
        if (LP == 10){
          //scene110();
          chapter2 = true;
        }
        //Communication
        if (LP == 15){
          //scene81();
          chapter1_sidequest2 = true;
        }   
        // enemy capture
        if (LP == 17){
          //scene90;
          chapter1_sidequest3 = true;
        }
        if (chapter2 == true){
        $('#scenetext').html('Chapter 2 is now unlocked <br> Side quest 1 is locked, you need ' + d + ' more. <br> Side quest 2 is locked you need ' + c + ' more. <br> Side quest 3 is locked you need ' + b +  ' more.');
        }
        if (chapter1_sidequest1 == true){
        $('#scenetext').html('Chapter 2 is locked, you need ' + a +' more! <br> Side quest 1 is now unlocked <br> Side quest 2 is locked you need ' + c + ' more. <br> Side quest 3 is locked you need ' + b +  ' more.');
        }
        if (chapter1_sidequest2 == true){
        $('#scenetext').html('Chapter 2 is locked, you need '+ a +' more! <br> Side quest 1 is locked, you need ' + d + ' more. <br> Side quest 2 is now unlocked <br> Side quest 3 is locked you need ' + b +  ' more.');
        }
        if (chapter1_sidequest3 == true){
        $('#scenetext').html('Chapter 2 is locked, you need ' + a + ' more! <br> Side quest 1 is locked, you need ' + d + ' more. <br> Side quest 2 is locked you need ' + c + ' more. <br> Side quest 3 is now unlocked');
        }
        $('#question').html('Please type the level choice you need.');
      }else{
        $('#scenetext').html('Sorry! You don' + not + ' have enough LP to go to any of the next levels! Try again!');
        $('#question').html('Press Enter to return to the beginning.');
      }
    }else{
      //chapter 2 select
    }
  }
}

function levelSelectAnswer(answer){
  if (answer != 'Chapter2' && answer != 'Side quest 1' && answer != 'Side quest 2' && answer != 'Side quest 3'){
    $('#message').html('Please select one of the options available to you!');
  }else{
  if (answer == 'Chapter2'){
    if (LP == 10){
    scene110();
    }else{
      $('#message').html('You don' + not + ' enough LP');
    }
  }
  if (answer == "Side quest 1"){
    if (LP == 13){
      scene70();
    }else{
      $('#message').html('You don' + not + ' enough LP');
    }
  }
    if (answer == "Side quest 2"){
      if (LP == 15){
    scene81();
      }else{
        $('#message').html('You don' + not + ' enough LP');
      }
    }
    if (answer == "Side quest 3"){
      if (LP == 17){
        scene90();
      }else{
        $('#message').html('You don' + not + ' enough LP');
    }
  }
}
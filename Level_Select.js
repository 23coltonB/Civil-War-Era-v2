function levelSelect(){
  if (demo == true) {
    $('#scenetext').html('Thank you so much for testing or running through my game. There is plenty more on the way including the second Chapter, graphics and so much more! Fill free to replay this as many times as you want, to see multipole perspectives, endings, ect. <p> Your total score was ' + LP +' out of 25, with you playing as ' + player.character +'. Thanks for playing!');
    $('#question').html('Please type "quitgame" into the answer bar to go to the beginning!');
  }else{
      End = false;
    //Chapter 1 options
    if (LP <= 15){
      if (LP == 25){
        //sleep funnel (Escort)
        chapter1_sidequest1 = true;
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <br> Escort sidequest unlocked. <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        levelSelectAnswer($('#answer').val());
        $('#question').html('Type Escort to continue the story.');
      }else if (LP == 30){
        //side quest funnel (chapter 2)
        chapter2 = true;
        $('#scenetext').html('Welcome to Level Select! <p> Congragulations! You have unlocked Chapter 2! <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        levelSelectAnswer($('#answer').val());
        $('#question').html('Type Chapter 2 to continue the story.');
      }
      if (LP == 20){
        //hidden funnel (Escort)
        chapter1_sidequest1 = true;
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <p> Escort sidequest unlocked. <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        levelSelectAnswer($('#answer').val());
        $('#question').html('Type Escort to continue the story.');
      }
      if (LP == 17){
        //enemy capture funnel (CaptureByEnemyEscort)
        chapter1_sidequest2 = true;
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <p> Captured sidequest unlocked. <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        levelSelectAnswer($('#answer').val());
        $('#question').html('Type Captured to continue the story.');
      }
      if (LP == 15){
        //communication funnel (Escort)
        chapter1_sidequest1 = true;
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <p> Escort sidequest unlocked. <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        levelSelectAnswer($('#answer').val());
        $('#question').html('Type Escort to continue the story.');
      }
    }else{
      if (LP == 13){
        //freindly chase funnel (Flee_OntoCapture)
        chapter1_sidequest3 = true;
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <p> Flee sidequest unlocked. <br> current awards encountered: <br>  Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        levelSelectAnswer($('#answer').val());
        $('#question').html('Type Flee to continue the story.');
      }
      if (LP == 10){
        //freindly capture funnel (Chapter 2 (Capture))
        chapter2 = true;
        $('#scenetext').html('Welcome to Level Select! <p> Congragulations! You have unlocked Chapter 2! <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        levelSelectAnswer($('#answer').val());
        $('#question').html('Type Chapter 2 to continue the story.');
      }
      if (LP == 5){
        //evasion funnel (Flee_OntoCapture)
        chapter1_sidequest3 = true;
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <p> Flee sidequest unlocked. <br> current awards encountered: <br>  Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        levelSelectAnswer($('#answer').val());
        $('#question').html('Type Flee to continue the story.');
      }
    }
  }
}

function levelSelectAnswer(answer){
  if (answer != 'Enter' && answer != 'Flee' && answer != 'Chapter 2' && answer != 'Escort' && answer != 'Captured'){
    $('#message').html('Please type one of the answers');
  }else{
    if (answer === 'Escort'){
      if (chapter1_sidequest1 == true){
        scene81();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Flee'){
      if (chapter1_sidequest3 == true){
        scene70();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Captured'){
      if (chapter1_sidequest2 == true){
        scene90();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    if (answer == 'Chapter 2'){
      if (chapter2 == true){
        scene110();
      }else{
        $('#message').html('Please type one of the options');
      }
    }
    $('#message').html('');
  }
}
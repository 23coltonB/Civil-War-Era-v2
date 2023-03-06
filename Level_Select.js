function levelSelect300(){
  currentScene = 300;
  console.log("levelSelect300 function called");
  //if demo is active
  if (demo == true){
     $('#scenetext').html('Thank you so much for running through my game. There is plenty more on the way including the second chapter, graphics and so much more! Fill free to replay this as many times as you want, to see multipole perspectives, endings, ect. <p> Your total score was ' + LP +' out of 25, with you playing as ' + player.character +'. Thanks for playing! <p> The game will reset shortly.');
    $('#question').html('');
    setTimeout(reload, 5000);
  }else{
    if (LP > 30){
      
    }else{
      if (LP == 30 || LP == 10){
        //chapter 2 funnel 30 == regular meeting, 10 == captured to meeting
        chapter2 = true;
        levelSelect300QuestionA();
        $('#scenetext').html('Welcome to Level Select! <p> Congratulations! You have unlocked Chapter 2! <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        
      }else if (LP == 25 || LP == 20 || LP == 15){
        //sleep funnel (escort branch), 25 == normal sleep, 20 == hidden, 15 == communication
        chapter1_sidequest1 = true;
        levelSelect300QuestionB();
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <br> Escort sidequest unlocked. <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        
        
      }else if (LP == 17){
        //enemeys capture player (CaptureByEnemyEscort)
        chapter1_sidequest2 = true;
        levelSelect300QuestionD();
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <p> Captured sidequest unlocked. <br> current awards encountered: <br> Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
        
      }else if (LP == 13 || LP == 5){
        //freindly chase (Flee_ontoCapture), 13 == regular chase, 5 == you evaded to run away
        chapter1_sidequest3 = true;
        levelSelect300QuestionC();
        $('#scenetext').html('Welcome to Level Select! <p> You have not quite unlocked the next chapter, however  a sidequest has been unlocked! You have discovered 1/3 sidequests: Captured, Flee, and Escort. <p> Flee sidequest unlocked. <br> current awards encountered: <br>  Caring: ' + awards.caring  + '<br> Mr. Resistant: ' + awards.Mr_Resistant + '<br> award2: ' + awards.newAward2 + '<br> award3: ' + awards.newAward3 + '<br> award4: ' +awards.newAward4 + '');
      }
    }
    End = false;
    $('#question').html('Press the button to continue');
  }
}


function LevelSelect300Answer(options){
  switch (options) {
    case 'Chapter 2':
      scene110();
      break;
        
    case 'Escort':
      scene81();
      break;
        
    case 'Flee':
      scene90();
      break;

    case 'Captured':
      scene70();
      break;
  }
}

function reload(){
  LP = 0;
  scene1();
}
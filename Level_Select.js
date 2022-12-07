function levelSelect(){
  if (demo == true) {
    $('#scenetext').html('Thank you so much for testing or running through my game. There is plenty more on the way including the second Chapter, graphics and so much more! Fill free to replay this as many times as you want, to see multipole perspectives, endings, ect.');
    $('#question').html('Please type "quitgame" into the answer bar to go to the beginning!');
  }else{
    $('#scenetext').html('Demos kinda not working');
  }
}
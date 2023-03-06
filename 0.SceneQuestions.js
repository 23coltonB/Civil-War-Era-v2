//basicInfo questions
function scene1Question(){
      // options array
  var options = ["Yes", "No"];
  // get the question answer element
  var questionAnswer = document.getElementById("questionAnswer");
  
  // create a div to hold the buttons
  var buttonContainer = document.createElement("div");
  
  // add the button container to the question answer element
  questionAnswer.appendChild(buttonContainer);
  
  // loop through the options array and create a button for each option
  for (var i = 0; i < options.length; i++) {
    // create a new button element
    var button = document.createElement("button");
  
    // set the button text to the current option
    button.textContent = options[i];
  
    // add a click event listener to the button
  button.addEventListener("click", function() {
    // handle button click event here
    scene1Answer(this.textContent);
  });
  
  
  
    // add the button to the button container
    buttonContainer.appendChild(button);
  }
}

function scene2Question(){
 // options
  options = ["Yes", "No"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene2Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene3Question() {
  // options
  options = ["Go"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene3Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene4Question(){
    // options
  options = ["Virtra", "Riven", "Arden", "Axl", "Brynja", "Thoth", "FT", "ST"];
  
  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene4Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

// Chapter 1 questions

  //Intro
function scene7Question(){
      // options
  options = ["Hide", "Investigate", "Sleep", "Barricade"];
  
  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene7Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

  // sleep
function scene9Question(){
  // options
  var options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene9Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

// barricade
function scene11QuestionA(){
  options = ["Arm Yourself", "Set a Trap", "Hide Yourself"];
  
  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene11Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene11QuestionB(){
        // options
  options = ["Hide", "Investigate", "Sleep"];
  
  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene11Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene12Question(){
  // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene12Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene13QuestionC(){
    // options
  options = ["Yes", "No"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene13Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene13QuestionD(){
  // options
  options = ["Arm Yourself", "Hide"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene13Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene14Question(){
  // options
  options = ["Set a Trap", "Hide"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene14Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene15Question(){
  // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene15Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene16QuestionA(){
  // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene16Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene16QuestionB(){
    // options
  options = ["Get Away", "Persuade"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene16Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene17QuestionA(){
      // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene17Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene17QuestionB(){
      // options
  options = ["Take him with", "Wake him up", "Leave him"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene17Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene18QuestionA(){
      // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene18Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene18QuestionB(){
      // options
  options = ["Take him with", "Wake him up", "Leave him"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene18Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene19Question(){
        // options
  options = ["Yes", "No"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene19Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene20Question(){
      // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene20Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene21Question(){
        // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene21Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene22Question(){
          // options
  options = ["Take him with", "Leave him"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene22Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

// Hide

function scene8QuestionA(){
            // options
  options = ["Stay hidden", "Confront"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene8Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene8QuestionB(){
              // options
  options = ["FIGHT", "Convince"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene8Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene48Question(){
               // options
  options = ["Yes", "No"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene48Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  } 
}

function scene49Question(){
          // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene49Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene50Question(){
          // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene50Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene51QuestionA(){
                // options
  options = ["Wait", "Surpise attack", "Enter the kitchen"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene51Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene51QuestionB(){
                // options
  options = ["Surpise attack", "Enter the kitchen"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene51Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene52Question(){
                 // options
  options = ["Yes", "No"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene52Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene53Question(){
            // options
  options = ["Restart"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene53Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene54Question(){
   // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene54Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene55QuestionA(){
     // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene55Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene55QuestionB(){
     // options
  options = ["Evade and convince", "subdue", "Hold him down"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene55Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene56Question(){
       // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene56Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene57QuestionA(){
         // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene57Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene57QuestionB(){
           // options
  options = ["Yes", "No"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene57Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene58Question(){
           // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene58Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene59QuestionA(){
           // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene59Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene59QuestionB() {
             // options
  options = ["Knockout", "Convince", "Interrogate"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene59Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene60Question(){
             // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene60Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene61Question(){
               // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene61Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene62Question(){
                // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene62Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene63Question(){
                  // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene63Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene64QuestionA(){
                   // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene64Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene64QuestionB(){
                   // options
  options = ["Knockout", "Run", "Punish"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene64Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene64QuestionC(){
                   // options
  options = ["Knockout", "Run", "Ask again"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene64Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene64QuestionD(){
                   // options
  options = ["Knockout", "Run"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene64Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene65Question(){
                   // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene65Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene66Question(){
                   // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene66Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene67Question(){
                     // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene67Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene68Question(){
                       // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene68Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene69Question(){
                         // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene69Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

// Investigate
function scene10Question(){
                           // options
  options = ["Go back to sleep", "Answer"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene10Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene27Question(){
                             // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene27Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}


function scene28QuestionA(){
                              // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene28Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene28QuestionB(){
                              // options
  options = ["Combat"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene28Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene29QuestionA(){
  // options
  options = ["Attack", "Dodge and strike"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene29Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene29QuestionB(){
  // options
  options = ["Attack", "Dodge and strike", "Secret weapon"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene29Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene29QuestionC(){
  // options
  options = ["Defend", "Attack", "Defend and strike"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene29Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene29QuestionD(){
  // options
  options = ["Defend", "Attack", "Defend and strike", "Secret weapon"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene29Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene29QuestionE(){
  // options
  options = ["Magic attack", "Magic defense"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene29Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene29QuestionF(){
  // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene29Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene30Question(){
                            // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene30Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene31QuestionA(){
                              // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene31Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene31QuestionB(){
                                // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene31Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene32QuestionA(){
                                // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene32Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene32QuestionB(){
                                // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene32Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene33Question(){
                                 // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene33Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene34QuestionA(){
                                   // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene34Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene34QuestionB(){
                                     // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene34Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene35QuestionA(){
                                       // options
  options = ["Level Select"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene35Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function scene35QuestionB(){
                                        // options
  options = ["Continue"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      scene35Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

//Level Select
function levelSelect300QuestionA(){
            // options
  options = ["Chapter 2"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      LevelSelect300Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function levelSelect300QuestionB(){
            // options
  options = ["Escort"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      LevelSelect300Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function levelSelect300QuestionC(){
            // options
  options = ["Flee"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      LevelSelect300Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}

function levelSelect300QuestionD(){
            // options
  options = ["Captured"];

  // update buttons
  var buttonContainer = document.getElementById("questionAnswer");
  buttonContainer.innerHTML = "";

  // building buttons and where to put them
  for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    button.textContent = options[i];
    button.addEventListener("click", function() {
      LevelSelect300Answer(this.textContent);
    });
    buttonContainer.appendChild(button);
  }
}
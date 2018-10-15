//Game is set at 60 seconds, counting down by 1. Upon calling this function, the start page will be hidden from view and the second page with trivia questions should appear.
var gameSet = {
    timeRemaining: 60,
    startTimer: function() {
      $("#timer").text("Time remaining: " + gameSet.timeRemaining);
      setInterval(gameSet.countdown, 1000);
      $(".start-page").hide();
      $(".container").show(triviaGame.showQuestions);
    },
    //As the timer counts down, and becomes 0, the timer will stop.
    countdown: function() {
      gameSet.timeRemaining--;
      $("#timer").text("Time remaining: " + gameSet.timeRemaining);
      if (gameSet.timeRemaining === 0) {
        gameSet.stopTimer();
        $("#timer").empty();
      }
    },
    //Once timer stops, the interval will be cleared and answer checker function will start.
    stopTimer: function() {
      clearInterval();
      triviaGame.answerChecker();
    },
    //Final page will appear showing the total right, wrong, and answers left blank.
    showFinalPage: function(numCorrect, numIncorrect, numUnanswered) {
      $("#finalPage").show();
      $("#questionsArea").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#rightAnswers").text("Correct answers: " + numCorrect);
      $("#wrongAnswers").text("Incorrect answers: " + numIncorrect);
      $("#leftBlank").text("Left blank: " + numUnanswered);
    }
  };
  //variable triviaGame is defined here in which upon being activated, a header, form with questions, and answers will appear. Anwer choices will have radio capability, and checker user input storage.Questions will be taken from an array, and user answers will be appended.
  var triviaGame = {
    showQuestions: function() {
      var divContainer = $(".container", "#questionsArea","#form");
      divContainer.append(
        "<h2>Take the challenge, and answer the following questions:</h2>"
      );
      //for loop takes questions from the gameQuestions array and displays them on the screen.
      for (var i = 0; i < gameQuestions.length; i++) {
        divContainer.append(
          '<div id="questionsArea">' + gameQuestions[i].question + "</div>"
        );
  
        var answer1 = gameQuestions[i].answers[0];
        var answer2 = gameQuestions[i].answers[1];
        var answer3 = gameQuestions[i].answers[2];
        var answer4 = gameQuestions[i].answers[3];
  
        divContainer.append(
          '<div id="form" type="radio" name="radio-group' +
            i +
            '" id="radio' +
            i +
            '"><label class="form-label" id="radio' +
            i +
            'label" for="radio' +
            i +
            '">' +
            answer1 +
            "</label></div>"
        );
        divContainer.append(
          '<div id="form" type="radio" name="radio-group' +
            i +
            '" id="radio' +
            i +
            '"><label class="form-label" id="radio' +
            i +
            'label" for="radio' +
            i +
            '">' +
            answer2 +
            "</label></div>"
        );
        divContainer.append(
          '<div id="form" type="radio" name="radio-group' +
            i +
            '" id="radio' +
            i +
            '"><label class="form-label" id="radio' +
            i +
            'label" for="radio' +
            i +
            '">' +
            answer3 +
            "</label></div>"
        );
        divContainer.append(
          '<div id="form" type="radio" name="radio-group' +
            i +
            '" id="radio' +
            i +
            '"><label class="form-label" id="radio' +
            i +
            'label" for="radio' +
            i +
            '">' +
            answer4 +
            "</label></div>"
        );
      }
      //A done button will appear in which user can submit answers at the very end and the timer stops.
      var doneButton =
        '<button id="btn btn-primary" id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", gameSet.stopTimer);
    },
//Answer checker will compile the number of correct, incorrect, and unanswered according to what the user inputted (checked off) versus what was the correct answer according to the array gameQuestions.
    answerChecker: function() {
      var rightAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numUnanswered = 0;
  
      for (var i = 0; i < gameQuestions.length; i++) {
        rightAnswer = gameQuestions[i].correct;
        userAnswer = $("input[id=radio" + i + "").on("click", checked.label);
  
        if (userAnswer === rightAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numUnanswered++;
        } else if (userAnswer !== rightAnswer) {
          {
            numIncorrect++;
          }
        }
      }
      gameSet.showFinalPage(numCorrect, numIncorrect, numUnanswered);
    }
  };
  var gameQuestions = [
    {
      question:
        "What worldwide hit by Nelly Furtado was #1 on over 20 different music charts?",
      answers: [
        "'Say It Right,' with that Timbaland dude",
        "'Promiscuous,' duh",
        "Genie in a bottle,' that's Nelly, right?",
        "'I'm Like a Bird'"
      ],
      correct: "Say It Right"
    },
    {
      question:
        "What famous rapper said 'I'll take you to the candy shop..I'll let you lick the lollipop'",
      answers: [
        "Wait, who?",
        "50 cent",
        "Nelly probably did, I don't remember",
        "Beyonce rapped back then, definately"
      ],
      correct: "50 cent"
    },
    {
      question: "What band is not from the 2000s?",
      answers: [
        "Fall Out Boy",
        "Paramore",
        "Guns and Roses, they were still rockin it, right?",
        "The Killers, I think"
      ],
      correct: "Guns and Roses, they were still rocking it, right?"
    },
    {
      question: "Right Thurr-- is a hit single for what artist?",
      answers: ["Chingy", 
      "Kanye West", 
      "Ludacris", 
      "TI, he was around then...."],
      correct: "Chingy"
    },
    {
      question: "Which is not a top 2000s pop hit?",
      answers: [
        "'Gold Digger' by Kanye West",
        "'We Belong Together' by Mariah Carey",
        "'Boom Boom Pow' by the Black Eyed Peas",
        "'Trap Queen' by Fetty Wap"
      ],
      correct: "'Trap Queen' by Fetty Wap"
    },
    {
      question: "Complete the lyrics 'Shake it like a __'",
      answers: [
        "Polaroid picture",
        "Salt shacker",
        "Rattle snake",
        "Drunk in love"
      ],
      correct: "Polaroid picture"
    },
    {
      question: "What famous couple split in 2002?",
      answers: ["Britney Spears and Justin Timberlake",
      "Nick Lachey and Jessica Simpson",
      "Jennifer Lopez and Puff Daddy",
      "Who cares? You think I followed celeb couples back then."],
      correct: "Britney Spears and Justin Timberlake"
    },
    {
      question: "Who was featured on Jojo's 'Baby It's You?'",
      answers: ["Cee lo Green", 
      "Eminem", 
      "Bow wow", 
      "Nick Cannon"],
      correct: "Bow Wow"
    },
    {
      question: "Who sang the hits 'Foolish' and 'Happy'?",
      answers: ["Aaliyah", 
      "Ashanti", 
      "Mariah Carey", 
      "Paula Abdul"],
      correct: "Ashanti"
    },
    {
      question: "What Eminem album was released in 2002?",
      answers: [
        "Encore",
        "The Marshal Mathers LLP",
        "'Relapse,' that was an Eminem album, I think",
        "The Eminem Show"
      ],
      correct: "The Marshal Mathers LLP"
    }
  ];
  
  
  $(document).ready(function() {
    $("#startButton").on("click", gameSet.startTimer);
    divContainer.render();
    $(".container").render();
  });
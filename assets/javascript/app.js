var questions = [
  {
    question:
      "What worldwide hit by Nelly Furtado was #1 on over 20 different music charts?",
    answers: [
      { answer: "'Say It Right,' with that Timbaland dude", value: true },
      { answer: "'Promiscuous,' duh", value: false },
      { answer: "Genie in a bottle,' that's Nelly, right?", value: false },
      { answer: "'I'm Like a Bird'", value: false }
    ]
  },
  {
    question:
      "What famous rapper said 'I'll take you to the candy shop..I'll let you lick the lollipop'",
    answers: [
      { answer: "Wait, who?", value: false },
      { answer: "50 cent", value: true },
      { answer: "Nelly probably did, I don't remember", value: false },
      { answer: "Beyonce rapped back then, definately", value: false }
    ]
  },
  {
    question: "What band is not from the 2000s?",
    answers: [
      { answer: "Fall Out Boy", value: false },
      { answer: "Paramore", value: false },
      { answer: "Guns and Roses, they were still rockin it, right?", value: true },
      { answer: "The Killers, I think", value: false }
    ]
  },
  {
    question: "Right Thurr-- is a hit single for what artist?",
    answers: [
      { answer: "Chingy", value: true },
      { answer: "Kanye West", value: false },
      { answer: "Ludacris", value: false },
      { answer: "TI, he was around then....", value: false }
    ]
  },
  {
    question: "Which is not a top 2000s hit?",
    answers: [
      { answer: "'Gold Digger' by Kanye West", value: false },
      { answer: "'We Belong Together' by Mariah Carey", value: false },
      { answer: "'Boom Boom Pow' by the Black Eyed Peas", value: false },
      { answer: "'Trap Queen' by Fetty Wap", value: true }
    ]
  },
  {
    question: "Complete the lyrics 'Shake it like a __'",
    answers: [
      { answer: "Polaroid picture", value: true },
      { answer: "Salt shacker", value: false },
      { answer: "Rattle snake", value: false },
      { answer: "Drunk in love", value: false }
    ]
  },
  {
    question: "What famous couple split in 2002?",
    answers: [
      { answer: "Britney Spears and Justin Timberlake", value: true },
      { answer: "Nick Lachey and Jessica Simpson", value: false },
      { answer:"Jennifer Lopez and Puff Daddy", value: false },
      { answer: "Who cares? You think I followed celeb couples back then.", value: false }
    ]
  },
  {
    question: "Who was featured on Jojo's 'Baby It's You?'",
    answers: [
      { answer: "Cee lo Green", value: false },
      { answer: "Eminem", value: false },
      { answer: "Bow wow", value: true },
      { answer: "Nick Cannon", value: false }
    ]
  },
  {
    question: "Who sang the hits 'Foolish' and 'Happy'?",
    answers: [
      { answer: "Aaliyah", value: false },
      { answer: "Ashanti", value: true },
      { answer: "Mariah Carey", value: false },
      { answer: "Paula Abdul", value: false }
    ]
  },
  {
    question: "What Eminem album was released in 2002?",
    answers: [
      { answer: "Encore", value: false },
      { answer: "The Marshal Mathers LLP", value: true },
      { answer: "'Relapse,' that was an Eminem album, I think", value: false },
      { answer: "The Eminem Show", value: false }
    ]
  },
];
// Global variables
var game;
var counter = 0;
var clock;
var timer = 30;
var rightCounter = 0;
var wrongCounter = 0;
var blankCounter = 0;

$(document).ready(function () {
  // Start the game when start button is clicked
  $('.answers').css('visibility', 'hidden');
  $('body').on('click', '.start-btn', function (event) {
    event.preventDefault();
    beginGame();
    $('.answers').css('visibility', 'visible');
  });

  $('body').on('click', '.answer', function (event) {
    // console.log($(this));
    userAnswer = $(this).text();
    var answerCounter = questions[counter].answers;
//Looping through the array, the answer whether true or false will be recorded as such and the background of the answer area will change accordingly (i.e., change to green if true===right answer choice). The clock interval will also be cleared upon user click (whether right or wrong answer chosen).
    var answer = $('.answer');
    for (var i = 0; i < answerCounter.length; i++) {
      if (userAnswer === answerCounter[i].answer && answerCounter[i].value === true) {
        clearInterval(clock);
        var right = $(this).attr('class', 'right-answer answer');
        rightAnswer();
      } else if (userAnswer === answerCounter[i].answer && answerCounter[i].value === false) {
        clearInterval(clock);
        $(this).attr('class', 'wrong-answer answer');
        $('.first-answer').css('background-color', 'green');
        $('.first-answer').css('color', 'white');
        wrongAnswer();
      }
    }
  });

  $('body').on('click', '.reset-button', function (event) {
    event.preventDefault();
    resetGame();
  });
});
//Counter function to for when right answers chosen. 
function rightAnswer() {
  rightCounter++;
  $('.time').html(timer);
  $('.right').html('<p>Right answers: ' + rightCounter + '</p><br>');
  setTimeout(questionCounter, 2000);
}
//Counter function to for when wrong answers chosen. 
function wrongAnswer() {
  wrongCounter++;
  $('.time').html(timer);
  $('.wrong').html('<p>Wrong answers: ' + wrongCounter + '</p>');
  setTimeout(questionCounter, 2000);
}
//function for when answer is left blank by the user and time has expired.
function unanswered() {
  blank++;
  $('.main').append("<p class='times-up'>Time's up!</p>");
  $('.right-answer').css('background-color', 'green');
  $('.times-up')
    .delay(2000)
    .fadeOut(400);
  setTimeout(questionCounter, 2000);
}

// Begin the game. The start page should disappear, the questions area (which includes answer input area), and time should appear.
function beginGame() {
  $('.start-page').css('display', 'none');
  $('.questions-page').css('visibility', 'visible');
  $('.timer').html('<p>Time remaining: <span class="time">30</span></p>');

  $('.question').html(questions[counter].question);
  var showingAnswers =
    '<p class="answer first-answer">' +
    questions[counter].answers[0].answer +
    '</p><p class="answer">' +
    questions[counter].answers[1].answer +
    '</p><p class="answer">' +
    questions[counter].answers[2].answer +
    '</p><p class="answer">' +
    questions[counter].answers[3].answer +
    '</p>';

  $('.answers').html(showingAnswers);

  timerHolder();
}

function questionCounter() {
  if (counter < 6) {
    counter++;
    beginGame();
    timer = 30;
    timerHolder();
  } else {
    endGame();
  }
}

// Timer function
function timerHolder() {
  clearInterval(clock);
  clock = setInterval(seconds, 1000);
  function seconds() {
    if (timer === 0) {
      clearInterval(clock);
      unanswered();
    } else if (timer > 0) {
      timer--;
    }
    $('.time').html(timer);
  }
}

// Finishing the game. There will be a display of right answers, wrong answers, and blank answers chosen count. These are all inner html items that will be appended to the screen.
function endGame() {
  var final = $('.main')
    .html("<p>Here are your results!<p><br><br>")
    .append('<p>Correct Answers: ' + rightCounter + '</p><br>')
    .append('<p>Incorrect Answers: ' + wrongCounter + '</p>');
  $(final).attr('<div>');
  $(final).attr('class', 'final');
  $('.final').append('<p><a class="btn btn-primary btn-lg reset-button" href="#">Restart the game!</a></p>');
  $('.questions-page').css('display', 'none');
  $('.answers').css('display', 'none');
}

// Please note**Reset the game. I added this function to reset the game but when you click the reset button, the game does not reset. Not sure why but I tried a couple of times to fix this.
function resetGame() {
  counter = 0;
  rightCounter = 0;
  wrongCounter = 0;
  blankCounter = 0;
  timer = 30;
  beginGame();
  timerHolder();
}
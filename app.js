var wordsForEasyMode = [
	"JAVASCRIPT",
	"HTML",
	"PYTHON",
	"JSON",
	"JAVA",
	"HTML",
	"CSS",
	"C",
	"CSHARP",
	"PHP",
	"SQL",
	"RUBY"
]
var wordsForMediumMode = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Engineer",
    "Software Engineer",
    "Web Developer",
    "Codex Academy",
]
// var wordsForHardMode = [

// ]
 
// variables for Easy Mode

let answer = '';
let wordStatus = null;
let guessed = [];


// variables for Medium Mode

// let answerForMedium = '';
// let wordStatusForMedium = null;
// let guessedForMedium = [];


// variables for Hard Mode
// let answerForHard = '';
// let wordStatusForHard = null;
// let guessedForHard = [];

let mistake = 0;

//                  Function for the Buttons

function generateButtons() {
    let buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
      `
        <button
          class="btn m-2" 
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttons;
}
                      // Functions for Easy Mode

 function randomWord() {
    answer = wordsForEasyMode[Math.floor(Math.random() * wordsForEasyMode.length)];
  }

  function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
      ifGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistake++;
      birdsDecreases();
      ifGameLost();
      
    }
  }

function birdsDecreases() {
    if (mistake === 1) {
        $('#bird1').animate({
            top: '300px',
            opacity: '0',
        },1000)
    }
    else if (mistake === 2) {
      $('#bird2').animate({
        top: '600px',
        opacity: '0',
    },1000)
    }
    else if (mistake === 3) {
      $('#bird3').animate({
        top: '400px',
        opacity: '0',
    },1000)
    }
    else if (mistake === 4) {
      $('#bird4').animate({
        top: '600px',
        opacity: '0',
    },1000)
    }
    else if (mistake === 5) {
      $('#bird5').animate({
        top: '400px',
        opacity: '0',
    },1000)
    }
}


function ifGameWon() {
  if (wordStatus === answer) {
    document.getElementById('easyMode').innerHTML = 'YOU WON!!!';
  }
}

function ifGameLost() {
  if (mistake === 5) {
    document.getElementById('easyMode').innerHTML = 'The answer was: ' + answer;
    document.getElementById('mode-alert').innerHTML = 'YOU LOST!!!';
    document.getElementsByClassName('btn').setAttribute('disabled', true);
  }
}

function guessedWord() {
        wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        document.getElementById('easyMode').innerHTML = wordStatus;

      if (indexOf(wordsForEasyMode) === ' ') {

      }
  }


  
  generateButtons()


                      // Functions for Medium Mode


//  function randomWordForMedium() {
//     answerForMedium = wordsForMediumMode[Math.floor(Math.random() * wordsForMediumMode.length)];
//   }

// function wordToGuessInMediumMode() {
//     wordStatusForMedium = answerForMedium.split('').map(letter => (guessedForMedium.indexOf(letter) >= 0 ? letter : " _ ")).join('');
//     document.getElementById('mediumMode').innerHTML = wordStatusForMedium;
//   }





                      // Functions for Hard Mode


//  function randomWordForHard() {
//     answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
//   }


// function wordToGuessInHardMode() {
//     wordStatusForHard = answerForHard.split('').map(letter => (guessedForHard.indexOf(letter) >= 0 ? letter : " _ ")).join('');
//     document.getElementById('easyMode').innerHTML = wordStatusForHard;
//   }



$('#play-button').click(function(){
     if ($('#easy:input:radio').is(':checked')) 
      {
        $('#play-button').css("visibility","hidden");
        $('.bird').css("visibility","visible");
        $('.difficulty').attr('disabled','disabled');
        $('#easyMode').css("visibility","visible")
     if ($('#mode-alert').css("visibility") === 'visible') {
            $('#mode-alert').css("visibility","hidden");
            randomWord();
            guessedWord();
     }       
      }
    else if ($('#medium:input:radio').is(':checked'))
      {
        $('#play-button').css("visibility","hidden");
        $('.bird').css("visibility","visible");
        $('.difficulty').attr('disabled','disabled')
        $('#mediumMode').css("visibility","visible")
    if  ($('#mode-alert').css("visibility") === 'visible') {
    $('#mode-alert').css("visibility","hidden") }
      }
    else if ($('#hard:input:radio').is(':checked'))
      {
        $('#play-button').css("visibility","hidden");
        $('.bird').css("visibility","visible");
        $('.difficulty').attr('disabled','disabled')
        $('#hardMode').css("visibility","visible")
    if  ($('#mode-alert').css("visibility") === 'visible') {
    $('#mode-alert').css("visibility","hidden") }
      }
    else {
        $('#mode-alert').css("visibility","visible")
         }
    }
)



$('#shoot').click(function(){
    $('#bird1').animate({
        top: '300px',
        opacity: '0',
    },1000)
})
$('#shoot').click(function(){
    $('#bird2').animate({
        top: '600px',
        opacity: '0',
    },1000)
}) 
$('#shoot').click(function(){
    $('#bird3').animate({
        top: '400px',
        opacity: '0',
    },1000)
}) 
$('#shoot').click(function(){
    $('#bird4').animate({
        top: '600px',
        opacity: '0',
    },1000)
}) 
$('#shoot').click(function(){
    $('#bird5').animate({
        top: '400px',
        opacity: '0',
    },1000)
}) 



// randomWordForMedium();
// wordToGuessInMediumMode();

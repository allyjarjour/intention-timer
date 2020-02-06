// study category variables

var studyBox = document.querySelector('#study-cat');
var studyActive = document.querySelector('#study-cat-active');


// meditation category variables

var medBox = document.querySelector('#med-cat');
var medActive = document.querySelector('#med-cat-active');


// exercise category variables

var exBox = document.querySelector('#exercise-cat');
var exActive = document.querySelector('#exercise-cat-active');

// variables, function and event listener for switching to timer card

var startButton = document.querySelector('.start-button');
var mainCard = document.querySelector('.left-side');
var timerCard = document.querySelector('.timer-card');


startButton.addEventListener('click', addTimer)

// function addTimer() {
//   if (accompInput.length >= 1){
//   mainCard.classList.add('hidden');
//   timerCard.classList.remove('hidden');
// }
// }


function addTimer() {
  mainCard.classList.add('hidden');
  timerCard.classList.remove('hidden');
}
// && timeInput.length >= 1
// } else {
//   mainCard.classList.remove('hidden');
//   timerCard.classList.add('hidden');
// }



var accompAlert = document.querySelector('#accomp-alert')

window.onload = function hideTimerOnload() {
  timerCard.classList.add('hidden');
  studyActive.classList.add('hidden');
  medActive.classList.add('hidden');
  exActive.classList.add('hidden');
  accompAlert.classList.add('hidden');
}

// toggle categories - meditate, study and exercise

studyBox.addEventListener('click', switchToStudyActive);

function switchToStudyActive() {
  studyBox.classList.add('hidden');
  studyActive.classList.remove('hidden');
  medActive.classList.add('hidden');
  medBox.classList.remove('hidden');
  exActive.classList.add('hidden');
  exBox.classList.remove('hidden');
}

medBox.addEventListener('click', switchToMedActive);

function switchToMedActive() {
  studyActive.classList.add('hidden');
  medBox.classList.add('hidden');
  medActive.classList.remove('hidden');
  studyBox.classList.remove('hidden');
  exActive.classList.add('hidden');
  exBox.classList.remove('hidden');
}

exBox.addEventListener('click', switchToExActive);

function switchToExActive() {
  studyActive.classList.add('hidden');
  exBox.classList.add('hidden');
  exActive.classList.remove('hidden');
  studyBox.classList.remove('hidden');
  medBox.classList.remove('hidden');
  medActive.classList.add('hidden');
}

// input validation

var timeInput = document.querySelector('.time-input').value;

function numbersOnly(timeInput) {
  var regEx = /[^0-9]/g;
  timeInput.value = timeInput.value.replace(regEx, " ");
}

// validate activity text
var accompInput = document.querySelector('.accomp-input').value;

startButton.addEventListener('click', validateAccompInput);

function validateAccompInput() {
  if (accompInput.length === 0) {
    accompAlert.classList.remove('hidden');
  }
}

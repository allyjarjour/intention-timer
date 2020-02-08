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

function addTimer() {
  if (accompInput.value.length > 0 && minuteInput.value.length > 0 && secondInput.value.length) {
    mainCard.classList.add('hidden');
    timerCard.classList.remove('hidden');
    currentActTitle.classList.remove('hidden');
  }
}

var accompAlert = document.querySelector('#accomp-alert');
var minuteAlert = document.querySelector('#minute-alert');
var secondAlert = document.querySelector('#second-alert');
var currentActTitle = document.querySelector('.current-activity-title');
var catAlert = document.querySelector('#category-alert');

window.onload = function hideTimerOnload() {
  timerCard.classList.add('hidden');
  studyActive.classList.add('hidden');
  medActive.classList.add('hidden');
  exActive.classList.add('hidden');
  accompAlert.classList.add('hidden');
  minuteAlert.classList.add('hidden');
  secondAlert.classList.add('hidden');
  currentActTitle.classList.add('hidden');
  catAlert.classList.add('hidden');
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

var minuteInput = document.querySelector('#minute-input');
var secondInput = document.querySelector('#second-input');


function numbersOnly(minuteInput) {
  var regEx = /[^0-9]/g;
  minuteInput.value = minuteInput.value.replace(regEx, " ");
}

// add category alert

var medClickCount = 0;
var exClickCount = 0;
var studyClickCount = 0;


medBox.onclick = function() {
  var medClickCount = 1;
  return medClickCount;
}

exBox.onclick = function() {
  var exClickCount = 1;
  return exClickCount;
}

studyBox.onclick = function() {
  var studyClickCount = 1;
  return studyBox;
}

startButton.addEventListener('click', addActivityAlert);

function addActivityAlert() {
  if (medClickCount === 0 || exClickCount === 0 || studyClickCount === 0) {
    catAlert.classList.remove('hidden');
  }
}

// add activity alert
var accompInput = document.querySelector('.accomp-input');

startButton.addEventListener('click', addAccompAlert);

function addAccompAlert() {
  if (accompInput.value.length === 0) {
    accompAlert.classList.remove('hidden');
  }
}

// add minute alert

startButton.addEventListener('click', addMinuteAlert);

function addMinuteAlert() {
  if (minuteInput.value.length === 0) {
    minuteAlert.classList.remove('hidden');
  }
}

// add second alert

startButton.addEventListener('click', addSecondAlert);

function addSecondAlert() {
  if (secondInput.value.length === 0) {
    secondAlert.classList.remove('hidden');
  }
}

// change timer button

var timerButton = document.querySelector('.timer-button');

exBox.addEventListener('click', changeTimerEx);
medBox.addEventListener('click', changeTimerMed);
studyBox.addEventListener('click', changeTimerStudy);

function changeTimerEx() {
  timerButton.style.border = "1px solid #FD8078";
}

function changeTimerMed() {
  timerButton.style.border = "1px solid #C278FD";
}

function changeTimerStudy() {
  timerButton.style.border = "1px solid #B3FD78";
}

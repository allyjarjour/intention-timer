var accompAlert = document.querySelector('#accomp-alert');
var accompInput = document.querySelector('.accomp-input');
var activitySelector;
var allCategoryBoxes = document.querySelectorAll('#category-box-container');
var card2Text = document.querySelector('.card2-text');
var cardContainer = document.querySelector('.card-container');
var catAlert = document.querySelector('#category-alert');
var currentActTitle = document.querySelector('.current-activity-title');
var exActive = document.querySelector('#exercise-cat-active');
var exBox = document.querySelector('#exercise-cat');
var exClickCount = 0;
var logActButton = document.querySelector('.log-act-button');
var logMessage = document.querySelector('.log-message');
var mainCard = document.querySelector('.left-side');
var medActive = document.querySelector('#med-cat-active');
var medBox = document.querySelector('#med-cat');
var medClickCount = 0;
var minuteAlert = document.querySelector('#minute-alert');
var minuteInput = document.querySelector('#minute-input');
var minuteInput = document.querySelector('#minute-input');
var minutes = document.querySelector('.minutes');
var secondAlert = document.querySelector('#second-alert');
var secondInput = document.querySelector('#second-input');
var secondInput = document.querySelector('#second-input');
var seconds = document.querySelector('.seconds');
var startButton = document.querySelector('.start-button');
var studyActive = document.querySelector('#study-cat-active');
var studyBox = document.querySelector('#study-cat');
var studyClickCount = 0;
var timer = document.querySelector('.timer');
var timerButton = document.querySelector('.timer-button');
var timerCard = document.querySelector('.timer-card');

exBox.addEventListener('click', changeTimerEx);
exBox.addEventListener('click', switchToExActive);
logActButton.addEventListener('click', addPastAct);
medBox.addEventListener('click', changeTimerMed);
medBox.addEventListener('click', switchToMedActive);
startButton.addEventListener('click', addAccompAlert);
startButton.addEventListener('click', addActivityAlert);
startButton.addEventListener('click', addMinuteAlert);
startButton.addEventListener('click', addSecondAlert);
startButton.addEventListener('click', addTimer)
startButton.addEventListener('click', addTotalSeconds);
startButton.addEventListener('click', changeCard2Text);
startButton.addEventListener('click', reloadTimer);
startButton.addEventListener('click', showTime);
studyBox.addEventListener('click', changeTimerStudy);
studyBox.addEventListener('click', switchToStudyActive);
timerButton.addEventListener('click', timerStart);

function addTimer() {
  if (accompInput.value.length > 0 && minuteInput.value.length > 0 && secondInput.value.length > 0) {
    mainCard.classList.add('hidden');
    timerCard.classList.remove('hidden');
    currentActTitle.classList.remove('hidden');
    logActButton.classList.add('hidden');
  }
}

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
  logActButton.classList.add('hidden');
}

function switchToStudyActive() {
  studyBox.classList.add('hidden');
  studyActive.classList.remove('hidden');
  medActive.classList.add('hidden');
  medBox.classList.remove('hidden');
  exActive.classList.add('hidden');
  exBox.classList.remove('hidden');
  activitySelector = "Study";
  borderSelector = '#B3FD78';
}

function switchToMedActive() {
  studyActive.classList.add('hidden');
  medBox.classList.add('hidden');
  medActive.classList.remove('hidden');
  studyBox.classList.remove('hidden');
  exActive.classList.add('hidden');
  exBox.classList.remove('hidden');
  activitySelector = "Meditate";
  borderSelector = '#C278FD';
}

function switchToExActive() {
  studyActive.classList.add('hidden');
  exBox.classList.add('hidden');
  exActive.classList.remove('hidden');
  studyBox.classList.remove('hidden');
  medBox.classList.remove('hidden');
  medActive.classList.add('hidden');
  activitySelector = "Exercise";
  borderSelector = '#FD8078';
}

function numbersOnly(minuteInput) {
  var regEx = /[^0-9]/g;
  minuteInput.value = minuteInput.value.replace(regEx, " ");
}

function addAccompAlert() {
  if (accompInput.value.length === 0) {
    accompAlert.classList.remove('hidden');
  }
}

function addMinuteAlert() {
  if (minuteInput.value.length === 0) {
    minuteAlert.classList.remove('hidden');
  }
}

function addSecondAlert() {
  if (secondInput.value.length === 0) {
    secondAlert.classList.remove('hidden');
  }
}

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

function addActivityAlert() {
  if (medClickCount === 0 || exClickCount === 0 || studyClickCount === 0) {
    catAlert.classList.remove('hidden');
  }
}

function changeTimerEx() {
  timerButton.style.border = "1px solid #FD8078";
}

function changeTimerMed() {
  timerButton.style.border = "1px solid #C278FD";
}

function changeTimerStudy() {
  timerButton.style.border = "1px solid #B3FD78";
}

function changeCard2Text() {
  card2Text.innerText = accompInput.value;
}

function showTime(){
  minutes.innerText = minuteInput.value;
  seconds.innerText = secondInput.value;
}

function addTotalSeconds() {
  return ((parseInt(minuteInput.value) * 60) + (parseInt(secondInput.value)));
}

function timerStart() {
  var myTimer = setInterval(clock, 1000);
  var totalSeconds = addTotalSeconds();

  function clock() {
    minutes.innerText = Math.floor( (totalSeconds/60) % 60 );
    seconds.innerText = Math.floor( (totalSeconds--) % 60 );

    if (seconds.innerText < 10) {
      seconds.innerText = ('0' + seconds.innerText);
    }

    if (totalSeconds < 0) {
      clearInterval(myTimer);
      timerButton.innerText = "YOU'RE AMAZING!";
      logActButton.classList.remove('hidden');
    }
  }
}

function addPastAct() {
  if (logActButton.innerText == ('LOG ACTIVITY')) {
  cardContainer.insertAdjacentHTML('afterbegin', `
    <p class="past-act-card"><span class="act-selector">${activitySelector}</span><br />
    <span>${minuteInput.value} MINUTES </span>
    <span>${secondInput.value} SECONDS</span><br /><span>${accompInput.value}</span></p>`);
  logMessage.classList.add('hidden');
  currentActTitle.innerText = ('Completed Activity');
  card2Text.classList.add('hidden');
  timer.classList.add('hidden');
  timerButton.classList.add('hidden');
  }
}

logActButton.addEventListener('click', returnToNewAct);
logActButton.addEventListener('click', changeLogButton);

function changeLogButton() {
  logActButton.innerText = ('CREATE A NEW ACTIVITY');
}

function returnToNewAct() {
  if (logActButton.innerText == ('CREATE A NEW ACTIVITY')) {
    mainCard.classList.remove('hidden');
    timerCard.classList.add('hidden');
    resetCatsAndInput();
    currentActTitle.innerText = ('New Activity');
  }
}

function resetCatsAndInput() {
  medActive.classList.add('hidden');
  studyActive.classList.add('hidden');
  exActive.classList.add('hidden');
  medBox.classList.remove('hidden');
  studyBox.classList.remove('hidden');
  exBox.classList.remove('hidden');
  catAlert.classList.add('hidden');
  accompInput.value = "";
  secondInput.value = "";
  minuteInput.value = "";
}

function reloadTimer() {
  card2Text.classList.remove('hidden');
  timer.classList.remove('hidden');
  timerButton.classList.remove('hidden');
  timerButton.innerText = ('START');
  logActButton.innerText = ('LOG ACTIVITY')
  showTime();
  addTotalSeconds();
}

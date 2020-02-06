// change color of study category on click

var studyBox = document.querySelector('#study-cat');
var idleStudy = document.querySelector('#idle-study');
var studyText = document.querySelector('#study-text');

studyBox.addEventListener('click', changeStudyColor);

function changeStudyColor() {
  studyBox.style.border = "2px solid #B3FD78";
  studyText.style.color = "#B3FD78";
  idleStudy.src = "assets/study-active.svg";
}

// change color of meditate category on click

var medBox = document.querySelector('#med-cat');
var idleMed = document.querySelector('#idle-med');
var medText = document.querySelector('#med-text');

medBox.addEventListener('click', changeMedColor);

function changeMedColor() {
  medBox.style.border = "2px solid #C278FD";
  idleMed.src = "assets/meditate-active.svg";
  medText.style.color = "#C278FD";
}

// change color of meditate category on click

var idleEx = document.querySelector('#idle-exercise');
var exText = document.querySelector('#exercise-text');
var exBox = document.querySelector('#exercise-cat');

exBox.addEventListener('click', changeExerciseIcon);

function changeExerciseIcon() {
    idleEx.src = "assets/exercise-active.svg";
    exText.style.color = "#FD8078";
    exBox.style.border = "2px solid #FD8078";
}

// start activity function

var startButton = document.querySelector('.start-button');
var mainCard = document.querySelector('.left-side')

startButton.addEventListener('click', addTimer)

function addTimer() {
  mainCard.classList.add('hidden');
}

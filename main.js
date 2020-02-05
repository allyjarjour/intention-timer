// change color of study category on click

document.querySelector('#study-cat').addEventListener('click', changeStudyColor);

function changeStudyColor() {
  document.querySelector('#study-cat').style.border = "2px solid #B3FD78";
  document.querySelector('#study-text').style.color = "#B3FD78";
  document.querySelector('#idle-study').src = "assets/study-active.svg";
}

// change color of meditate category on click

document.querySelector('#med-cat').addEventListener('click', changeMedColor);

function changeMedColor() {
  if (document.querySelector('#med-cat').style.border = "2px solid #FFF")
  {
    document.querySelector('#med-cat').style.border = "2px solid #C278FD";
  } else {
    document.querySelector('#med-cat').style.border = "2px solid #FFF";
  }
  if (document.querySelector('#idle-med').getAttribute('src') == "assets/meditate.svg")
  {
    document.querySelector('#idle-med').src = "assets/meditate-active.svg";
  } else {document.querySelector('#idle-med').src = "assets/meditate.svg";
  }
  document.querySelector('#med-text').style.color = "#C278FD";
}

// change color of meditate category on click

document.querySelector('#exercise-cat').addEventListener('click', changeExerciseIcon);

function changeExerciseIcon() {
    document.querySelector('#idle-exercise').src = "assets/exercise-active.svg";
    document.querySelector('#exercise-text').style.color = "#FD8078";
    document.querySelector('#exercise-cat').style.border = "2px solid #FD8078";
}

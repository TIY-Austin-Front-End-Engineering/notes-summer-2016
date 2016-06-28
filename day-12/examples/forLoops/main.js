for (var i = 0; i < 5; i++) {
  console.log('hi');
}

var anchors = document.querySelectorAll('a');
// anchors[0].addEventListener('click', function() {
//   console.log('click on the first one');
// });
// anchors[1].addEventListener('click', function() {
//   console.log('click on the second one');
// });
// anchors[2].addEventListener('click', function() {
//   console.log('click on the third one');
// });

function clickHandler(evt) {
  // no matter what i clicked on, get rid of ALL active classes on a's
  for (i=0; i < anchors.length; i++) {
    anchors[i].classList.remove('active');
  }
  // then add the active class to the one i clicked on
  evt.target.classList.add('active');
}

for (i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', clickHandler);
}

clickHandler('hi');

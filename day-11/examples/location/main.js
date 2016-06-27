var button = document.querySelector('input');

button.addEventListener('click', function(evt){
  console.log(evt.target.value);
});

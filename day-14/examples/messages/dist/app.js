var data = [
  {
    name: 'Jess',
    messages: ['hi, Jess', 'you always talk about unicorns']
  },
  {
    name: 'Quincy',
    messages: ['you always talk about sports', 'you love sports']
  },
  {
    name: 'Karly',
    messages: ['i know you lvoe running']
  }
];

// these variables are effectively "templates"
var personLink = '<li><a href="#"></a></li>';
var personMessages = '<div><h2>Person\'s Name</h2><ul></ul></div>';

// listen to click events on the people-list
// know who was clicked on so we can show their name and messages

$(document).ready(function() {
  // code will only run after the entire docuemnt is loaded and ready
  console.log('documentReady');

  var parent = $('.people-list');
  data.forEach(function(person, i) {
    var $newEl = $(personLink);
    $newEl.children('a').text(person.name).attr('data-index', i);
    parent.append($newEl);
  });

  parent.on('click', function(evt) {
    var index = $(evt.target).data().index;
    var $newEl = $(personMessages);
    $newEl.children('h2').text(data[index].name);
    $('.messages-area').append($newEl);
  });
});

//vanill DOM access
var paragraph = document.querySelector('p');
console.log('vanilla', paragraph);

// get the textContent
var parahraphContents = paragraph.textContent;
//set the textContent
paragraph.textContent = 'This is the replacement for the first parahraph';

//jquery version:
var $paragraph = $('p');
console.log('jquery', $paragraph);

// get textContent - it only gets the first content
var paragraphContents2 = $paragraph.text();
// set textContent - replaces ALL the matching elements contents
$paragraph.text('jquery text replacement');


// create an element in jquery
var $ul = $('<ul></ul>');
console.log($ul);

// add elements to the page
$('body').append($ul);
$('body').prepend($ul);

var $li = $('<li>The first list item</li>');
$ul.append($li);

$li.addClass('list-item');
$paragraph.removeClass('lorem');

$paragraph.on('click', function(evt) {
  console.log(evt);
  // $(evt.target).toggleClass('selected');

  // this (INSIDE A JQUERY EVENT HANDLER ONLY) is shorthand for evt.target
  $(this).toggleClass('selected');

  // this last option will toggle the class for ALL the parapraphs stored in the var $paragraph as opposed to just the one i clicked on
  // $paragraph.toggleClass('selected');
});
// $paragraph.click(function() {});

// plops the string directly into the DOM, doesn't interpret it as html
// $ul.text('<li>This is a new li</li>');

// the html method will interpret the contents as html
$ul.html('<li>This is a new li</li><li>This is a second li</li>');






//

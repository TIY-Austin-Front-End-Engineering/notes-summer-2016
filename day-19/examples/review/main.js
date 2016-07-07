var people = [
  {
    name: 'Jess',
    email: 'mark@facebook.com',
    website: 'http://facebook.com',
    secretMessage: 'mark likes the internet'
  },{
    name: 'Bill Gates',
    email: 'bill@microsoft.com',
    website: 'http://microsoft.com',
    secretMessage: 'bill likes glasses'
  }
];

//selecting an element
function renderPeople(people) {
  var ul = $('#main-list');
  people.forEach(function(person, i, arr) {
    //making an element
    var li = $('<li></li>');
    var h2 = $('<h2></h2>');
    var innerUl = $('<ul><li><a></a></li><li><a></a></li></ul>');
    li.attr('data-index', i);
    h2.on('click', function(evt) {
      // the easy way, that doesn't require data attributes
      // console.log(person.secretMessage);

      // the longer, maybe convoluted way, that DOES use data attributes
      var index = $(evt.target).parent().data().index;
      console.log(people[index].secretMessage);
    });
    innerUl.children('li:first-of-type').children('a')
      .attr('href', 'mailto:' + person.email)
      .text(person.email);
    innerUl.find('li:nth-of-type(2) a')
      .attr('href', person.website)
      .text(person.name + '\'s website');
    h2.text(person.name);
    li.append(h2).append(innerUl);
    ul.prepend(li);
  });
}

$(document).ready(function() {
  renderPeople(people);

  // using data attributes after we've already done stuff to the DOM
  // $('button').on('click', function() {
  //   console.log($('#main-list > li:first-of-type').data().index);
  // });
  $('#load').on('click', function(e) {
    $.ajax({
      type: 'GET',
      url: 'http://tiny-za-server.herokuapp.com/collections/people',
      dataType: 'json',
      success: renderPeople
    });
  });
});





//

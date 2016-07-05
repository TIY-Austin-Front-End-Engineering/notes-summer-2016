console.log('hi');

// make an ajax request
var unicorn = {
  type: 'GET',
  // dataType: 'jsonp',
  url: 'https://api.github.com/users/nicerhugs',
  success: function(response) {
    console.log(response);
    $('body').append($('<h1></h1>').text(response.name));
  }
};

// console.log($.ajax(settings));
$.ajax(unicorn);
// console.log(data);
// $('<h1></h1>').text(data.responseJSON.name);

console.log('hi');

// $.ajax({
//   url: 'http://tiny-za-server.herokuapp.com/collections/unicorns/',
//   type: 'GET',
//   dataType: 'json',
//   success: function (response) {
//     response.forEach(function(unicorn) {
//       console.log(unicorn, unicorn.powers);
//     });
//   }
// });

// $.ajax({
//   url: 'http://tiny-za-server.herokuapp.com/collections/unicorns/577d28b369837d0300d190ef',
//   type: 'DELETE',
//   dataType: 'json',
//   success: function (response) {
//     console.log('delete', response);
//   }
// });
 //
 // $.ajax({
 //   url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
 //   type: 'POST',
 //   dataType: 'json',
 //   success: function(response) {
 //     console.log(response);
 //   },
 //   data: {
 //     "name": "Joey",
 //     "color": "white",
 //     "powers": ["healing"],
 //     "last": false
 //   }
 // });


 // $.ajax({
 //   url: 'http://tiny-za-server.herokuapp.com/collections/unicorns/577d303969837d0300d190fc',
 //   type: 'PUT',
 //   dataType: 'json',
 //   success: function(response) {
 //     console.log(response);
 //   },
 //   data: {
 //     color: 'turquoise',
 //   }
 // });

 console.log($('div').data());
 console.log($('div').attr('data-id', '5'));

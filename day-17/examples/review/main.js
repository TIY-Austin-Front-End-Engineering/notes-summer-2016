// //recursive callbacks for newly created elements
// function clickCallback() {
//   var $div = $('<div></div>');
//
//   $('body').append($div);
//   $div.on('click', clickCallback);
//
//   console.log('you clicked a div');
// }
//
// $('div').on('click', clickCallback);
//

function renderAlbum(albumNumber) {
  $('#container').empty();
  var album = $('<section class="album"></section>');
  album.text(albumNumber);
  $('#container').append(album);
}

$(document).ready(function() {
  $(window).on('hashchange', function() {
    var hash = location.hash;
    console.log('location changed: ', hash.split('/'));
    if (hash.split('/')[0] === '#album') {
      renderAlbum(hash.split('/')[1]);
    } else if (hash.split('/')[0] === '#photo') {
      renderPhoto(hash.split('/')[1]);
    }
  });
});

var $uls = $('ul');

$uls.on('click', function(evt) {
  $uls.removeClass('open');
  $(this).addClass('open');
});

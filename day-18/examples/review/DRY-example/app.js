function albumClickHandler(number) {
    $('#homePage').hide();
    $('#albumPage' + number).show();
}

function navClickHandler(number) {
  $('.albumPage').hide();
  $('#albumPage'+number).show();
}

function photoClickHandler(picName) {
  $('.albumPage').hide();
  $('.individual').show();
  $('.photoContainer').hide();
  $('#'+ picName).show();
}

$(document).ready(function() {
    $('.albumCover').on('click', function(evt) {
      albumClickHandler(this.id.slice(5));
    });

    $('nav li').on('click', function() {
      navClickHandler($(this).index()+1);
    });

    $('nav li:last-child').on('click', function() {
        $('.albumPage').hide();
        $('#homePage').show();
    });
    // $('#album1').on('click', function() {
    //     $('#homePage').hide();
    //     $('#albumPage1').show();
    // });
    // $('#album2').on('click', function() {
    //     $('#homePage').hide();
    //     $('#albumPage2').show();
    // });
    // $('#album3').on('click', function() {
    //     $('#homePage').hide();
    //     $('#albumPage3').show();
    // });
    // $('#album4').on('click', function() {
    //     $('#homePage').hide();
    //     $('#albumPage4').show();
    // });
    // $('#album5').on('click', function() {
    //     $('#homePage').hide();
    //     $('#albumPage5').show();
    // });
    // $('#album6').on('click', function() {
    //     $('#homePage').hide();
    //     $('#albumPage6').show();
    // });

    // $('nav li:first-child').on('click', function() {
    //     $('.albumPage').hide();
    //     $('#albumPage1').show();
    // });
    // $('nav li:nth-child(2)').on('click', function() {
    //     $('.albumPage').hide();
    //     $('#albumPage2').show();
    // });
    // $('nav li:nth-child(3)').on('click', function() {
    //     $('.albumPage').hide();
    //     $('#albumPage3').show();
    // });
    // $('nav li:nth-child(4)').on('click', function() {
    //     $('.albumPage').hide();
    //     $('#albumPage4').show();
    // });
    // $('nav li:nth-child(5)').on('click', function() {
    //     $('.albumPage').hide();
    //     $('#albumPage5').show();
    // });
    // $('nav li:nth-child(6)').on('click', function() {
    //     $('.albumPage').hide();
    //     $('#albumPage6').show();
    // });



    $('.photoImage').on('click', function(evt) {
      var src = $(this).attr('src');
      photoClickHandler(src.slice(src.indexOf('/')+1, src.lastIndexOf('.')));

    });

    // $('#photo1-1').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#alvin').show();
    // });
    // $('#photo2-1').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#simon').show();
    // });
    // $('#photo3-1').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#theodore').show();
    // });
    // $('#photo1-2').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#harry').show();
    // });
    // $('#photo2-2').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#hermione').show();
    // });
    // $('#photo3-2').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#ron').show();
    // });
    // $('#photo1-3').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#bradley').show();
    // });
    // $('#photo2-3').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#zack').show();
    // });
    // $('#photo3-3').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#dentist').show();
    // });
    // $('#photo1-4').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#batman').show();
    // });
    // $('#photo2-4').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#superman').show();
    // });
    // $('#photo3-4').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#wonderwoman').show();
    // });
    // $('#photo1-5').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#ned').show();
    // });
    // $('#photo2-5').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#lucky').show();
    // });
    // $('#photo3-5').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#dusty').show();
    // });
    // $('#photo1-6').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#harley').show();
    // });
    // $('#photo2-6').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#catwoman').show();
    // });
    // $('#photo3-6').on('click', function() {
    //     $('.albumPage').hide();
    //     $('.individual').show();
    //     $('.photoContainer').hide();
    //     $('#poisonIvy').show();
    // });
    $('.backLink1').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage1").show();
    });
    $('.backLink2').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage2").show();
    });
    $('.backLink3').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage3").show();
    });
    $('.backLink4').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage4").show();
    });
    $('.backLink5').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage5").show();
    });
    $('.backLink6').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage6").show();
    });

});

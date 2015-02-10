var terms = $(".legible ul li");

function rotateTerm() {

var ct = $("#rotate").data("term") || 0;

// console.log(terms.eq([ct]).text());
 
  $("#rotate").data("term", 
    ct == terms.length -1 ? 0 : ct + 1).text(terms.eq([ct]).text())
  .fadeIn().delay(2000).fadeOut(200, rotateTerm);

}
$(rotateTerm);

$(document).ready(function () {
	$(document).scroll(function() { 
   if($(window).scrollTop() === 0) {
     $(".navbar .fa").fadeOut(500);
   } else {
    $('.navbar .fa').fadeIn(500);
   }
});
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
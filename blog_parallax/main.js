$(document).ready(function(){
  parallax ();

});
var parallax = function () {
  $(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);

		$('.banner').css({
			'background-position': '0 -' + posicion + 'px'
		});

	});
}

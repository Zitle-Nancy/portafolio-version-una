(function() {

	var efectoNombre = {
		strings: ["Nancy Zitle Juárez"],
		typeSpeed: 100,
		loop: true
	}

	var cargarPagina = function(){
		$('#menu-comprimido').click(openNav);
		$('#closeNav').click(closeNav);
		//typed es un metodo de un objeto de jquery
		$('.element').typed(efectoNombre);
		//barras
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},6000);
		});
	}

	var openNav = function() {
    	document.getElementById("myNav").style.width = "100%";
	}

	var closeNav = function(){
		document.getElementById("myNav").style.width = "0%";
	}

	
	
	$(document).ready(cargarPagina);
})();
	


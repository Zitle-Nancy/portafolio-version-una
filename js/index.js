(function() {
	page('/',index);
	page('/habilidades', habilidades);
	page('/trabajos',trabajos);

	page();

	function index(){
		$(".contenido").addClass("hidden");
		$('#sobre-mi').removeClass("hidden");
		$("#myNav").removeClass('nav-visible');
	}

	function habilidades() {
		$(".contenido").addClass("hidden");
		$('#seccion-habilidades').removeClass('hidden');
		$("#myNav").removeClass('nav-visible');
		//barras
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},1000);
		});
	}
	function trabajos(){
		$(".contenido").addClass("hidden");
		$('#seccion-trabajos').removeClass("hidden");
		$("#myNav").removeClass('nav-visible');
	}
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
	}
	var openNav = function() {
		// revisar
		$("#myNav").addClass('nav-visible');
	}
	var closeNav = function(){
		$("#myNav").removeClass('nav-visible');
	}

	
	
	$(document).ready(cargarPagina);
})();
	


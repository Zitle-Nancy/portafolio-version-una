(function() {
	page('/',index);
	page('/habilidades', habilidades);
	page('/proyectos',trabajos);
	page('/contactame',contactame);
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
	function contactame() {
		$(".contenido").addClass("hidden");
		$('#contactame').removeClass("hidden");
		$("#myNav").removeClass('nav-visible');
	}
	var efectoNombre = {
		strings: ["Nancy Zitle Juárez"],
		typeSpeed: 100,
		loop: false
	}
	var cargarPagina = function(){
		$('#menu-comprimido').click(openNav);
		$('#closeNav').click(closeNav);
		//typed es un metodo de un objeto de jquery
		$('.element').typed(efectoNombre);
		$('.funcion-twitter').click(enviarTwitter);
		$('.funcion-git').click(enviarGit);
		$('.funcion-link').click(enviarLink);
  		$('[data-toggle="tooltip"]').tooltip();
	}
	var openNav = function() {
		// revisar
		$("#myNav").addClass('nav-visible');
	}
	var closeNav = function(){
		$("#myNav").removeClass('nav-visible');
	}
	var enviarTwitter = function(){
		location.href = "https://goo.gl/2jGyz5";
	}
	var enviarGit = function(){
		location.href = "https://goo.gl/rSXccU";
	}
	var enviarLink = function(){
		location.href = "https://goo.gl/Uw2bt2";
	}
	
	
	$(document).ready(cargarPagina);
})();
	


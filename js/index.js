(function() {
	var cargarPagina = function(){
		$('.hamburguesa').click(cerrarHamburguesa);
	}

	 var cerrarHamburguesa = function(){
	 	$('.hamburguesa').toggleClass('open');
	 }

	




	$(document).ready(cargarPagina);
})();



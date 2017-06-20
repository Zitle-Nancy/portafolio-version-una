(function() {
	var cargarPagina = function(){
		$('.hamburguesa').click(cerrarHamburguesa);
	}

	 var cerrarHamburguesa = function(){
	 	$('.hamburguesa').toggleClass('open');
	 	// alert('open');
	 }

	




	$(document).ready(cargarPagina);
})();



(function() {
	var cargarPagina = function(){
		$('#menu-comprimido').click(openNav);
		$('#closeNav').click(closeNav);
	}
	var openNav = function() {
    	document.getElementById("myNav").style.width = "100%";
	}

	var closeNav = function(){
		document.getElementById("myNav").style.width = "0%";
	}

	
	
	$(document).ready(cargarPagina);
})();
	


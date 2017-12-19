function sec(){
	var inicio = document.getElementById("init");
	var fin = document.getElementById("fin");
	
	var a = parseInt(inicio.value);
	var b = parseInt(fin.value);
	if(a > b) {
		window.alert("El número de inicio es menor que el final");
	} else {
		var i;
		for (i=a; i<=b; i++){
			console.log(i);
		}
	}
}

function mult(){
	var u = document.getElementById("unidad");
	var p = document.getElementById("precio");
	
	var resultado = u.value*p.value;
	window.alert(resultado);
}

function numSec(){
	var txt = document.getElementById("oculto");
	if (txt.value == 25) {
		window.alert("¡¡Lo has conseguido!!");
	} else {
		window.alert("Intentalo de nuevo");
	}
}
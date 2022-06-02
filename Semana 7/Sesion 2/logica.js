
function pepito( num1, num2){

	const resultado = num1+num2;
	return resultado;

}

function musica( x ){

	alert( "Estoy cantando la cancion "+x);

}

function bienvenida(){

	document.getElementById('Mensaje').innerHTML= "Bienvenido a mi pagina web!";

}

function cambiarFotoDuaLipa(){

	document.getElementById('DuaLipa').src = "https://www.soyfutbol.com/__export/1641156370747/sites/debate/img/2022/01/02/dua_lipa_new_year_x1x.jpg_423682103.jpg";
}

function retornarFotoDuaLipa(){

	document.getElementById('DuaLipa').src = "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/XSLFNJ3A4BGHBKZWYEK2H5NEUA.jpg";

}

function escribirEtiqueta(){

	document.getElementById('Etiqueta').innerHTML="Ya comenzo a escribir en el formulario";

}

function limpiarEtiqueta(){

	document.getElementById('Etiqueta').innerHTML="";
}
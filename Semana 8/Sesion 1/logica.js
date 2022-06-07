//var cadena1 = prompt("Ingrese una Cadena");
//document.getElementById('pizarra').innerHTML =cadena1.length;

var cadena2 = new String ("Hola");
var cadena1 = "Hola este es un string con varias letras aaaaaaaa";

document.write("cadena de ejemplo cadena1: "+cadena1+"<br>");
document.write("Tamanio de cadena1  "+ cadena1.length + "<br>");
if (cadena1 === cadena2){

	document.write("Son Equivalentes"+"<br>");
}else{
	document.write("No son Equivalentes"+"<br>");
}
// metodo slice 
let cadena3 = cadena1.slice(0, 1);
document.write("slice de 1, 2 de la cadena 1=  "+ cadena3 + "<br>");

// metodo slice con parametros negativos (cuenta al revez)

let cadena4 = cadena1.slice(-10);
document.write("slice negativos de la cadena 1=  "+ cadena4 + "<br>");

// ejemplo de substring  Es parecido a Slice pero si le manda valores negativos
// los cambia por cero
let cadena5 = cadena1.substring(0, 6);
document.write("substring(0,6) cadena 1=  "+ cadena5 + "<br>");
let cadena6 = cadena1.substring(5);
document.write("substring(5) cadena 1=  "+ cadena6 + "<br>");
let cadena7 = cadena1.substring(-10);
document.write("substring(-10) cadena 1=  "+ cadena7 + "<br>");


// substr (inicio , cuantaspos)

let cadena8 = cadena1.substr(5,5); // trae desde la pos 5 , vamos por 5 caracteres mas
let cadena9 = cadena1.slice(5,5); // trae desde la pos 5 hasta las pos 5
let cadena10 = cadena1.substring(5,5);
document.write("substr(0,1) cadena 1=  "+ cadena8 + "<br>");
document.write("slice(0,1) cadena 1=  "+ cadena9 + "<br>");
document.write("substring(0,1) cadena 1=  "+ cadena10 + "<br>");


// metodo replace 
let cadena11 = cadena1.replace("Hola", "h-o-l-a");
document.write("replace(\"Hola\", ) cadena 1=  "+ cadena11 + "<br>");

let cadena12 = cadena1.replace("e", "j");
document.write("replace(\"e\", ) cadena 1=  "+ cadena12 + "<br>");

// replace todas las letras e
let cadena13 = cadena1.replace(/a/g, "n");
document.write("replace(\"e con expresion regular\", ) cadena 1=  "+ cadena13 + "<br>");

let cadena14 = cadena1.toUpperCase();
let cadena15 = cadena1.toLowerCase();

document.write("toUpperCase "+cadena14+"<br>");
document.write("toLowerCase "+cadena15+"<br>");



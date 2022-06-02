
var a = "Mundo";
// Invocar una funcion es mandar a llamar la funcion en el codigo ...
multiplicacion(5, 'Hola');
adios();
suma();


function hola(){

	let x = "Hola";
	let sumatoria = x + a;
	document.write(sumatoria);


}

// Declarar una funcion: Definir que hara ese bloque de codigo 
function adios(){

	let x = "Esta es una nueva variable";
	var a = "Es la variable a nueva";

	const j = "variable constante";

	document.write("Este es el adios de la variable x "+x + "<br>");
	document.write("Este es el adios de la variable a "+a+ "<br>");
	document.write("Este es el adios de la variable j "+j+"<br>")
}


function suma (){

	let valor1 = "Hola";
	let valor2 = 2.0;
	let suma = valor1 + valor2;
	document.write("Este es el valor de la suma "+suma+"<br>");
	valor1 = 9.6;
	suma = valor1 + valor2;
	document.write("Este es el valor de la suma "+suma+"<br>");
	var b = "Batman";

	funcion_interna();


	function funcion_interna() {
		document.write("Este es el valor de la variable b "+b+"<br>");
	}


}



function multiplicacion ( numero1 , numero2 ){

	const mul = numero1*numero2;
	document.write(mul);


}



function potencia (numero1, numero2){


	const pot = numero1**numero2;
	document.write(pot);

}


function division(numero1, numero2){


	const div = numero1/numero2;
	const mod = numero1 % numero2;


	document.write("Dividendo:"+numero1 + " Divisor:"+ numero2 +" Resultado:"+ div + " Residuo:"+mod);

}


function incrementales (numero) {


	numero++;	
	const prueba1 = numero;
	numero--;
	const prueba2 = numero;

	// Otros operadores incrementales 

	numero += 10;
	numero -= 2;

	document.write("Prueba 1:" + prueba1 + " Prueba2:"+ prueba2 + " numero:"+numero);

}





















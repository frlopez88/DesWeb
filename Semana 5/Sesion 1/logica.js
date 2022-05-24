function saludo(){

	document.getElementById('Pizarra').innerHTML=
	"Hola este es un saludo";

}

function logIn(){


	var correo = document.getElementById('email').value;	
	var pass = document.getElementById('password').value;

	var strresult = "El usuario es: " + correo + " y contrasenia: "+ pass;

	document.getElementById('Pizarra').innerHTML=strresult;

}
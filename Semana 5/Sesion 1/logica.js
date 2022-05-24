function saludo(){

	document.getElementById('Pizarra').innerHTML=
	"Hola este es un saludo";

}

function logIn(){

	var correo;
	correo =  document.getElementById('email').value;	
	var pass = document.getElementById('password').value;
	var strresult = "El usuario es: " + correo + " y contrasenia: "+ pass;
	document.getElementById('Pizarra').innerHTML=strresult;

}

// document = a la pagina donde esta instalado el script
// getElementById () este metodo va a buscar el elemento
// cuyo ID sera el parametro que reciba 
// getElementById('pepito') 
// ir a buscar en el documento html el elemento que 
// se llame por id = 'pepito'

// el elemento se debe operar 
// pepito.value 
// pepit.innetHTML = "Hola"
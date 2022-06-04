var bdStrings = [ "Hola", "Mundo", "Como Estas?", 1.0, 5, true ]; 


var bdPersonas = [];

console.log (bdStrings[0]); 
console.log(bdStrings[6]);
console.log( "Tamanio del arreglo es: "+ bdStrings.length);

var p1 = 	{ 
				nombre:"Fernando Lopez", 
				edad:33, 
				altura:1.67, 
				identidad:"0801", 
				cumplirAnios: function(){
					this.edad = this.edad + 1;
				}, 
				toString: function(){
					return  "El Nombre de Objeto: "+ this.nombre + " Edad: "+ this.edad;
				}

			};


var p2 = {

			nombre: "Leo Messi", 
			edad : 35,
			altura: 1.67, 
			identidad: "0802", 
			cumplirAnios: function(){
					this.edad = this.edad + 1;
				}, 
			toString: function(){
					return  "El Nombre de Objeto: "+ this.nombre + " Edad: "+ this.edad;
			}
};


// Agregamos las Persona al arreglo
bdPersonas.push(p1);
bdPersonas.push(p2);

// Impresion del Objeto P1
console.log(p1);
// Imprsion de Objeto P2
console.log(p2);

imprimirObjeto();


function imprimirArreglo(){

	let mensajeFinal="";

	// recorrer arreglo con ciclo for
	for ( let i = 0 ; i < bdPersonas.length; i++ ){

			mensajeFinal = mensajeFinal +  bdPersonas[i].toString() + "<br>";

	}

	document.getElementById('pizarra').innerHTML = mensajeFinal;
	

}

function cumplirAnioTodosLosObjetos(){

	for (let i=0; i< bdPersonas.length; i++){

		bdPersonas[i].cumplirAnios();

	}

	imprimirArreglo();

}


function imprimirObjeto (){

	document.getElementById('pizarra').innerHTML = p1.toString();

}

function hacerCumplirAniosObjeto(){

	p1.cumplirAnios();
	imprimirObjeto();

}
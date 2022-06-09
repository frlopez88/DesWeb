// Query = Consulta 
// sql = se utiliza para hacer consultas de base de datos (leer, escribir)
// Jquery = Hacer Consultas con Javascript pero en archivos HTML();


$(document).ready(function(){


		$("#EsconderH1").click(function (){

				$("#TituloPrincipal").hide();

			}

		);	

		$("#EsconderClase").click(function(){

			$(".colorRojo").hide();
			console.log("Llegue a clase");

		});

      //$("h1").hide();      


    }
 );

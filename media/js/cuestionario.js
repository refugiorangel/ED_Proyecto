function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
	var reto;
	if(parseInt(respuest)==this.correcta){
		// var reto;
		alert("Es correcta");
		reto=true;
		return reto;
	}else{
		alert("Es false");
		return reto;
	}
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
	this.pregun=pregun;
	this.respuestas=[];
	this.respuestas[0]=respuesta1;
	this.respuestas[1]=respuesta2;
	this.respuestas[2]=respuesta3;
	this.respuestas[3]=respuesta4;
	this.correcta=parseInt(correcta);
	this.ocupado=false;
	this.valuap=valuap;
}

var retorno=[];
var preguntas=[];


preguntas[0]=new pregunta("¿Qué es el diseño arquitectónico?","Proceso multiface en el que se sintetiza representaciones de la estructura de datos","Proceso multiface en el que se sintetiza la estructura del programa","Proceso multiface en el que se sintetiza las características de la interfaz y los detalles procedimentales desde los requisitos de la información", "Todas las Anteriores",3);
preguntas[1]=new pregunta("¿Qué significa el término “problema indecidible”?","función indescifrable","función invisible","función no calculable","función no legible",3);
preguntas[2]=new pregunta("¿Cuál es la tesis que nos indica que cualquier función computable tiene representación con una máquina de Turing?","tesis de hurch","tesis de Riemann","tesis de Turing","tesis de Rice",1);
tesi

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


preguntas[0]=new pregunta("¿Qué significa el término “problema indecidible”?","función indescifrable","función invisible","función no calculable","función no legible",3);
preguntas[1]=new pregunta("¿Cuál es la tesis que nos indica que cualquier función computable tiene representación con una máquina de Turing?","tesis de Church","tesis de Riemann","tesis de Turing","tesis de Rice",1);
preguntas[2]=new pregunta("De acuerdo a la Tesis de Church, ¿qué recursos se pueden usar para calcular cualquier función calculable?","Una máquina universal de Turing o un programa while","función µ-Recursiva o un programa for","un programa while, una función indecidible o una función  µ-Recursiva","Una máquina de Turing, función µ-Recursiva o un programa while: Respuesta correcta",4);
preguntas[3]=new pregunta("¿De qué año es el artículo “On Computable Numbers, with an Application to the Entscheidungsproblem” de Alan Turing?","1938","1936","1935","1940",2);
preguntas[4]=new pregunta("¿Qué significa la palabra Entscheidungsproblem?","Problema de Decisión","Problema de Invasión","Problema de Acción","Problema de Reacción",1);
preguntas[5]=new pregunta("¿Cuál es la representación de una función universal?","U〈x,y〉=y(x)","U〈φ,y〉=φi(y)","U〈x,y〉=φi(x,y)","U〈φ,x〉=φi(x)",4);
preguntas[6]=new pregunta("Todas estas son propiedades de un algoritmo según Turing, excepto...","el número de instrucciones es finito","no hay límite al número de pasos ni a la cantidad de memoria necesaria","cada instrucción tiene un efecto limitado","U〈φ,x〉=φi(x)",4);
preguntas[7]=new pregunta("¿Qué es un intérprete?" , "Un programa que se encarga de sólo analizar programas." , "Un programa que analiza y ejecuta simultáneamente un programa." , "Un programa que se encarga de la traducción de otro programa." , "Un programa que necesariamente resulta en código máquina." , 2 ) ;
preguntas[8]=new pregunta("¿Cual de las siguientes es una característica de los intérpretes ?" , "Manejo de un lenguaje." , "Manejo único de dos lenguajes." , "Manejo mínimo de dos lenguajes." , "Ninguna de las anteriores." , 3);
preguntas[9]=new pregunta("¿En cuántas partes se divide la organización interna de un intérprete?" , "2" , "3" , "4" , "5" , 4 );
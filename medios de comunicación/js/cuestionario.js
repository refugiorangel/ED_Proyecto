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
preguntas[6]=new pregunta("Todas estas son propiedades de un algoritmo según Turing, excepto...","el número de instrucciones es finito","no hay límite al número de pasos ni a la cantidad de memoria necesaria","cada instrucción tiene un efecto limitado","los pasos no son deterministas",4);
preguntas[7]=new pregunta("¿Qué es un intérprete?" , "Un programa que se encarga de sólo analizar programas." , "Un programa que analiza y ejecuta simultáneamente un programa." , "Un programa que se encarga de la traducción de otro programa." , "Un programa que necesariamente resulta en código máquina." , 2 ) ;
preguntas[8]=new pregunta("¿Cual de las siguientes es una característica de los intérpretes ?" , "Manejo de un lenguaje." , "Manejo único de dos lenguajes." , "Manejo mínimo de dos lenguajes." , "Ninguna de las anteriores." , 3);
preguntas[9]=new pregunta("¿En cuántas partes se divide la organización interna de un intérprete?" , "2" , "3" , "4" , "5" , 4 );
preguntas[10]=new pregunta("¿Cuántas cintas tiene una MT que representa a U?" , "3" , "4" , "5" , "6" , 2 );
preguntas[11]=new pregunta("¿De cuántas fases se compone la actividad de U?" , "1" , "2" , "3" , "4" , 3 );
preguntas[12]=new pregunta("¿A qué teorema pertenece el siguiente enunciado?.Existe una función calculable parcial de dos argumentos ϕz tal que, para todo x e i, ϕz(i, x) = ϕi(x) " , "universalidad" , "cardinalidad" , "complejidad" , "computabilidad" , 1 );
preguntas[13]=new pregunta("Dentro de la siguiente representación U〈φ,x〉=φi(x).¿A qué corresponde φ?" , "función universal" , "la entrada" , "conjunto de funciones" , "la salida" , 3 );
preguntas[14]=new pregunta("¿A qué fase de U corresponde: inicializar el contenido de todas las cintas?" , "U3" , "U2" , "U1" , "No es una función que realice ninguna de las fases" , 3 );
preguntas[15]=new pregunta("¿A qué fase de U corresponde: simular reiteradamente los pasos de M hasta llegar a uno de sus estados finales?" , "U3" , "U2" , "U1" , "No es una función que realice ninguna de las fases" , 2 );
preguntas[16]=new pregunta("¿A qué fase de U corresponde: si la fase anterior termina, limpiar las cintas manteniendo sólo el output en la primera.?" , "U3" , "U2" , "U1" , "No es una función que realice ninguna de las fases" , 1 );
preguntas[17]=new pregunta("¿Cuál es el resultado final de U tras recibir la input correspondiente?" , "el mismo resultado M(w) que se obtendría ejecutando M sobre w" , "la descripción de un input w" , "la descripción de la Máquina de Turing" , "No se obtiene nada" , 1 );
preguntas[18]=new pregunta("¿Cuáles son las entradas con las que cuentan los intérpretes?" , "una lengua materna" , "una lengua extranjera" , "un lenguaje escrito en lenguaje fuente" , "un traductor" , 3 );
preguntas[19]=new pregunta("¿En cuantos modulos se divide la mayoria de los intérpretes?" , "2" , "3" , "4" , "5" , 3 );
preguntas[20]=new pregunta("¿A qué se refiere Turing cuando dice que los pasos de un algoritmos son deterministas?" , "dependen de un número infinito de pasos" , "dependen de un número finito de pasos previos" , "no hay límite en el número de pasos" , "no dependen de una cantidad finita de datos" , 2 );
preguntas[21]=new pregunta("¿En qué consiste el módulo traductor a representación interna?" , "Analiza y transforma el programa en su representación interna" , "Analiza y ejecuta cada expresión de manera directa" , "Se crea y utiliza en el proceso de traducción" , "Se llevan a cabo las acciones convenientes para obtener buenos resultados" , 1 );
preguntas[22]=new pregunta("¿Cuál es un tipo de representación interna?" , "Diagrama de flujo" , "Árboles sintácticos" , "Graficas" , "Ninguna de las anteriores" , 2 );
preguntas[23]=new pregunta("¿Para qué se utiliza la tabla de símbolos?" , "Se crea y utiliza en el proceso de traducción" , "Se utiliza principalmente en lenguajes sencillos" , "Se utilizan estructuras de pila" , "En ella se almacenan etiquetas para instrucciones de salto" , 4 );
preguntas[24]=new pregunta("¿Qué sucede dentro del módulo de tratamiento de errores?" , "Traducción del código" , "Evaluación para la prevención de errores" , "La información se almacena en una tabla" , "Análisis y trasformación del código" , 2 );
preguntas[25]=new pregunta("¿En qué consiste la interpretación iterativa?" , "Analiza y transforma el programa en su representación interna" , "Se crea y utiliza en el proceso de traducción" , "Se llevan a cabo las acciones convenientes para obtener buenos resultados" , "En este se analiza y ejecuta cada expresión de manera directa" , 4 );
preguntas[26]=new pregunta("¿Cuál es la primera fase de la interpretación recursiva?" , "Construcción de interprete prototipo" , "Implementación del compilador" , "Análisis del código" , "Traducción del lenguaje" , 1 );
preguntas[27]=new pregunta("¿Cuál es la segunda fase de la interpretación recursiva?" , "Traducción del lenguaje" , "Construcción de interprete prototipo" , "Implementación del compilador" , "Análisis del código" , 3 );
preguntas[28]=new pregunta("¿Cuántos tipos de interprete se mencionan?" , "6" , "3" , "1" , "5" , 1 );
preguntas[29]=new pregunta("¿Cómo funcionan los intérpretes puros?" , "Analiza y transforma el programa en su representación interna" , "Se crea y utiliza en el proceso de traducción" , "Compila aquellas partes estáticas del programa en lenguaje fuente" , "Analizan y ejecutan sentencia a sentencia todo el programa fuente" , 4 );
preguntas[30]=new pregunta("¿Cómo funcionan los intérpretes avanzados?" , "Analizan y ejecutan sentencia a sentencia todo el programa fuente" , "Se incluye un paso previo al análisis, posteriormente generan un lenguaje intermedio que ejecutan ellos mismos" , "Compila aquellas partes estáticas del programa en lenguaje fuente" , "El sistema compila algunas partes dinámicas" , 2 );
preguntas[31]=new pregunta("¿Cómo surgen los evaluadores parciales?" , "Con la necesidad de compilar" , "Para evitar los errores sintácticos" , "Al considerarse que muchos programas contienen dos tipos de datos de entrada" , "Por la aparición del internet" , 3 );
preguntas[32]=new pregunta("¿Cuáles son las acciones que realiza la figura 11(Compilación de una clase “Just in Time”)?" , "Compila la unidad A a código nativo y continúa la ejecución con el código nativo compilado de la unidad B" , "Compila la unidad B a código nativo y continúa la ejecución con el código nativo compilado de la unidad A" , "Analiza la unidad B y ejecuta el código nativo compilado de la unidad B" , "Compila la unidad B a código nativo y continúa la ejecución con el código nativo compilado de la unidad B" , 4 );
preguntas[33]=new pregunta("¿Cómo funcionan la compilación continua?" , "Analizan y ejecutan sentencia a sentencia todo el programa fuente" , "El sistema mezcla el proceso de compilación a código nativo con el proceso de interpretación" , "El sistema compila algunas partes dinámicas" , "En este se analiza y ejecuta cada expresión de manera directa" , 2 );
preguntas[34]=new pregunta("¿Cuál es la característica de una función universal?" , "el resultado de una simulación de una función en particular debe ser igual a la función original evaluada con el mismo valor" , "el resultado de una simulación de una función en particular no debe ser igual a la función original evaluada con el mismo valor" , "el resultado de una simulación de una función en particular debe ser parecida a la función original evaluada con el mismo valor" , "el resultado de una simulación de una función en particular debe ser igual a una función diferente de la original" , 1 );
preguntas[35]=new pregunta("¿Qué es lo último que contendrá C1 una vez acabada la fase U2?" , "la representación de M " , "la descripción de M" , "input w" , "el output M(w)" , 4 );
preguntas[36]=new pregunta("¿Qué simula una máquina universal?" , "comportamiento de conjunto de funciones" , "comportamiento de otras máquinas de Turing" , "funciones universales" , "funciones computables" , 2 );
preguntas[37]=new pregunta("¿Qué simula la función universal?" , "comportamiento de conjunto de funciones" , "comportamiento de otras máquinas de Turing" , "funciones universales" , "funciones computables" , 1 );
preguntas[38]=new pregunta("¿Cuántos tipos de interprete se mencionan?" , "6" , "3" , "1" , "5" , 1 );
preguntas[39]=new pregunta("¿Cuántos tipos de interprete se mencionan?" , "6" , "3" , "1" , "5" , 1 );
preguntas[40]=new pregunta("¿Cuántos tipos de interprete se mencionan?" , "6" , "3" , "1" , "5" , 1 );

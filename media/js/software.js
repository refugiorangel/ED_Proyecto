function universal(simular,x,y){
    return simular(x,y);
}
function suma(x,y){
    return x+y;
}
function resta(x,y){
    return x-y;
}
function multiplicacion(x,y){
    return x*y;
}
function division(x,y){
    return x/y;
}
function potencia(x,y){
    return Math.pow(x,y);
}
function raiz_cuadrada(x,y){
    return Math.sqrt(x);
}
function raiz_cubica(x,y){
    return Math.cbrt(y);
}
function absoluto(x,y){
    return Math.abs(x);
}
function trunca(x,y){
    return Math.trunc(x);
}
function primo(num,x){
    if(num<1){
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}
function factorial(n,y){
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
function GenerateFibonacci(number,y){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}
function selecciona(){
    let univ=document.getElementById('universal').value;
    let x=document.getElementById('num1').value;
    let y=document.getElementById('num2').value;
    if((x%1!=0 && univ!="valor trunco" || y%1!=0 && univ!="valor trunco")){
        document.getElementById("result").innerText='Ingresa número entero';
        return;
    }else if(x==false || y==false){
        document.getElementById("result").innerText='Ingresa los dos valroes';
        return;
    }
    x=parseInt(x);
    y=parseInt(y);
    var res=0;
    switch(univ){
        case "suma":
            res= universal(suma,x,y);
            break;
        case "resta":
            res= universal(resta,x,y);
            break;
        case "multiplicación":
            res= universal(multiplicacion,x,y);
            break;
        case "división":
            res= universal(division,x,y);
            break;
        case "potencia":
            res= universal(potencia,x,y);
            break;
        case "raíz cuadrada":
            res= universal(raiz_cuadrada,x,y);
            break;
        case "raíz cúbica":
            res= universal(raiz_cubica,x,y);
            break;
        case "absoluto":
            res= universal(absoluto,x,y);
            break;
        case "valor trunco":
            res= universal(trunca,x,y);
            break;
        case "es primo":
            res=universal(primo,x,y);
            break;
        /*case "serie fibonacci":
            res= universal(GenerateFibonacci,x,y);
            break;*/
        case "factorial":
            res=universal(factorial,x,y);
            break;
    }
    let linea="Simulación de " +univ+".\nResultado es:\n +res";
    document.getElementById("result").innerText=linea;
}

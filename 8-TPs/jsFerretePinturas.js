/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var num1,far;

    num1=parseInt(document.getElementById("Temperatura").value);

if(num1==0){
    alert(num1+" Fahrenheit son 32 centígrados");
}else{    
far=(num1+1)*32;
    alert(num1+" Fahrenheit son "+far+" centígrados");
}
}

function CentigradosFahrenheit () 
{
	var num1,resultado;

    num1=parseInt(document.getElementById("Temperatura").value);

if(num1==32){
    alert(num1+" centígrados son 0 Fahrenheit");
}else{    
resultado=(num1/32)-1;
    alert(num1+" centigrados son "+resultado+" Fahrenheit");
}
}

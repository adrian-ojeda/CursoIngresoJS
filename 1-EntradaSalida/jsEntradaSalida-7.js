/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var num1;
var num2;
var suma;

num1=parseInt(document.getElementById("numeroUno").value);

num2=parseInt(document.getElementById("numeroDos").value);

suma=num1+num2;
alert("La suma es igual a: "+suma);
}

function restar()
{
var num1;
var num2;
var resta;

num1=parseInt(document.getElementById("numeroUno").value);

num2=parseInt(document.getElementById("numeroDos").value);

resta=num1-num2;
alert("La resta es igual a: "+resta);
}

function multiplicar()
{ 
var num1;
var num2;
var multiplo;

num1=parseInt(document.getElementById("numeroUno").value);

num2=parseInt(document.getElementById("numeroDos").value);

multiplo=num1*num2;
alert("La multiplicación es igual a: "+multiplo);
}

function dividir()
{
var num1;
var num2;
var division;

num1=parseInt(document.getElementById("numeroUno").value);

num2=parseInt(document.getElementById("numeroDos").value);

division=num1/num2;
alert("La división es igual a: "+division);
}


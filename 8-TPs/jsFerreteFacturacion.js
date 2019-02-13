/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var num1, num2, num3,suma;

num1=parseInt(document.getElementById("PrecioUno").value);
num2=parseInt(document.getElementById("PrecioDos").value);
num3=parseInt(document.getElementById("PrecioTres").value);

//parseInt(num1, num2, num3);

suma=(num1+num2+num3);

alert("El total es: "+suma);
}
function Promedio () 
{
    var num1, num2, num3,promedio;

num1=parseInt(document.getElementById("PrecioUno").value);
num2=parseInt(document.getElementById("PrecioDos").value);
num3=parseInt(document.getElementById("PrecioTres").value);

//parseInt(num1, num2, num3);

promedio=(num1+num2+num3)/3;

alert("El total es: "+promedio);
	
}
function PrecioFinal () 
{
var num1, num2, num3,suma;

num1=parseInt(document.getElementById("PrecioUno").value);
num2=parseInt(document.getElementById("PrecioDos").value);
num3=parseInt(document.getElementById("PrecioTres").value);

//parseInt(num1, num2, num3);

final=(num1+num2+num3)
final=final+(final*0.21);

alert("El total es: "+final);
}
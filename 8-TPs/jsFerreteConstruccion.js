/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo, ancho, total;

largo=parseInt(document.getElementById("Largo").value);
ancho=parseInt(document.getElementById("Ancho").value);

total=(largo*2+ancho*2)*3;

alert("La cantidad de alambre a comprar es: "+total)

}
function Circulo () 
{
	var radio, total;

radio=parseInt(document.getElementById("Radio").value);

total=radio*radio;

alert("La cantidad de alambre a comprar es: "+total)
}
function Materiales () 
{
	var largo, ancho, material,cemento,cal;

largo=parseInt(document.getElementById("Largo").value);
ancho=parseInt(document.getElementById("Ancho").value);

material=largo*ancho;
cemento=material*2;
cal=material*3;

alert("Debe comprar: "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.")
}
/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var num1, num2, operacion;
function comenzar()
{
    num1=Math.floor(Math.random() * (10+1));
    document.getElementById("PrimerNumero").value=num1;

    operacion=Math.floor(Math.random() * ("+","-","*","/"));
    document.getElementById("Operador").value=operacion;

    num2=Math.floor(Math.random() * (10+1));
    document.getElementById("SegundoNumero").value=num2;
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN

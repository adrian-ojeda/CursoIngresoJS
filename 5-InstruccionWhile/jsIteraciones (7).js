function mostrar()
{

	var contador=0;
	var acumulador, num=0, suma=0;
	var respuesta='si';

  num=prompt("Ingrese la cantidad de números a sumar.");

  while(contador<num){
    contador++;
    acumulador=prompt("Ingrese 5 números.");
    acumulador=parseInt(acumulador);
    suma+=acumulador;
  }

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/num;

}//FIN DE LA FUNCIÓN

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

  num=prompt("Ingrese la cantidad de números a sumar.");

  while(contador<num){
    acumulador=prompt("Ingrese su número.");
    suma=acumulador+acumulador;
    contador++;
  }

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

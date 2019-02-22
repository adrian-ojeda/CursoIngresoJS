function mostrar()
{

	var contador=0;
	var acumulador, num=0, suma=0;
	var respuesta='si';

  respuesta=confirm("Quiere ingresar un número?");

  //if(respuesta==true){
  while(respuesta==true){
    contador++;
    acumulador=prompt("Ingrese el número.");
    acumulador=parseInt(acumulador);
    suma+=acumulador;
    respuesta=confirm("Quiere ingresar otro número?");
}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN

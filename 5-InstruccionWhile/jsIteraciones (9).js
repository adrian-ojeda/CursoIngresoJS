function mostrar()
{

  var contador=0;
  var minimo, maximo;
  minimo=parseInt(minimo);
  maximo=parseInt(maximo);

	// declarar variables

	var respuesta='si';

	respuesta=confirm("Quiere ingresar un número?");

  while(respuesta==true){
    acumulador=prompt("Ingrese el número.");
    acumulador=parseInt(acumulador);
      if(acumulador<acumulador){
        minimo=acumulador;
      }
      if(acumulador>acumulador){
        maximo=acumulador;
      }
    respuesta=confirm("Quiere ingresar otro número?");
}

document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;



}//FIN DE LA FUNCIÓN

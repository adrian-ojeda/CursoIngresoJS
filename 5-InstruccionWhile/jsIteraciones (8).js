function mostrar()
{

	var contador=0;
	var positivo=0;
  var negativo=0;

	var respuesta='si';

  respuesta=confirm("Quiere ingresar un número?");

  //if(respuesta==true){
  while(respuesta==true){
    acumulador=prompt("Ingrese el número.");
    acumulador=parseInt(acumulador);
      if(acumulador<0){
        negativo+=acumulador;
      }else{
        positivo+=acumulador;
      }
    respuesta=confirm("Quiere ingresar otro número?");
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

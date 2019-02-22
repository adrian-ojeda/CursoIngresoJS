function mostrar()
{

  var contador=0;
  //var minimo=0, maximo=0;

	// declarar variables

	var respuesta='si';

	respuesta=confirm("Quiere ingresar un número?");

/*  while(respuesta==true){
    num=prompt("Ingrese el número.");
    num=parseInt(num);
      if(num<minimo){
        minimo=parseInt(minimo);
        minimo=num;
      }
      if(num>maximo){
        maximo=num;
      }
    respuesta=confirm("Quiere ingresar otro número?");
}*/

do{
  num=prompt("Ingrese el número.");
  contador++;
    if(contador==1){
      minimo=num;
      maximo=num;
      }else{
        if(num<minimo){
        minimo=parseInt(minimo);
        minimo=num;
        }
        if(num>maximo){
        maximo=num;
        }
        }
    respuesta=confirm("Quiere ingresar otro número?");
}while(respuesta==true);

document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;



}//FIN DE LA FUNCIÓN

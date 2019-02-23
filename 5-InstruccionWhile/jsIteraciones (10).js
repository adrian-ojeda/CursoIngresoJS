function mostrar()
{

  var contador=0,
  var negativo, promedioneg, contneg=0, diferencia;
  var positivo, promediopos, contpos=0;
  var impar, par, contcero=0;
	//declarar contadores y variables

	var respuesta="si";

	respuesta=confirm("Quiere ingresar un número?");

  do{
    num=prompt("Ingrese el número.");
    contador++;
      if(num>0){
        positivo+=num;
        contpos++;
        promediopos=positivo/contpos;
          }else{
            negativo+=num;
            contneg++;
            promedioneg=negativo/contneg;
            }
      if(num/2==0){
        par++;
          }else{
            impar++;
            }
       if(num==0){
         contcero++;
       }
      respuesta=confirm("Quiere ingresar otro número?");
  }while(respuesta==true);




}//FIN DE LA FUNCIÓN

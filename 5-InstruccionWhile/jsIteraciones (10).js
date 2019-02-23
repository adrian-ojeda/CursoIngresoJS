function mostrar()
{
  var contador=0;
  var negativo=0, promedioneg=0, contneg=0;
  var positivo=0, promediopos=0, contpos=0;
  var impar=0, par=0, contcero=0;
	//declarar contadores y variables

	var respuesta="si";

	respuesta=confirm("Quiere ingresar un número?");

  do{
    num=prompt("Ingrese el número.");
    num=parseInt(num);
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
        if(num==0){
                contcero++;
                  }
      if(num%2==0){
        par++;
          }else{
            impar++;
            }
      respuesta=confirm("Quiere ingresar otro número?");
  }while(respuesta==true);

document.write("Cantidad de números positivos: "+contpos+". Cantidad de números negativos: "+contneg
+". Suma de números positivos: "+positivo+". Suma de números negativos: "+negativo
+". Promedio de números positivos: "+promediopos+". Promedio de números negativos: "+promedioneg
+". Números pares: "+par+". Números impares: "+impar+". Cantidad de ceros: "+contcero);

}//FIN DE LA FUNCIÓN

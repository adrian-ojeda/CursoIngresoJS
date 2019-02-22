function mostrar()
{

	var contador=0;
  var num,suma=0;

  //num=parseInt(prompt("Ingrese 5 números."));


while(contador<5){
  contador++;
  num=prompt("Ingrese 5 números.");
  num=parseInt(num);
  suma+=num;
}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN

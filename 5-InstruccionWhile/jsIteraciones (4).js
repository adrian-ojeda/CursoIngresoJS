function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

while(numero>=0&&numero<=9){
	document.getElementById("Numero").value=numero;
	break;
}

}//FIN DE LA FUNCIÓN
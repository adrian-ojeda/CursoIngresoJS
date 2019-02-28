var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
eleccionMaquina=Math.floor(Math.random() * (3+1));
    alert(eleccionMaquina);	 	

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina){
        case 1:
            ContadorDeEmpates++;
			document.getElementById("empatadas").value=ContadorDeEmpates;
            break;
        case 2:
            ContadorDePerdidas++;
			document.getElementById("perdidas").value=ContadorDePerdidas;
            break;
        case 3:
			ContadorDeGanadas++;
			document.getElementById("ganadas").value=ContadorDeGanadas;
            break;
        }

}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina){
        case 1:
			ContadorDeGanadas++;
			document.getElementById("ganadas").value=ContadorDeGanadas;
			break;
        case 2:
            ContadorDeEmpates++;
			document.getElementById("empatadas").value=ContadorDeEmpates;
            break;
        case 3:
            ContadorDePerdidas++;
			document.getElementById("perdidas").value=ContadorDePerdidas;
            break;
            }
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina){
        case 1:
            ContadorDePerdidas++;
			document.getElementById("perdidas").value=ContadorDePerdidas;
            break;
        case 2:
            ContadorDeGanadas++;
			document.getElementById("ganadas").value=ContadorDeGanadas;
            break;
        case 3:
            ContadorDeEmpates++;
			document.getElementById("empatadas").value=ContadorDeEmpates;
            break;
            }
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}
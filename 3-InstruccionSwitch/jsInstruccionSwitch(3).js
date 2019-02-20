function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
        case "Febrero":
            alert("Este mes tiene 29 días.");
            break;
        default:
            alert("Este mes tiene 30 días o más.");
    }


}//FIN DE LA FUNCIÓN
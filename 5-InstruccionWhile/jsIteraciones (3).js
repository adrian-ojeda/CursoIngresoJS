function mostrar()
{

var cont=0, clave = prompt("ingrese el número clave.");

while(clave!="utn750"){
    clave=prompt("Error. Ingrese el número clave nuevamente.");
    cont++;
        if(cont>1){
            alert("Ud. ingresó la clave incorrecta 3 veces.")
            break;
        }
            switch (clave){
                case "utn750":
                    alert("Bienvenido!");
            }
}




}//FIN DE LA FUNCIÓN

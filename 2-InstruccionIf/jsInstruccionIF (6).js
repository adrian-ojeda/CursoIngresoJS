function mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById("edad").value;

    if (edad>=18){
        alert("Ud. es mayor de edad.");
            }
    
    if(edad>=13&&edad<=17){
        alert("Ud. es adolescente.")
            }else{
                alert("Es un niño.")
            }
            



}//FIN DE LA FUNCIÓN
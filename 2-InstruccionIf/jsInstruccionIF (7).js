function mostrar()
{
//tomo la edad  

var edad, estado;

edad=parseInt(document.getElementById("edad").value);
estado=document.getElementById("estadoCivil").value;

if((edad<18)&&(estado!="soltero")){
    alert("Ud. es muy joven para no estar soltero.")
     }
}	


//FIN DE LA FUNCIÓN
function mostrar()
{
var cont=0;
var notas, sexo;

do{
    notas=alert("Ingrese la nota del alumno.");
    if(notas<=10&&notas>0){
    notas=parseInt(notas);
    }else{
        alert("La nota debe de ser entre 0 y 10.");
cont++;
}
}while (cont<5);

}

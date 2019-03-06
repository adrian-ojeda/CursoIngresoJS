function mostrar()
{
    var cont=1;
    var notas, sexo, suma=0, promedio=0;
    var cantvar=0;
    var min, sexmin;
    

    do{
        notas=prompt("Ingrese la nota del alumno: "+cont);
        if(notas<=10&&notas>0){
        notas=parseInt(notas);
        }else{
            alert("La nota debe de ser entre 0 y 10.");
            notas=prompt("Ingrese la nota del alumno: "+cont);
        }
        sexo=prompt("Ingrese el sexo del alumno: "+cont);
        if((sexo!="f")&&(sexo!="m")){
            alert("El sexo debe ser f=femenino o m=masculino.");
            sexo=prompt("Ingrese el sexo del alumno: "+cont);
        }
        if(sexo=="m"&&notas>=6){
            cantvar++;
        }
        if(cont==1){
            min=notas;
        }
        if(min>notas&&sexo=="m"||sexo=="f"){
            min=notas;
            sexmin=sexo;
        }

    suma+=notas;
    promedio=suma/cont;    
    cont++;
    
    }while (cont<=5);
    alert("sexo: "+sexo+" notas: "+notas+" promedio: "+promedio+" minimo: "+min+" sexominimo: "+sexmin+" cantvarones: "+cantvar);
}

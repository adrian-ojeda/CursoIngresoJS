function mostrar()
{
var num, par, cant=0;

num=prompt("Ingrese un número.");
num=parseInt(num);

for(var i=1;i<=num;i++){
    if(num%i==0){
        alert("Los números divisores de su número son: "+i);
        cant++;
     }
    }

if(cant==2){
    alert("Su número es primo.");
}else{
    alert("Su número no es primo. Tiene: "+cant+" divisores.");
}      
    

}//FIN DE LA FUNCIÓN
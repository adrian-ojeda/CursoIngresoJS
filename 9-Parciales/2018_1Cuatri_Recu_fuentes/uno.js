
function mostrar()
{
//alert(tenes dos mascotas xxxx y xxxx , que pesa xx y xx kilos, la suma de los kilos es xxxx"")

var masc1, masc2, peso1, peso2, pesototal;


masc1=prompt("Ingrese el nombre de la primera mascota.");
peso1=parseInt(prompt("Ingrese su peso en kilos."));
masc2=prompt("Ingrese el nombre de la segunda mascota");
peso2=parseInt(prompt("Ingrese su peso en kilos."));

pesototal=peso1+peso2;

alert("Tenes dos mascotas "+masc1+" y "+masc2+", que pesan: "+peso1+" kgs y "+peso2+" kgs, la suma de los kilos es: "+pesototal)


}

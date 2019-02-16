function mostrar()
{
 //alert(tu compra es de $xxx tenes un descuento del 10% queda en $xxx, mas el iva es $xxx)

 var precio1, precio2, suma, descuento, total;

 precio1=parseInt(document.getElementById("elNombre").value);
 precio2=parseInt(document.getElementById("laLocalidad").value);

suma=precio1+precio2;
descuento=suma-(suma*0.1);
total=descuento+(descuento*0.21);

alert("Tu compra es de $"+suma+". Tenes un descuento del 10%. Queda en $"+descuento+". Más el IVA el total es de $"+total);


}

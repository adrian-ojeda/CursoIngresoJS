function mostrar()
{
var precio,descuento,resultado;

precio=prompt("Ingrese el precio");
descuento=prompt("Ingrese el descuento");
parseFloat(precio,descuento);

resultado=precio-(precio*descuento/100);

document.getElementById("elPrecioFinal").value=resultado;
}

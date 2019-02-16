function mostrar()
{
var cantidad, precio, total, porcentaje, iva;

precio=parseInt(document.getElementById("elPrecioFinal").value);

p1=precio;

cantidad=prompt("Ingrese el número de personas.")

porcentaje=(precio*0.1);
iva=(precio*0.21);
precio=precio+porcentaje;
precio=precio+iva;
total=precio/cantidad;

alert("La propina es $"+porcentaje+". El IVA% es $"+iva+". El total a pagar es de $"+precio+". Cada uno debe pagar $"+total);


}

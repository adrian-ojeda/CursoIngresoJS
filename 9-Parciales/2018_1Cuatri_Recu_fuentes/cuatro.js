function mostrar()
{
var medio, cantidad, precio, descuento, desc1, desc2, cargo;

cantidad=prompt("Ingrese la cantidad de libros comprados.");
precio=parseInt(prompt("Ingrese el precio total de la compra."));
medio=confirm("¿Ud. pagó con tarjetade crédito?");

    if(cantidad>2){
        precio=precio-(precio*0.1);
        }

    if(precio>=2000){
        precio=precio+(precio*0.15);
        }

    if(medio==true){
        cargo=total*0.1;
        total=total+cargo;
        }   
    
    alert("Ud compró "+cantidad+" libros. Por un total de $"+pago+". Su descuento es de $"+descuento+". Cargo por"
    +" compra con tarjeta de crédito $"+cargo+". Su compra queda en $"+total);

                
                }
    
}

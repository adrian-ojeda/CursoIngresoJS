/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad, precio, precioFinal=35, marca;

     cantidad=parseInt(document.getElementById("Cantidad").value);
     marca=document.getElementById("Marca").value;

     if(cantidad>=6){
         //precioFinal=cantidad*35;
         //precioFinal=precioFinal-(precioFinal*0.5);
         precioFinal=cantidad*precioFinal*0.5;
         document.getElementById("precioDescuento").value=precioFinal;
        }   

    if(cantidad==5){
        if(marca=="ArgentinaLuz"){
            //precioFinal=cantidad*35;
            //precioFinal=precioFinal-(precioFinal*0.4)
            precioFinal=precioFinal*0.6;
            document.getElementById("precioDescuento").value=precioFinal;
                }else{
                //precioFinal=cantidad*35;
                //precioFinal=precioFinal-(precioFinal*0.3);
                precioFinal=precioFinal*0.7;
                document.getElementById("precioDescuento").value=precioFinal;
                }
             }

    if(cantidad==4){
        if(marca=="ArgentinaLuz"||"FelipeLamparas"){
            //precioFinal=cantidad*35;
            //precioFinal=precioFinal-(precioFinal*0.25);
            precioFinal=precioFinal*0.75;
            document.getElementById("precioDescuento").value=precioFinal;
                }else{
                //precioFinal=cantidad*35;
                //precioFinal=precioFinal-(precioFinal*0.20);
                precioFinal=precioFinal*0.8;
                document.getElementById("precioDescuento").value=precioFinal;
                }
                }

    if(cantidad==3){
        if(marca=="ArgentinaLuz"){
            //precioFinal=cantidad*35;
            //precioFinal=precioFinal-(precioFinal*0.15);
            precioFinal=precioFinal*0.85;
            document.getElementById("precioDescuento").value=precioFinal;
                }if(marca=="FelipeLamparas"){
                //precioFinal=cantidad*35;
                //precioFinal=precioFinal-(precioFinal*0.2);
                precioFinal=precioFinal*0.8;
                document.getElementById("precioDescuento").value=precioFinal;
                }else{
                //precioFinal=cantidad*35;
                //precioFinal=precioFinal-(precioFinal*0.05);
                precioFinal=precioFinal*0.95;
                document.getElementById("precioDescuento").value=precioFinal;
                }
                }  
    
    if (cantidad<3){
        precioFinal=cantidad*35;
        document.getElementById("precioDescuento").value=precioFinal;
    }
                          

     if(precioFinal>120){
         iibb=precioFinal*0.1;
         alert("IIBB Usted pago $"+iibb);
         document.getElementById("precioDescuento").value=precioFinal;
     }           
    

    }

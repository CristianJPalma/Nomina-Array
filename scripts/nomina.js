function calcularSalario(PvalorDia,PnumeroDia,Pedad){
    let valorDia = PvalorDia;
    let numeroDia = PnumeroDia;
    let edad = Pedad
    let salario = valorDia * numeroDia;
    if(edad>60){
        extra = salario * 0.06
    }
    else if(edad<40){
        extra = salario * 0.08
    }
    else{
        extra = 0
    }
    return salario;
}

function calcularSalud(PvalorDia,PnumeroDia,Pedad){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia,Pedad);
    let saludPersona = salarioPersona * 0.12;
    return saludPersona;
}

function calcularSubTransporte(PvalorDia,PnumeroDia,Pedad){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia,Pedad);
    let salarioMinimo = 1300000;
    let subTrasporte;
    if(salarioPersona <= (salarioMinimo * 2)){
        subTrasporte = 114000;
    }
    else{
        subTrasporte = 0;
    }
    return subTrasporte;
}

function calcularPension(PvalorDia,PnumeroDia,Pedad){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia,Pedad);
    let pensionPersona = salarioPersona * 0.16;
    return pensionPersona;
}

function calcularArl(PvalorDia,PnumeroDia,Pedad){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia,Pedad);
    let ArlPersona = salarioPersona * 0.052;
    return ArlPersona;
}

function calcularRetencion(PvalorDia,PnumeroDia,Pedad){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia,Pedad);
    let salarioMinimo = 1300000;
    let retencion;
    if(salarioPersona >= (salarioMinimo * 6)){
        retencion = salarioPersona * 0.04
    }
    else if(salarioPersona >= (salarioMinimo * 4)){
        retencion = salarioPersona * 0.02
    }
    else{
        retencion = 0
    }
    return retencion;
}

function calcularDeducible(PvalorDia,PnumeroDia,Pedad){
    let descuento;
    let dSalud = calcularSalud(PvalorDia,PnumeroDia,Pedad);
    let dPension = calcularPension(PvalorDia,PnumeroDia,Pedad);
    let dArl = calcularArl(PvalorDia,PnumeroDia,Pedad);
    let dRetencion = calcularRetencion(PvalorDia,PnumeroDia,Pedad);
    descuento = dSalud + dPension + dArl + dRetencion;
    return descuento; 
}


function calcularPagoTotal(PvalorDia,PnumeroDia,Pedad){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia,Pedad);
    let subTrasporte = calcularSubTransporte(PvalorDia,PnumeroDia,Pedad);
    let descuento = calcularDeducible(PvalorDia,PnumeroDia,Pedad);;
    let pago;
    pago = salarioPersona + subTrasporte  - descuento;
    return pago;
}
let totalpago = []
let nomina = [
    {id:1, numDocumento:12354748, nombres:'Emily', apellidos:'Rodriguez', edad:43, valorDia:500000, diasTrabajados:30},
    {id:2, numDocumento:23123132, nombres:'Jose', apellidos:'Garcia', edad:29, valorDia:30000, diasTrabajados:30},
    {id:3, numDocumento:12342342, nombres:'Pedro', apellidos:'Hernandez', edad:35, valorDia:45000, diasTrabajados:30},
    {id:4, numDocumento:12344572, nombres:'Maria', apellidos:'Gonzales', edad:65, valorDia:65000, diasTrabajados:30},
    {id:5, numDocumento:23234344, nombres:'Juan', apellidos:'Lopez', edad:24, valorDia:70000, diasTrabajados:30},
    {id:6, numDocumento:23434545, nombres:'Carlo', apellidos:'Martinez', edad:41, valorDia:54000, diasTrabajados:30},
    {id:7, numDocumento:13423342, nombres:'Sofia', apellidos:'Perez', edad:63, valorDia:45300, diasTrabajados:30},
    
]
console.log(nomina)
let iteracion
for(iteracion = 0; iteracion < nomina.length; iteracion++){
    let valorDia = nomina[iteracion].valorDia
    let diasTrabajados = nomina[iteracion].diasTrabajados
    let edad = nomina[iteracion].edad
    salario = calcularSalario(valorDia,diasTrabajados,edad)
    subTrasporte = calcularSubTransporte(valorDia,diasTrabajados,edad)
    salud = calcularSalud(valorDia,diasTrabajados,edad)
    pension = calcularPension(valorDia,diasTrabajados,edad)
    arl = calcularArl(valorDia,diasTrabajados,edad)
    retencion =calcularRetencion(valorDia,diasTrabajados,edad)
    descuento = calcularDeducible(valorDia,diasTrabajados,edad)
    pagototal = calcularPagoTotal(valorDia,diasTrabajados,edad)

    totalpago.push({id:nomina[iteracion].id, nombre:nomina[iteracion].nombres,
         apellido:nomina[iteracion].apellidos, edad:nomina[iteracion].edad,
         salario,subTrasporte,salud,pension,arl,retencion,descuento,pagototal})
}
console.table(totalpago)




for(iteracion = 0; iteracion < nomina.length; iteracion++){

    if(nomina[iteracion].id < nomina.length){
        let  salario = calcularPagoTotal(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados, nomina[iteracion].edad) 
        console.log("T.I: "+nomina[iteracion].numDocumento+"  Nombre: "+nomina[iteracion].nombres+"  Apellido: "+nomina[iteracion].apellidos+"  Edad: "+nomina[iteracion].edad+"  Salario Total: "+salario)
    }
    else{
        salario = 0
    }
}
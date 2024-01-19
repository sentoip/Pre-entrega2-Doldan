let opciones

let productos = [
    { codigo: 1, nombre: "Nike Air Huarache Run Ultra", precio: 72, talle: 44},
    { codigo: 2, nombre: "Nike AirForce", precio: 77, talle: 39 },
    { codigo: 3, nombre: "ADIDAS SUPERNOVA 2", precio: 80, talle: 41 },
    { codigo: 4, nombre: "ADIDAS Fluidflow", precio: 87, talle: 43 },
    { codigo: 5, nombre: "ADIDAS Sobakov", precio: 99, talle: 47 },
];



let metodosEnvios = "1- Correo Argentino.\n2- OCA.\n3- Andreani"

const suma = (a,b) => a + b

const iva = x => x * 0.21



do {
    opciones = parseInt(prompt("Elija una opción:\n1- Catálogo.\n2- Calcular IVA\n3- Consultar presupuesto.\n4- Metodos de envío.\n\n Pulse 0 para cancelar"));
    switch (opciones) {
        case 0:
            alert("Gracias por su consulta. Vuelva pronto.");
            break;
        case 1:
            alert("Este es nuestro catálogo con sus respectivos precios en dólares:");
            mostrarCatalogo();
            break;
        case 2:
            alert("Ingrese el producto que desea:");
            let codigoProducto2 = parseInt(prompt("Ingrese el codigo del producto"));
            calcularIva(codigoProducto2);
            break;
        case 3:
            alert("Ingrese su presupuesto en dolares:");
            let dinero = parseInt(prompt("Ingrese su presupuesto"));
            calculoPresupuesto(dinero);
            break;
        case 4:
            alert("Los métodos de envío disponibles son:");
            mostrarEnvios();
            break;
        default:
            alert("Error")
            break;
    }
}
while (opciones !== 0);

function mostrarEnvios(){
    alert(metodosEnvios);
}

function mostrarCatalogo() {
    let catalogo = "Catálogo de productos:\n";
    productos.forEach(zapa => {
        catalogo += `${zapa.codigo} - ${zapa.nombre} $${zapa.precio}\nTalles Disponibles: ${zapa.talle}\n`;
    });
    alert(catalogo);
}


function calcularIva(codigo) {
    let producto = productos.find(zapa => zapa.codigo === codigo);
    if (producto) {
        let nuevoPrecio = suma(producto.precio, iva(producto.precio));
        alert(`El total del producto ${producto.nombre} más IVA es de \$${nuevoPrecio}`);
    } else {
        alert("Código no válido");
    }
}


function calculoPresupuesto(dinero) {
    if (dinero >= 0 && dinero < 72 ) {
        alert(`El producto mas barato sale \$${Math.min(72, 77, 80, 87, 90)}`);
    }
    else if(dinero >= 72 && dinero < 77 ) {
        alert("Con este dinero podes comprarte unas Nike Air Huarache Run Ultra");
        alert(`y te sobran \$${dinero - 72}`);
    }
    
    else if(dinero >= 77 && dinero < 80 ) {
        alert("Con este dinero podes comprarte unas Nike AirForce");
        alert(`y te sobran \$${dinero - 77}`);
    }
    
    else if(dinero >= 80 && dinero < 87 ) {
        alert("Con este dinero te compras unas ADIDAS SUPERNOVA 2");
        alert(`y te sobran \$${dinero - 80}`);
    }
    
    else if(dinero >= 87 && dinero < 90 ) {
        alert("Con este dinero te compras unas ADIDAS Fluidflow");
        alert(`y te sobran \$${dinero - 87}`);
    }
    
    else if(dinero >= 90 && dinero < 100 ) {
        alert("Con este dinero te compras unas ADIDAS Sobakov");
        alert(`y te sobran \$${dinero - 90}`);
    }
    
    else {
        alert(`El producto mas caro sale \$${Math.max(72, 77, 80, 87, 90)}`);
    }

}
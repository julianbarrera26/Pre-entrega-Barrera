console.log ("Bienvenidos");

let titulo = prompt ("Ingrese un Titulo para su Producto");

console.log (titulo);

let habitaciones = prompt (
    `Cuantas habitaciones?
    1: 1 Habitacion
    2: 2 Habitaciones
    3: 3 Habitaciones
    Mas habitaciones`
)

switch (habitaciones) {
    case "1":
        console.log (`1 Habitacion`)
        break
    case "2":
        console.log (`2 Habitaciones`)
        break
    case "3":
        console.log (`3 Habitaciones`)
        break
    default:
        console.log (`Mas habitaciones`)
        break
}

let metrosLargo = Number(prompt("Ingrese los metros de largo del terreno"))
let metrosAncho = Number(prompt("Ingrese los metros de ancho del terreno"))

function metrosCuadrados (metrosLargo, metrosAncho) {
    return metrosLargo * metrosAncho 
}

let resultado = metrosCuadrados(metrosLargo,metrosAncho)

console.log(resultado)


let precio = Number (prompt("ingrese el precio para calcular las cuotas"))
for (let i = 1; i < 13; i++) {
    let resultado = precio / i;
    console.log (`${precio} / ${i} = ${resultado} `)
}

const propiedad = [
    {titulo: "Departamento PLENO CENTRO",
    ubicacion: "obispo trejo 500",
    precio: 2000000},
    {titulo: "Departamento con Balcon",
    ubicacion: "independencia 100",
    precio: 3000000},
    {titulo: "Departamento BARRIO CENTRO",
    ubicacion: "colon 245",
    precio: 2000000},
    {titulo: "Departamento GRAL PAZ",
    ubicacion: "24 de septiembre 250",
    precio: 4500000}
]

const filtrado = propiedad.filter((p) => p.precio === 2000000)

console.log (filtrado)

function solPropietario(nombre, apellido, documento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
    this.clave = function (params) {
        console.log (this.documento + "1234")
    }

}

let propietario1 = new solPropietario ("julian", "perez", 45625874)

console.log(propietario1)

propietario1.clave()

const elementosMuebles = [ "inodoro", "lavatorio", "cocina", "ventilador"]

console.log(elementosMuebles)

const muebles = [];
let   cantidad = 10;

do{
    let entrada = prompt("Ingresar maximo 10 artefactos del inmuebles");
    muebles.push(entrada.toUpperCase());
    console.log(muebles.length);}

    while(muebles.length != cantidad)

const nuevaLista = muebles.concat(["vanitory","cocina", "termotanque", "bajomesada", "ventilador"]);

console.log(nuevaLista.join("\n"));


for (let index = 0; index < elementosMuebles.length; index++) {
    alert (elementosMuebles[index]);
    
}



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
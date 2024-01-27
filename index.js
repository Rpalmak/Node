const { registrar, leer } = require("./operaciones");

const operacion = process.argv[2];
console.log(operacion);

if (operacion === "registrar") {
    const [nombre, edad, animal, color, enfermedad] = process.argv.slice(3);
    registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === "leer") {
    leer();
}

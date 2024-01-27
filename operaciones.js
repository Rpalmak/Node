const fs = require('fs');


const leer = () => {
    const tareas = fs.readFileSync('citas.json', 'utf8')
    console.log(tareas)
}

const registrar = (operacion, nombre, edad, animal, color, enfermedad) => { 
    const contenidoActual = fs.readFileSync('citas.json', 'utf8');
    let citas = [];
        citas = JSON.parse(contenidoActual);
        const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);
    const nuevoContenido = JSON.stringify(citas, null, 2);
    fs.writeFileSync('citas.json', nuevoContenido);
    console.log('Cita registrada con éxito:', nuevaCita);
}



module.exports = {registrar, leer}
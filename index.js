const { register, read } = require('./operaciones.js');
const fs = require('node:fs');

const [action, ...params] = process.argv.slice(2);

// create citas if doesn't exist
if (!fs.existsSync('citas.json')) {
  fs.writeFileSync('citas.json', '[]');
}

switch (action) {
  case 'registrar':
    register(params);
    break;

  case 'leer':
    read();
    break;
  default:
    console.log('** Error: Accion inválida **, Ej: node index.js registrar nombre edad tipo color enfermedad')
    break;
}




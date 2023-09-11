const fs = require('node:fs');

const register = (args) => {
  const newAnimal = {
    name: args[0],
    age: args[1],
    type: args[2],
    color: args[3],
    disease: args[4]
  }

  const appointments = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  appointments.push(newAnimal);
  fs.writeFileSync('citas.json', JSON.stringify(appointments));
  console.log('Registro exitoso');
}

const read = () => {
  const appointments = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  appointments.forEach((appointment) => {
    console.log(appointment)
  })
}

module.exports = { register, read };
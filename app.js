const colors = require("colors");
const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

//imprimir la tabla de multiplicar de 5`
console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow))
    .catch((err) => console.log(err));

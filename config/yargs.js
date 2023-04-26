const { describe } = require("yargs");

const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        description: "Es la base de la tabla de multiplicar",
    })
    .option("l", {
        alias: "lisar",
        type: "boolean",
        demandOption: true,
        default: false,
        description: "Muestra la tabla en consola",
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: 10,
        description: "Este es el numero hasta donde quieres la tabla ",
    })
    .check((argv, options) => {
        // console.log('yargs', argv)
        if (isNaN(argv.b)) {
            throw "La base tieneque ser un numero ";
        }
        return true;
    }).argv;

module.exports = argv;

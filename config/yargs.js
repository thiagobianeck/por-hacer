const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
};

const opts2 = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }};

const argv = require('yargs')
    .command('crear','Crear un elemento por hacer', opts)
    .command('actualizar','Actualiza el estado completado de una tarea', Object.assign(opts, opts2))
    .help()
    .argv;

module.exports = { argv };

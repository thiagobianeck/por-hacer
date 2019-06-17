const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('tarea', tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('listado =>', listado);
        for( let tarea of listado ) {
            console.log('======= Por Hacer ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado ? 'Completado'.green : 'No completado'.red);
            console.log('========================='.green);
        }
        console.log('Mostrar todas las tareas por hacer por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea');
        break;
    default:
        console.log('Comando no es reconocido');

}

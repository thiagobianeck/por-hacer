const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo gravar', err);
    });

};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;
};

const getListado = (filtrado) => {
    cargarDB();
    if(filtrado === undefined) {
        return listadoPorHacer;
    } else if (filtrado === true || filtrado === 'true'){
        listadoPorHacer = listadoPorHacer.filter(tarea => {
            return tarea.completado === true || tarea.completado === 'true';
        });
        return listadoPorHacer;
    } else {
        listadoPorHacer = listadoPorHacer.filter(tarea => {
            return tarea.completado === false || tarea.completado === 'false';
        });
        return listadoPorHacer;
    }

};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer
        .findIndex( tarea => tarea.descripcion === descripcion);

    if(index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer
        .findIndex( tarea => tarea.descripcion === descripcion);
    if(index >= 0 ) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

module.exports = { crear, getListado, actualizar, borrar };

require('colors');

const showOptions = ()=> {

  


    console.log(`${'1'.green}- Crear tarea`);
    console.log(`${'2'.green}- Listar tarea`);
    console.log(`${'3'.green}- Listar tareas completadas`);
    console.log(`${'4'.green}- Listar tareas pendientes`);
    console.log(`${'5'.green}- Completar tareas`);
    console.log(`${'6'.green}- Borrar tarea`);
    console.log(`${'0'.green}- Salir\n`);

    const readLine = require('readLine').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readLine.question('Seleccione una opción: ', (opt)=> {
        readLine.close();
    });
}

const pause = ()=> {

    const readLine = require('readLine').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readLine.question(`\n Presiona ${'ENTER'.green} para continuar\n`, (opt)=> {
        readLine.close();
    });
}


module.exports = {

    showOptions,
    pause
}
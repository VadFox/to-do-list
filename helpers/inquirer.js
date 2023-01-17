const inquirer = require('inquirer');
const Tasks = require('../models/tasks');
require('colors');

const menuQuestions = [
    {
        type:'list',
        name:'option',
        message:'Que desea hacer ?',
        choices:[
            {
                value:'1',
                name:`${'1'.blue}- Crear tarea`
            },
            {
                value:'2',
                name:`${'2'.blue}- Listar tarea`
            },
            {
                value:'3',
                name:`${'3'.blue}- Listar tareas completadas`
            },
            {
                value:'4',
                name:`${'4'.blue}- Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5'.blue}- Completar tareas`
            },
            {
                value:'6',
                name:`${'6'.blue}- Borrar tarea`
            },
            {
                value:'0',
                name:`${'0'.blue}- Salir`
            },
        ]
    }
]


const inquirerMenu = async () => {

    console.clear();
    console.log("=============================".blue);
    console.log("    Seleccione una opción:    ".white);
    console.log("=============================\n".blue);

    const {option} = await inquirer.prompt(menuQuestions);
    return option;
}

const pause = async() => {

    const pause = [
        {
            type:'input',
            name:'stop',
            message:`Presiona ${'ENTER'.green} para continuar`, 
        }
    ]
    console.log('\n');
   await inquirer.prompt(pause);
    
       
}

const readInput = async ( message )=> {

    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return ' Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;

}

const listTaskDelete = async ( task = []) => {

    const choices  = task.map( (task, i) => {

        const idx = `${i + 1}.`.blue
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }

        
    });

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]


    const { id } = await inquirer.prompt(question);
    return id;
}


module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTaskDelete
}
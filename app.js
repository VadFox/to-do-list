require('colors');
const {saveDb, readDb} = require('./helpers/saveArchive');
const { 
    inquirerMenu,
     pause,
      readInput,
      listTaskDelete,
        confirm,
            showListCheckList
    } 
      = require('./helpers/inquirer');
const Tasks = require('./models/tasks');



console.clear();


const main = async () => {

    let opt = '';

    const tasks = new Tasks();

    const tasksDb = readDb();
    
    if (tasksDb){

        tasks.loadTask(tasksDb);
    }

    do {

        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                    // crear opcion
                    const desc = await readInput('Descripcion: ')
                    tasks.createTasks(desc);

                break;
        
            case '2':
                tasks.listComplete();
                break;

            case'3':
                tasks.listAwaitComplete(true);
                break;
                
            case'4':
                tasks.listAwaitComplete(false);
                break;

            case'5':
                const ids = await showListCheckList(tasks.listArr);
                tasks.toggleCompletes( ids );
                break;

            case'6':
                const id = await listTaskDelete( tasks.listArr);
                if ( id !== '0') {

                        const ok = await confirm('Estas Seguro ?'); // Preguntar si esta seguro
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('Tarea Eliminada Correctamente');
                    }
                    
                }
                

                break;
        }

        saveDb(tasks.listArr);




        await pause();
    
    } while (opt !== '0');
    

}


main();
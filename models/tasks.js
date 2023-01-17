const Task = require('./task');

class Tasks {

    _list = {};

    get listArr (){

        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key]
            list.push(task);
        })

        return list;
    }

    constructor(){
        this._list = {};
    }

    deleteTask( id = '') {

        if (this._list[id]){
            delete this._list[id];
        }
    }

    loadTask (tasks = []) {

        tasks.forEach( task => {

            this._list[task.id] = task;
        
        })

     

    }

    createTasks( desc = '') {

        const task = new Task(desc);

        this._list[task.id]= task; 


    }

    listComplete() {

        console.log();
        this.listArr.forEach( (task, i) => {

            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = task;
            const state = (completadoEn)
                            ?'Completado'.green
                            :'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${state}` )


        })
    }

    listAwaitComplete( completes = true){

        console.log();
        let contador = 0;
        this.listArr.forEach( task => {

            const {desc, completadoEn} = task;
            const state = (completadoEn)
                            ?'Completado'.green
                            :'Pendiente'.red;

            if (completes) {
                //Mostrar tareas completadas
                if (completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').blue} ${desc} :: ${completadoEn.blue}`)
                }
                
            }   else {
                    //Mostrar Pendientes
                    if (!completadoEn) {
                        contador += 1;
                        console.log(`${(contador + '.').blue} ${desc} :: ${state}`)
                    }
                }
        
        })

    }

    toggleCompletes( ids = [] ) {

        ids.forEach ( id => {

            const task = this._list[id];
            if ( !task.completadoEn) {
                task.completadoEn = new Date().toISOString()
            }
        });

        this.listArr.forEach( task => {

            if( !ids.includes(task.id)) {
                this._list[task.id].completadoEn = null;
            }
        })
    }

}

module.exports = Tasks;
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

        this.listArr.forEach( (task, i) => {

            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = task;

            if (completes == true){

                const state = (completadoEn)
                            ?'Completado'.green
                            :'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${state}` )

            } else {

                
            }
          

        })

    }

}

module.exports = Tasks;
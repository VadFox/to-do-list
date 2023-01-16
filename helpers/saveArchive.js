const fs = require('fs');

const archive = './db/data.json';

const saveDb = (data) => {  
    fs.writeFileSync(archive, JSON.stringify(data));

}

const readDb = ()=> {
    if( !fs.existsSync(archive)) {
        return null;
    }
    const info = fs.readFileSync(archive, { encoding: 'utf-8'});
    const data = JSON.parse (info);
    
    console.log(data);

    return data;
}


module.exports = {
    saveDb,
    readDb
}
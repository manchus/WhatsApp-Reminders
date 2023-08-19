const { startAPI } = require('./src/api');
const { task_scheduler } = require('./src/programador');

(async() =>{
    try{
        const client = await startAPI();
        task_scheduler(client);
    } catch(error){
        console.log('Error en Index', error);
    }
} )();

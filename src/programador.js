const { sndMsg } = require('./message');
const cron = require('node-cron');


const CONTACT ='14384081220@c.us';
const MSG_GREETINGS = [
    'Good morning!',
    'Morning!',
    'Greetings in the morning!',
    'Rise and shine!',
    'Top of the morning to you!',
    'Hello, it is a new day!',
    'Happy morning!',
    'Wishing you a wonderful morning!',
    'Have a great morning!',
    'May your day start with joy and light!',
]

function task_scheduler(client){
    const tiempo = '0 50 16 * * *'; //seg min hora
    if(cron.validate(tiempo)){
        console.log('Cron inicializado');
        cron.schedule(tiempo, async()=> {
            try{
                const greeting = MSG_GREETINGS[Math.floor(Math.random() * MSG_GREETINGS.length)];
                await sndMsg(client, CONTACT, greeting);
                console.log('Msg sent');
            }catch(error){
                console.log('Cron error!', error);
            }
        });
    }
}

module.exports = {
    task_scheduler,
};
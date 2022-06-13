


const baseTask = (mensagem, tempoEmSegundos) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(mensagem);
        }, tempoEmSegundos * 1000);
        
    });
};

const task1 = () => baseTask("Terminou a Task 1 em 10 segundos", 10);
const task2 = () => baseTask("Terminou a Task 2 em 10 segundos",5);
const task3 = () => baseTask("Terminou a Task 3 em 10 segundos", 4);
const task4 = () => baseTask("Terminou a Task 4 em 10 segundos", 4);

module.exports = {task1, task2, task3, task4};




// const {task1, task2, task3, task4} = require("./taskSyncAsync");

// const minhaVar = function test(){

// };

// const syncronousExecution = a


// function rand(min = 1000, max = 3000){
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num); 
// }

// // console.log(rand());

// function f1(callback) {
//     setTimeout(function (f1) { // setTimeout(function(parametro){
//         //console.log(qualquer coisa);
//         //}, timer);
//         console.log('f1');
//         if (callback) callback();
//     }, rand())

// };

// function f2(callback) {
//     setTimeout(function (f2) {
//         console.log('f2');
//         if (callback) callback();
//     }, rand())


// };

// function f3(callback) {
//     setTimeout(function (f3) {
//         console.log('f3');
//         if (callback) callback();
//     }, rand()); /* a chamada da funcao rand() no lugar do meu timer 
//     me permite randomizar o timer entre as funcoes*/ 


// };

// // f1(function() {
// //     f2(function() {
// //         f3(function() {
// //             console.log('Ola mundo');
// //         });
// //     });
// // });

// f1(f1CallBack);
// function  f1CallBack(){
//     f2(f2CallBack);
// }

// function f2CallBack(){
//     f3(f3CallBack);
// }

// function f3CallBack(f3){
//     console.log('Ola Mundo');
// };


// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num);
// }




function f1(callback) {
    setTimeout(function () {   
        console.log(`Tarefa 1 apos 10 segundos`);
        if (callback) callback();
    }, 10*1000)

};

function f2(callback) {
    setTimeout(function () {
        console.log(`Tarefa 2 apos  5 segundos`);
        if (callback) callback();
    }, 5 * 1000)

};

function f3(callback) {
    setTimeout(function () {
        console.log(`Tarefa 3 apos 4 segundos`);
        if (callback) callback();
    }, 4 * 1000);

};

function f4(callback) {
    setTimeout(function () {
        console.log(`Tarefa 4 apos 4 segundos`);
        if (callback) callback();
    }, 4 * 1000);

};


f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
};

function f2Callback(){
    f3(f3Callback);
          
};

function f3Callback(){
    f4(f4CallBack);
};

function f4CallBack(){
    console.log('Terminei as tarefas');
};



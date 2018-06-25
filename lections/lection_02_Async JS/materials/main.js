console.log('Lection_2')

/*
    + асинхронный Javascript
    + цепочки промисов
    + Параллельное выполнение - Promise.all()
    + async function
*/

// console.log(1);

// let async = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let res = 2;

//         reject(res);
//     }, 2000);
// });

// console.log(3);

// async
//     .then((arg)=>{
//         console.log('all ok', arg);

//         return arg;
//     },
//     (arg)=>{
//         return new Promise((resolve, reject)=>{
//             console.log('all ne ok', arg);
//             reject(arg);
//         });
//     })
//     .then((arg)=>{
//         console.log('bye bye', arg);
//     },
//     arg => console.error(arg))

// console.log(4);



// -----------------------

// let async = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let res = 2;

//         reject(res);
//     }, 2000);
// });


// async
//     .then(onLoad)
//     .then(onFinish)
//     .catch(error => console.error(error));



// function onLoad(resp) {
//     console.log(resp);

//     return resp;
// }

// function onFinish(resp) {
//     console.log(resp);

//     return resp;
// }



// ---------------------------------


// let async1 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let res = 2;

//         resolve(res);
//     }, 2000);
// });


// let async2 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let res = 28;

//         resolve(res);
//     }, 1500);
// });

// let async3 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let res = 22;

//         resolve(res);
//     }, 1000);
// });



// Promise
//     .all([async1, async2, async3])
//     .then(function(args){
//         console.log(args);
//     },
//     function(){ console.log(arguments)})



// ---------------------------------

// function load(method, path) {
//     let xhr = new XMLHttpRequest();

//     xhr.open(method, path, true);
//     let async = new Promise(function(resolve, reject){
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState != 4) {
//                 return;
//             }

//             resolve(JSON.parse(xhr.responseText));
//         }
//     });

//     xhr.send();

//     return async;
// }


// var res1 = load('GET', '/data.json'),
//     res2 = load('GET', '/info.json');


// Promise
//     .all([res1, res2])
//     .then(values => {
//         console.log(values);

//         let res = values.reduce((prev, item)=> 
//             item.status ? prev.concat(item.values) : prev, []);

//         console.log(res);
//     });


// ---------------------------------

// // Normal Function
// function add(x,y){
//     return x + y;
// }
// // Async Function
// async function add(x,y){
//     return x + y;
// }


// function doIt(x) {
//     console.log('in');
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x * 2);
//       }, 500);
//     });
//   }

//   doIt(10)
//     .then(function(x){
//         console.log(x)

//         return doIt(x);
//     })
//     .then(function(x){
//         console.log();
//     });



// async function addAsync(x) {
//     // const a = await doIt(10);
//     // const b = await doIt(20);
//     // const c = await doIt(30);

//     // console.log(a, b, c);

//     return [
//             await doIt(10), 
//             await doIt(20), 
//             await doIt(30)
//         ];
// }

// addAsync(10).then((values) => {
//     console.log(values);
// });


// --------------------------------

// function* gen(x){
//     yield 10*x;
//     yield { x },
//     yield 'str';
// }

// var step = gen(8);

// // console.log( step.next() ); // { value: 80, done: false }
// // console.log( step.next() );
// // console.log( step.next() );
// console.log( step.next() );


// for(let item of step){
//     console.log(item);
// }


// ------------------------

// function* gen(){
//     for(let i = 0; i < arguments.length; i++){
//         yield Math.pow(arguments[i], 2);
//     }
// }

// // for(let item of gen(8,5,87,585,85,874,7,4,74,7,4)){
// //     console.log(item);
// // }

// var p = gen(8,5,87,585,85,87);


// p.next();

// p.next();

// p.next();


// ------------------------

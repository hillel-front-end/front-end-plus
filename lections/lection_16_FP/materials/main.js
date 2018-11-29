
// чистая функция

/*
* Все полезные чистые функции должны возвращать что-нибудь.
* Чистая функция всегда возвращает одинаковые значения для одинаковых входных данных.
* Чистые функции не имеют побочных эффектов.



*/

// var z = 10;
// function add(x, y, b) {
//     return x + y + b;
// }

// add(2, 5, z);



// неизменяемость

/*
* В функциональном программировании нет переменных.


// Функциональное программирование решает проблему изменений значения записи тем, 
// что делает копию уже изменённой записи. 

*/


var x = 1;
x = x + 1;

const y = 10;

let move = (value, step) => value + step;

// console.log( move(y, 9) );


// рекурсия

var acc = 0;
for (var i = 1; i <= 10; ++i)
    acc += i;
// console.log(acc);

function sumRange(start, end, acc) {
    if (start > end)
        return acc;
    return sumRange(start + 1, end, acc + start)
}
// console.log(sumRange(1, 10, 0));



// Функции высшего порядка

/*
* Функции высшего порядка либо принимают функции как параметры, либо возвращают их, 
    либо и то, и другое одновременно.
* Замыкание — область видимости функции, которая сохраняется благодаря ссылке на эту функцию.
*/

function f1(cb) {
    return x => cb(x);
}

function f2(){}

f1(f2)(10);




// Композиция функций

var add10 = value => value + 10;
var mult5 = value => value * 5;

// good?
var mult5AfterAdd10 = value => 5 * (value + 10)

// good
var mult5AfterAdd10 = value => mult5(add10(value));

[1, -8, -5, 2, -5, 6]
    .filter( item => item > 0 )
    .map( item => item * 10 )
    .reduce((prev, item) => item + prev, 0)



// Каррирование

/*
* В идеале: Каррированная функция— это функция, принимающая один аргумент за раз.



*/

// var add = (x, y) => x + y;
// add(5, 12);

// var add = x => y => x + y;
// add(5)(12);

// fix для add10 и mult5

// var compose = (f, g) => x => f(g(x));
// var mult5AfterAdd10 = compose(mult5, add);
// mult5AfterAdd10(10);

// bind

// let add = (a, b) => a+b;
// let increment = add.bind(null,1);
// let incrementBy2 = add.bind(null,2);
// console.log('Increment 3 by 2:',incrementBy2(3));
// console.log('Increment 3 by 1:',increment(3));

// carring

let add = x => y => x+y;
let increment = add(1);
let incrementBy2 = add(2);
// console.log('Increment 3 by 1:',increment(3));
// console.log('Increment 3 by 2:',incrementBy2(3));


// do func

// very bad
// 'Hello'.replace(/Hello/g, 'Bye').concat('!');

// // функционально
// const replace = (regex, replacement, str) => str.replace(regex, replacement);
// const concat = (item, str) => str.concat(item);

// concat('!', replace(/Hello/g, 'Bye', 'Hello'));

// compose

const compose = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// const replace = (regex,replacement) => str => str.replace(regex,replacement);
// const concat = item => str => str.concat(item);

// let results = compose(
//         replace(/lo/g, 'lololo'), 
//         concat('!'),
//         (str) => str.toUpperCase()
//         )
// ('Hello');

// console.log(results);

// [1, -8, -5, 2, -5, 6]
//     .filter( item => item > 0 )
//     .map( item => item * 10 )
//     .reduce((prev, item) => item + prev, 0)

let filter = cb => list => list.filter(cb);
// let map = cb => list => list.map(cb);
// let reduce = (cb, sum) => list => list.reduce(cb, sum);

// let res2 = compose(
//     filter(item => item > 0),
//     map(item => item * 10),
//     reduce((prev, item) => item + prev, 0)
// )([1, -8, -5, 2, -5, 6]);

// console.log(res2);


// Стандартные функции функционального программирования
// map, filter, reduce

// bad
var things = [1, 2, 3, 4];
var newThings = [];
for (var i = 0; i < things.length; ++i) {
    newThings[i] = things[i] * 10;
}
// console.log(newThings); // [10, 20, 30, 40]


// good
var map = (f, array) => {
    var newArray = [];
    for (var i = 0; i < array.length; ++i) {
        newArray[i] = f(array[i]);
    }
    return newArray;
};

var things = [1, 2, 3, 4];
var newThings = map(v => v * 10, things);
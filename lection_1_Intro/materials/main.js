console.log('Lection_1');


/*

- Scoping
- Arrow Functions
- Extended Parameter Handling // rest, spread (home)
- Template Literals // tag templates

- Object Properties
- Destructuring

- Classes
- Generators
- Promises

*/
// var x = 10;

// function f() {
//     var x;

//     console.log(x);

//     return x;
// }

// f();


// let, const

// if (true) {
//     // let x = 10;

//     let x = 20;

//     if (true) {
//         console.log(x);
//     }
// }


// console.log(x);


// const x = 10;
// const obj = {
//     z: 20,
//     t: 30
// };
// // x = 20;
// obj.z = 60;
// // delete obj.t;
// obj = false;

// console.log(x, obj);


// ----------------------


// function f(){

// }

// f1 = function(item) {
//     return item * 2;
// }
// // f1_a = (item) => {
// //     return item * 2;
// // }

// f1_a = item => {
//     console.log('fine', this);

//     return item * 2
// };

// let obj = {
//     sum: (a, b) => {
//         console.log(this);

//         return a + b;
//     }
// }


// -------------------


// let arr = [21, 71, 8, 74, 8, 3, 4, 12];

// let res = arr
//             .map(item => item*item)
//             .filter(item => item > 100)
//             .reduce((prev, item) => item + prev, 0);

// console.log(res);


// -------------------


// function f(a = 0, b = 20) {
//     if (b === undefined) {
//         b = 20;
//     }
//     console.log(a, b);
// }

// f(2, '');



// -------------------

// let text = '100';

// var str = `
// hello

// ${text}

// world
// `;

// let string = `2 + 4 = ${text - 4}`

// ----------------------------------
// window.onload = function() {
//     let list = [
//         'Vasya',
//         'Petya',
//         'Vasya',
//         'Petya',
//         'Vasya',
//         'Petya',
//         'Ignat'
//     ];


    
//     let str = `<hr />${genList(list)}<hr />`;
    
//     document.body.innerHTML = str;
// }



// function genList(list) {
//     return `
//         <ul>
//             ${list.map(item => `<li>${item}</li>`).join('')}
//         </ul>
//     `;
// }



// ------------------------------------

// let x = 20;
// let str = 'str';

// let obj = { 
//     x, 
//     str,
//     sum() {
//         console.log(this);
//     }
//  }


// module.exports = { router: get, foo }


// ------------------------------------


// let [a, b, c] = [6, , 3, 4];
// let { d, e = '', k, inner: {q, f = 1000}, list: [u, , i] } = {
//     list: [
//         1, 2, 3
//     ],
//     d: 'str',
//     e: false,
//     inner: {
//         q: 40
//     }
// } 

// console.log(a, b, c);
// console.log(d, e, k, q, f, u, i);



// ------------------------------------

// var arr = [2, 8, 4, 9, 5, 7];

// // let buffer = arr[0];
// // arr[0] = arr[arr.length - 1];
// // arr[arr.length - 1] = buffer;
// let last = arr.length-1;

// [arr[0], arr[last]] = [arr[last], arr[0]]

// console.log(arr);


 // ---------------------------------

class World {

    life(){
        console.log(this);
    }
}


class Human extends World {
    constructor(name, age) {
        super();

        this.name = name;
        this.age = age;

        super.life()

        // this.foo = function(a, b) {
        //     return a + b + age; 
        // }
    }

    run() {
        console.log(this); 
    }

    eat() {

    }

    get getAge(){
        return this.age;
    }
}



 var p1 = new Human('Petya', 20);

 console.log(p1);
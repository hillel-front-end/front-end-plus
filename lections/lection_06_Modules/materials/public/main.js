// "use strict"

// var global = 100;

// var config = {
//     host: 'localhost',
//     port: '8080'
// }

// // IIFE
// var module = (function([cf]){
//     var x = 10;
//     // method();

//     // console.log(window.global, global, this.global);
//     console.log(cf);

//     function method(){
//         return x;
//     }

//     // return method; // api

//     return {
//         method,
//         name: 'Name'
//     }
// })([config]);

// console.log(module);
// module.method();

// console.log(m1);


// ---------------------------------------


window.onload = function(){
   
    let url = 'https://currate.ru/api/?get=rates&pairs=USDUAH,EURUAH&key=5518cb5735f55fcc5099df715e72ef81'
    fetch(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        }
    })
        .then(res => res.json())
        .then(resp => {
            let cur = 27.3;
            // let prev = resp.exchangeRate[16].saleRateNB;


            document.querySelector('.target').innerHTML = `
                <tr>
                    <td>USD</td>
                    <td>${prev}</td>
                    <td>${cur}</td>
                    <td>${(cur*100/prev).toFixed(0)}%</td>
                </tr>  
            `;
        });

    
}
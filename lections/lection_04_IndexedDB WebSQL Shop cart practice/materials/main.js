console.log('lection_4');

/*
 scheme

* Открыть базу данных.
* Создать хранилище объектов в базе данных, над которой будут выполняться наши операции. 
* Запустить транзакцию и выдать запрос на выполнение какой-либо операции с базой данных,
     например, добавление или извлечение данных.
* Ждать завершения операции, "слушая" событие DOM, на которое должен быть установлен 
    наш обработчик.
* Сделать что-то с результатами (которые могут быть найдены в возвращаемом по 
    нашему запросу объекте ).
*/

var list = [
    {
        name: 'Name1',
        key: 0
    },
    {
        name: 'Name2'
    },
    {
        name: 'Name3',
        status: 10
    }
]

// var request = indexedDB.open("Book_Store", 3);
// console.log(request);

// request.onerror = ev => console.log(ev);
// request.onsuccess = ev => {
//     // console.log('success', ev);
// }

// request.onupgradeneeded = function(event){
//     var db = event.target.result;
//     var objectStore = db.createObjectStore("books", { keyPath: "name" });
//     objectStore.createIndex("name", "status", { unique: false });

//     for (let item of list) {
//         objectStore.add(item);
//     }
// }

// ----------------------------------

function connectDB(f){
	var request = indexedDB.open("Goods_DB", 3);
	request.onerror = function(err){
		console.log(err);
	};
	request.onsuccess = function(){
		f(request.result);
	}
	request.onupgradeneeded = function(e){
        var data_default = e.currentTarget.result.createObjectStore("goods", { 
            keyPath: "key",
            autoIncrement: true
        });
        
        for (let item of list) {
            data_default.add(item);
        }

		connectDB(f);
	}
}

// connectDB(function(db) {
//     // console.log(db);    

//     var transaction = db
//                         .transaction(["goods"], "readwrite")
//                         .objectStore('goods');

//     var goodsFromDB = [];
//     console.log(transaction);
//     transaction.openCursor().onsuccess = function(event) {
//         var cursor = event.target.result;

//         console.log(cursor);
//         if (cursor) {
//             goodsFromDB.push(cursor.value);
//             cursor.continue();
//         }
//         else {
//             console.log("Got all customers: ", goodsFromDB);
//         }
//     };
// });

// -------------------------------- default example
// var info = {
//     id: 10,
//     name: 'FooName'
// }
// connectDB(function(db) {
//     var transaction = db.transaction(["goods"], "readwrite")
//      .objectStore('goods');
//     transaction.add(info);
// });


// ---------------------------

window.onload = function(){
    document
        .querySelector('#image-file')
        .addEventListener('change', function(event){
            console.log(event, this.files[0])

            setFile(this.files[0]);
        });
}

function setFile(file){
	connectDB(function(db){
        var request = db
            .transaction(['goods'], "readwrite")
            .objectStore('goods').put(file);
		// request.onerror = ev => console.log(ev);
		request.onsuccess = function(){
			return request.result;
		}
	});
}




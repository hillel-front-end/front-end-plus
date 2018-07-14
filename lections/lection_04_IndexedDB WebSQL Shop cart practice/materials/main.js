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
        key: 1
    },
    {
        name: 'Name2',
        key: 2
    },
    {
        name: 'Name3',
        key: 3
    }
]

// var request = indexedDB.open("Book_Store", 3);

// request.onerror = ev => console.log(ev);
// request.onsuccess = ev => {
//     console.log('success', ev);
// }

// request.onupgradeneeded = function(event){
//     var db = event.target.result;
//     var objectStore = db.createObjectStore("books", { keyPath: "name" });
//     objectStore.createIndex("name", "name", { unique: false });

//     for (let item of list) {
//         objectStore.add(item);
//     }
// }

// ----------------------------------

function connectDB(f){
	var request = indexedDB.open("Goods_DB", 1);
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
//     console.log(db);    

//     var transaction = db.transaction(["goods"], "readwrite").objectStore('goods');

//     var customers = [];
//     console.log(transaction);
//     transaction.openCursor().onsuccess = function(event) {
//     var cursor = event.target.result;
//     if (cursor) {
//         customers.push(cursor.value);
//         cursor.continue();
//     }
//     else {
//         console.log("Got all customers: ", customers);
//     }
//     };
// });

// --------------------------------

// connectDB(function(db) {
//     console.log(db);    

//     var transaction = db.transaction(["goods"], "readwrite").objectStore('goods');

//     var customer = {
//         id: 10,
//         name: 'FooName'
//     }

//     transaction.add(customer);
//     console.log(transaction);
// });


// ---------------------------

window.onload = function(){
    document
        .querySelector('#image-file')
        .addEventListener('change', function(event){
            console.log(event, this)

            setFile(this.files[0]);
        });
}

function setFile(file){
	connectDB(function(db){
		var request = db.transaction(['goods'], "readwrite").objectStore('goods').put(file);
		// request.onerror = ev => console.log(ev);
		request.onsuccess = function(){
			return request.result;
		}
	});
}




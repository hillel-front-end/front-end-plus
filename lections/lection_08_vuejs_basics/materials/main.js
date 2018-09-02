// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 10.5
//   }
// })


// setTimeout(() => {
//   console.log(app.message);
// }, 1000)

// // ---------------------------------------

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     className: 'active',
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   }
// })

// // ---------------------------------------

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// setTimeout(() => {
//   app3.seen = false;
// }, 3000)


// // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [{
//         text: 'Изучить JavaScript'
//       },
//       {
//         texts: 'Изучить Vue'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ]
//   }
// })

// console.log(app4.todos)




// // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!'
//   },
//   methods: {
//     clickMeEvent() {
//       this.message += ' click'
//     }
//   }
// })

// // ---------------------------------------

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Привет, Vue!',
//     result: 'RESULT'
//   }
// })

// // ---------------------------------------

// // ---------------------------------------

Vue.component('todo-item', {
  props: ['struct'],
  template: `<li>{{ struct.id }} | {{ struct.value }}</li>`
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    value: 'example val',
    list: [
      12,
      24,
      35,
      14
    ]
    // value: [1, 6, 7, 9],
    // value: 20
  }
})
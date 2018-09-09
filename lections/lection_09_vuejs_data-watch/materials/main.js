var obj = {
  x: 22
}

var appData = {
  list: [1, 2, 3, 4],
  str: '123',
  ctx: {},
  resp: null,
  disable: true
}
// console.log(appData);
// debugger;

var app = new Vue({
  el: '#app',
  data: appData,
  methods: {},
  created: function () {
    // fetch
    console.log('created', this.ctx)

    // this.resp = data;
    // debugger;
  },
  mounted: function(){
    console.log('mounted', this.$el);
    // debugger;
    this.$nextTick(function(){
      console.log('mounted tick');
      this.disable = false;
    });
  },
  updated: function() {
    console.log('updated', this.ctx);

    this.$nextTick(function(){
      console.log('updated tick');
    })
  }
})

app.$nextTick(function(){
  console.log('app tick');
})

// appData.ctx.x = 200;

Vue.set(app.ctx, 'x', 200);

// console.log(app.$data === appData);
// console.dir( app.$el );

app.$watch('list', function (newValue, oldValue) {
  console.log(newValue, oldValue);

  app.$nextTick(function(){
    console.log('updated tick');
  })
});


// ------------------------------


// created: function () {
//   console.log(this.value)
// }

// mounted: function () {
//   this.$nextTick(function () {
//     // Код, который будет запущен только после
//     // отображения всех представлений
//   })
// }

// updated: function () {
//   console.log('updated');
//   // this.$nextTick(function () {
   
//   // })
// }

// destroyed
// Вызывается после уничтожения экземпляра Vue.
//  К моменту вызова этого хука, все директивы экземпляра Vue 
//  уже отвязаны, все подписчики событий удалены,
//   а все дочерние экземпляры Vue уничтожены.
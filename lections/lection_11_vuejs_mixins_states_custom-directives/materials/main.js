// var someMixin = {
//   created: function () {
//     console.log('created someMixin');
    
//     if (this.config) {
//       console.log(this.config);
//     }
//   },
//   mounted: function () {
//     console.log('mounted someMixin')
//   },
//   data: function(){
//     return {
//       innerKey: 'inner value',
//       x: 10
//     }
//   },
//   methods: {
//     inner: function () {
//       console.log('inner mixin')
//     }
//   },
//   computed: {
//     someValue: function(){
//       if (this.$options.debug){
//         console.log('DEBUG', this.x)
//       }
//       return this.x;
//     }
//   }
// }

var app = new Vue({
  el: '#app',
  mixins: [someMixin],
  foobar: 'foobar',
  debug: false,
  data: {
    message: 10.5,
    x: 60
  },
  created: function(){
    console.log('created app');
    console.log(this);
  },
  methods: {
    innerApp: function () {
      console.log('innerApp mixin')
    }
  }
})


// ---------------------------
// global mixins

// Vue.mixin({
//   created: function () {
//     var myOption = this.$options.configKey
//     if (myOption) {
//       console.log(myOption)
//     }
//   }
// })

// new Vue({
//   configKey: 'hello!'
// })

// new Vue({
//   configKey: 'yom!'
// })


// ---------------------------
// directives

Vue.directive('my-directive', {
  bind: function(el, binding, vnode, oldVnode){
    console.log('bind', el, binding, vnode, oldVnode)
  },
  inserted: function () {
    console.log('inserted');
  },
  update: function(el, binding, vnode, oldVnode){
    console.log('update', el, binding, vnode, oldVnode);
  },
  componentUpdated: function(){
    console.log('componentUpdated');
  }
})
/*
bind: вызывается однократно, при первичном связывании директивы с элементом. 

inserted: вызывается после вставки связанного элемента внутрь
 элемента родителя

update: вызывается после обновления VNode компонента-контейнера,
но, возможно, до обновления дочерних элементов

componentUpdated: вызывается после обновления как VNode компонента-контейнера, 
так и VNode его потомков.

unbind: вызывается однократно, при отвязывании директивы от элемента.
*/


var store = {
  _x: 1050,
  get x(){
    return this._x;
  },
  set x(value){
    this._x = value;
  }
}

var app = new Vue({
  el: '#app',
  data: {
    message: 10.5,
    value: 200,
    store
  },
  methods: {
    change() {
      this.store.x++;
    }
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    store
  }
})

  
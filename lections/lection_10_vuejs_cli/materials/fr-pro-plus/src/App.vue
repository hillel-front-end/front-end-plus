<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <!-- {{ list }}
    <button v-on:click="list = getList()">Click</button>
    <hr>
    {{ foobar }}   -->
    <input type="number" v-model="value">
    
    <!-- <some 
      v-bind:val="value"
      v-on:input="onChange"></some>   -->

      <some v-model="value">
        <footer v-if="value == 100" slot="footer">
          Footer
        </footer>
        Hello
        <ul>
          <li v-for="item of list" v-bind:key="item">
            {{ item }}
          </li>
        </ul>


        <h2 slot="header">Header</h2>

        <br>
        World!
      </some> 
  </div>
</template>

<script>
import some from './components/some';

export default {
  name: 'App',
  components: {
    some
  },
  data: function(){
    return {
      list: [1, 2, 3],
      value: 10
    }
  },
  methods: {
    getList() {
        return this.list.reverse();
    },
    onChange(val){
      this.value = val;
    }
  },
  computed: {
    foobar() {
        return this.value + 200;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

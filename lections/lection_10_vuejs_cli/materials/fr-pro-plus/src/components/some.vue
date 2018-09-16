<template>
    <div class="some">
        <h1>Hello {{ name }}</h1>
        val: {{ val }}
        inner input: 
        <!-- <input 
            type="number" 
            v-bind:value="val"
            v-on:input="onChange($event)">   -->
        <input 
            type="number" 
            v-bind:value="val"
            v-on:input="onChange($event)">
        
        <hr>

        <slot></slot>    
        <slot name="header"></slot>   
        <slot name="footer"></slot>    
    </div>
</template>


<script>
export default {
    model: {
        prop: 'val',
        event: 'input'
    },
    props: ['val'],
    data: function(){
        return {
            name: 'Vasya'
        }
    },
    methods: {
        onChange(ev){
            this.$emit('input', ev.target.value);
        }
    }
}
</script>


<style>
    .some {
        color: red;
    }
</style>

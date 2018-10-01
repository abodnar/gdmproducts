<template>
    <div id="app">
        <h2>GDM Products!</h2>
        <Products></Products>
    </div>
</template>

<script>
import Products from '@/components/Products'
import Categories from '@/components/Categories'

export default {
  name: 'App',
  components: {
    Categories,
    Products
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>

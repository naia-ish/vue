<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add" >Add Restaurant</router-link>
    <a v-on:click="logout"><font-awesome-icon icon="fa-solid fa-right-from-bracket" /></a>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    methods:{
      logout() {
        localStorage.clear();
        this.$router.push({name: 'LoginPage'});
      }
    }
  }
</script>

<style>
  .nav {
    background-color: red;
    overflow: hidden;
  }

  .nav a {
    float: left;
    color: blue;
    padding: 14px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
  }

  .fa-right-from-bracket{
    color: blue;
  }

  .nav a:hover {
    background-color: gold;
  }

  .nav .pages-active-link {
    background-color: gold;
  }
</style>
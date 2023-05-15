<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add" >Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <router-link to="#" v-on:click="logout">Logout</router-link>
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

  .nav a:hover {
    background-color: gold;
  }
</style>
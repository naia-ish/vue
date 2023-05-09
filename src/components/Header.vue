<template>
  <div class="nav">
    <a href="#">Home</a>
    <a href="#">Add Restaurant</a>
    <a href="#">Update Restaurant</a>
    <a href="#">Logout</a>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header'
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
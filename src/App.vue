<template>
  <img alt="Wonder Woman logo" class="logo" src="./assets/logo.png">
  <router-view mensaje="Sign up please" mensajeLogin="U'r logged in"/>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let user = localStorage.getItem('user-info');

    if (!user) {
      //redirect
      this.$router.push({name: 'SignUp'});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 500px;
}

.register input, .login input{
  width: 500px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid blue;
  color: red;
}
.register button, .login button{
  width: 500px;
  height: 40px;
  border: 1px solid red;
  background-color: yellow;
  color: blue;
  cursor: pointer;
}
</style>

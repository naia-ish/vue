<template>
  <img alt="Wonder Woman logo" class="logo" src="./assets/logo.png">
  <SignUp mensaje="Wonder Woman"/>
</template>

<script>
import SignUp from "@/components/SignUp.vue";
export default {
  name: 'App',
  components: {
    SignUp
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
</style>

<template>
  <div>
    <h1>{{ mensaje }}</h1>
  </div>
  <div class="register">
    <input type="text" placeholder="Enter Name">
    <input type="text" placeholder="Enter Email">
    <input type="password" placeholder="Enter Password">
    <button>
      Sign up
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SignUp',
    props: {
      mensaje: String
    }
  }
</script>

<style>
.register input{
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
.register button{
  width: 500px;
  height: 40px;
  border: 1px solid red;
  background-color: yellow;
  color: blue;
  cursor: pointer;
}
</style>
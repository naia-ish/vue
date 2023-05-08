<template>
  <div>
    <h1>{{ mensaje }}</h1>
  </div>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name">
    <input type="text" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button v-on:click="signUp">
      Sign up
    </button>
    <p>
      <router-link to="/login">
          Login
      </router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: 'SignUp',
    props: {
      mensaje: String
    },
    data()
    {
      return {
        name: '',
        email: '',
        password: '',
      }
    },
    methods:{
      async signUp() {
        let result = await axios.post("http://localhost:3000/user", {
          name: this.name,
          email: this.email,
          password: this.password
        })

        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          //redirect
          await this.$router.push({name: 'MyHome'});
        }
      }
    },
    mounted() { //to avoid loading this page if a user is logged
      let user = localStorage.getItem('user-info');

      if (user) {
        //redirect
        this.$router.push({name: 'MyHome'});
      }
    }
  }
</script>
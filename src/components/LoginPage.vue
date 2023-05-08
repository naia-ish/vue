<template>
  <div>
    <h1>{{ mensajeLogin }}</h1>
  </div>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button v-on:click="login">
      Login
    </button>
    <p>
      <router-link to="/sign-up">
        Sign up
      </router-link>
    </p>
  </div>
</template>

<script>
  import axios from "axios";

export default {
    name:'LoginPage',
    props: {
      mensajeLogin: String
    },
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods:{
      async login() {
        let result = await axios.get(`http://localhost:3001/users?email=${this.email}&password=${this.password}`);
        console.log(result)
        if (result.data.length > 0 && result.status === 200) {
          console.log('si')
          localStorage.setItem('user-info', JSON.stringify(result.data));
          //redirect
          await this.$router.push({name:'MyHome'});
        }
      }
    },
    mounted() {
      let user = localStorage.getItem('user-info');

      if (user) {
        //redirect
        this.$router.push({name: 'MyHome'});
      }
    }
  }
</script>
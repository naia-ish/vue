<template>
  <Header/>
  <h1>Hey {{name}}, Welcome to WW Home</h1>
  <table class="table table-striped table-dark">
    <tr>
      <td class="col">Superhero</td>
      <td>Publisher</td>
      <td>Alter Ego</td>
      <td>First appearance</td>
      <td>Characters</td>
    </tr>
    <tr v-for="item in heroes" v-bind:key="item.id">
      <td>{{ item.superhero }}</td>
      <td>{{ item.publisher }}</td>
      <td>{{ item.alter_ego }}</td>
      <td>{{ item.first_appearance }}</td>
      <td>{{ item.characters }}</td>
    </tr>
  </table>
</template>

<script>
  import Header from "@/components/Header.vue";
  import axios from "axios";
  export default {
    name: 'MyHome',
    data() {
      return {
        name: '',
        heroes: [],
      }
    },
    components:{
      Header
    },
    async mounted() { //to avoid loading this page if a user is logged
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user)[0].name;

      if (!user) {
        //redirect
        this.$router.push({name: 'SignUp'});
      }
      let result = await axios.get("http://localhost:3000/heroes");
      this.heroes = result.data;

    }
  }
</script>

<style>
  td {
    width: 160px;
    height: 40px;
  }
</style>
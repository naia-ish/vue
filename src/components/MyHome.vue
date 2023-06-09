<template>
  <Header/>
  <h1>Hey {{name}}, Welcome to WW Home</h1>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <td class="col">Superheroe</td>
        <td class="col">Publisher</td>
        <td class="col">Alter Ego</td>
<!--        <td class="col">First Appearance</td>-->
        <td class="col">Characters</td>
        <td class="col">Actions</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in heroes" v-bind:key="item.id">
        <td class="col">{{ item.superhero }}</td>
        <td class="col">{{ item.publisher }}</td>
        <td class="col">{{ item.alter_ego }}</td>
<!--        <td class="col">{{ item.first_appearance }}</td>-->
        <td class="col">{{ item.characters }}</td>
        <td class="col">
          <router-link :to="'/update/' + item.id"><font-awesome-icon icon="fa-solid fa-pen-to-square" size="xl"/></router-link>
          <a v-on:click="deleteHero(item.id)"><font-awesome-icon icon="fa-solid fa-trash-can" size="xl"/></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import Header from "@/components/Header.vue";
  import axios from "axios";
  import '../assets/css/myhome.css';
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
    methods: {
      async deleteHero(id) {
        let result = await axios.delete("http://localhost:3000/heroes/" + id);

        if (result.status === 200) {
          this.loadData();
        }
      },
      async loadData() {

        //to avoid loading this page if a user is logged
        let user = localStorage.getItem('user-info');
        let name = JSON.parse(user)[0].name.slice(1);
        let capital = JSON.parse(user)[0].name[0].toUpperCase();
        this.name = capital + name;

        if (!user) {
          //redirect
          this.$router.push({name: 'SignUp'});
        }
        let result = await axios.get("http://localhost:3000/heroes");
        this.heroes = result.data;

      }
    },
    async mounted() {
      this.loadData();
    }
  }
</script>

<style>
  td {
    width: 160px;
    height: 40px;
  }

  .fa-solid{
    color: red;
  }
</style>
<template>
  <Header/>
  <h1>Hey {{name}}, WW Add Item</h1>
  <form class="add">
    <input type="text" name="superhero" placeholder="Enter Superhero" v-model="superhero"/>
    <input type="text" name="publisher" placeholder="Enter Publisher" v-model="publisher"/>
    <input type="text" name="alter_ego" placeholder="Enter Alter Ego" v-model="alter_ego"/>
    <input type="text" name="characters" placeholder="Enter Characters" v-model="characters"/>
    <button type="button" v-on:click="addSuperhero()">
      Add new Superhero
    </button>
  </form>
</template>

<script>
  import Header from "@/components/Header.vue";
  import axios from "axios";
  export default {
    name: 'AddItem',
    data() {
      return {
        name: '',
          superhero: '',
          publisher: '',
          alter_ego: '',
          characters: ''
      }
    },
    components:{
      Header
    },
    mounted() { //to avoid loading this page if a user is logged
      let user = localStorage.getItem('user-info');
      let name = JSON.parse(user)[0].name.slice(1);
      let capital = JSON.parse(user)[0].name[0].toUpperCase();
      this.name = capital + name;

      if (!user) {
        //redirect
        this.$router.push({name: 'SignUp'});
      }
    },
    methods: {
      async addSuperhero() {
        let response = await axios.post("http://localhost:3000/heroes",
            {
              superhero: this.superhero,
              publisher: this.publisher,
              alter_ego: this.alter_ego,
              characters: this.characters,
            });

        if (response.status === 201) {
          //redirect
          await this.$router.push({name: 'MyHome'});
        }
      }
    }
  }
</script>
<template>
  <Header/>
  <h1>Hey {{name}}, WW Update Item</h1>
  <form class="add">
    <input type="text" name="superhero" placeholder="Enter Superhero" v-model="heroes.superhero"/>
    <input type="text" name="publisher" placeholder="Enter Publisher" v-model="heroes.publisher"/>
    <input type="text" name="alter_ego" placeholder="Enter Alter Ego" v-model="heroes.alter_ego"/>
    <input type="text" name="characters" placeholder="Enter Characters" v-model="heroes.characters"/>
    <button type="button" v-on:click="editSuperhero()">
      Edit new Superhero
    </button>
  </form>
</template>

<script>
  import Header from "@/components/Header.vue";
  import axios from "axios";
  export default {
    name: 'UpdateItem',
    data() {
      return {
        name: '',
        heroes: {
          superhero: '',
          publisher: '',
          alter_ego: '',
          characters: '',
        }
      }
    },
    components:{
      Header
    },
    async mounted() { //to avoid loading this page if a user is logged
      let user = localStorage.getItem('user-info');
      let name = JSON.parse(user)[0].name.slice(1);
      let capital = JSON.parse(user)[0].name[0].toUpperCase();
      this.name = capital + name;

      if (!user) {
        //redirect
        this.$router.push({name: 'SignUp'});
      }

      const dataFromHome = await axios.get("http://localhost:3000/heroes/" + this.$route.params.id);
      this.heroes = dataFromHome.data;

    },
    methods: {
      async editSuperhero() {
          let response = await axios.put("http://localhost:3000/heroes/"+ this.$route.params.id,
              {
                superhero: this.heroes.superhero,
                publisher: this.heroes.publisher,
                alter_ego: this.heroes.alter_ego,
                characters: this.heroes.characters
              });

          if (response.status === 200) {
            //redirect
            await this.$router.push({name: 'MyHome'});
          }
      }
    }
  }
</script>
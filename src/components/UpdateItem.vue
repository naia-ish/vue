<template>
  <Header/>
  <h1>Hey {{name}}, WW Update Item</h1>
</template>

<script>
  import Header from "@/components/Header.vue";
  export default {
    name: 'UpdateItem',
    data() {
      return {
        name: ''
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
    }
  }
</script>
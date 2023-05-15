<template>
  <Header/>
  <h1>WW Update Item</h1>
</template>

<script>
  import Header from "@/components/Header.vue";
  export default {
    name: 'UpdateItem',
    components:{
      Header
    },
    mounted() { //to avoid loading this page if a user is logged
      let user = localStorage.getItem('user-info');

      if (!user) {
        //redirect
        this.$router.push({name: 'SignUp'});
      }
    }
  }
</script>
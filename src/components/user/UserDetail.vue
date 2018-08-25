<template>
  <div class="user-detail">
    <h3>Some User Details</h3>
    <p>User Loaded ID: {{ id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="link">Click Edit</router-link>
  </div>
</template>
<script>
  export default {
    props:{
      id: String
    },
    data(){
      return {
        link: {
          name:'UserEdit',
          params:{ id: this.id },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    beforeRouteEnter(to, from, next){
      if (true){
        next();
      } else {
        next(false);
      }
    }
  }
</script>

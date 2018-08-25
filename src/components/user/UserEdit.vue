<template>
  <div class="user-edit">
    <h3>Edit the User</h3>
    <p>Locale: {{ locale }}</p>
    <p>Analytics : {{ q }}</p>
    <button class="btn btn-primary" @click="confirmed=true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra Data</p>
  </div>
</template>
<script>
  export default {
    props: ['locale', 'q'],
    data(){
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirmed){
        next();
      } else {
        if(confirm('準備はいいですか？')){
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>

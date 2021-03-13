<template>
  <div class="container">
     <user-msg/>
     <toy-header/>
    <router-view />
  </div>
</template>

<script>
import userMsg from './cmps/userMsg.vue'
import toyHeader from './cmps/toyHeader.vue'

export default {
  data() {
    return {
    
    };
  },
  created() {
    console.log("Vue App was created!!!");
    this.$store.dispatch({ type: "loadToys" });
  },
  components: {
    toyHeader,
    userMsg,
  },
};
</script>


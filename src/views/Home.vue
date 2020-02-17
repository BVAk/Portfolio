<template>
  <div id="home" class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
   <div id="project"> <projects></projects></div>    
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  import Projects from "@/components/Projects.vue";
  
  export default {
    name: "home",
    components: {
      HelloWorld,
      Projects,
      
    }
  };
</script>

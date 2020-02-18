<template>
  <div id="home" class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
   <div id="project"> <projects></projects></div>    
   <div id="about"><about></about></div>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  import Projects from "@/components/Projects.vue";
  import About from "@/components/About.vue";
  export default {
    name: "home",
    components: {
      HelloWorld,
      Projects,
      About,
    }
  };
</script>

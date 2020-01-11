<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <projects></projects>

  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  import Projects from "@/components/Projects.vue";
  export default {
    name: "home",
    components: {
      HelloWorld,
      Projects
    }
  };
</script>
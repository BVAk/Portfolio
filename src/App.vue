<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-light sticky-top" style="background-color: #e3f2fd;">
      <a class="float-left" href="#home">Home </a> |
      <a class="float-left" href="#project"> Projects</a>
    </nav>
    <transition name="moveInUp">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

  }
  .moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}



  #nav {
    padding: 2%;
    justify-content: center;

    a {
      font-weight: bold;
      color: lightblue;
    }

    a:link {
      text-decoration: none;
    }
  }
</style>
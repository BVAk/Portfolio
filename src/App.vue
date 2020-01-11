<template>
  <div id="app">
     <nav id="nav" class="navbar navbar-light sticky-top" style="background-color: #e3f2fd;">
      <a class="float-left" href="#home">Home </a> |
      <a class="float-left" href="#project"> Projects</a>
     </nav>
       <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

#nav {
  padding: 2%;
  justify-content:center;

  a {
    font-weight: bold;
    color: lightblue;
  }

  a:link {
  text-decoration: none;
}
}
</style>

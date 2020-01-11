<template>
  <div id="app">
     <nav id="nav" class="navbar navbar-light sticky-top" style="background-color: #e3f2fd;">
      <router-link class="float-left" to="/">Home </router-link> |
      <router-link class="float-left" to="/project"> Projects</router-link>
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

    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>

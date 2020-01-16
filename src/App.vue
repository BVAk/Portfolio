<template>
  <div id="app">
    <nav  id="navbar" class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">Portfolio</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">About <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#project">Projects</a>
          </li>
        </ul>
      </div>
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
  a{
    margin:auto;
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
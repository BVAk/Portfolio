<template>
  <div class="about" >
   <div class="overflow-wrap">
      <div class="modal-wrap flex">
        <section class="flex height-fix">
          <div class="flex">
            <h1>About</h1>
          </div>
        </section>
      </div>
    </div>
    <div id="CV">
      <div class="row">
        <div class="col">
        <div class="header" >
          
              <h2>Viktoriia Bekk</h2>
          <h3>PHP Developer</h3>
          <div class="row">
            
            <div id="contact">
              <div class="row">
              <div class="col">
                <div class="row"> <font-awesome-icon :icon="['fab','linkedin']" width="20px" /><a href="https://www.linkedin.com/in/viktoriabekk-a79595147/">LinkedIn</a>
                </div>
                <div class="row"><font-awesome-icon :icon="['fab', 'bitbucket']" width="20px" /><a href="https://bitbucket.org/VikaBekk/">Bitbucket</a>
                </div>
                <div class="row"><font-awesome-icon :icon="['fab', 'github']" width="20px" /><a href="https://github.com/BVAk">GitHub</a>
                </div>
              </div>
              <div class="col">
                <div class="row">  <font-awesome-icon :icon="['fas', 'mobile-alt']" width="20px" /> <a href="tel:+380956289382">+380956289382</a>
                </div>
                <div class="row"> <font-awesome-icon :icon="['far','envelope']" width="20px" /><a href="mailto:bekkviktoria55@gmail.com">bekkviktoria55@gmail.com</a>
                </div>
                <div class="row"></div>

              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
          
            <div id="img">
              <img src="me.jpg" width="200px">
          
          </div>
        </div>
        <div class="row">
          <div class="col">
          <div class="skills">
            <div class="row" float="center"><h2>Skills</h2></div>
          
          <div class="row">
            <div class="col">PHP</div>
            <div class="col">Laravel</div>
            <div class="col">Sql</div>
          </div>
          <div class="row">
            <div class="col">GIT</div>
            <div class="col">Linux</div>
            <div class="col">JavaScript</div>
          </div>
          
          <div class="row">
            <div class="col">Vue.js</div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
   
  
</template>

<script>
    export default {
        name: "About"

    };
</script>
<style>
    .about {
        height: -webkit-fill-available;
        text-align: center;
        margin: 35px 15px;
        justify-content: center;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    h2 {
        color: #4cab96;
        font-family: Helvetica;
    }
    
    #CV {
        text-align: center;
        margin: 2vw 10vw;
    }
    
    #header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: calc(100% - 200px);
    }
    
    #contact {
        text-align: left;
        padding-left: 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    
    #contact a {
        margin: 0.5rem;
    }
    
    #img {
        direction: ltr;
        align-self: flex-start;
        position: relative;
        width: 200px;
        height: 200px;
        line-height: 0;
        touch-action: none;
        user-select: none;
        box-sizing: border-box;
        display: block;
        padding-right: 0;
    }
    
    .skills {
        background: #4cab96;
        transition: background 0.2s ease-in-out;
        content: '';
        position: relative;
        left: 0;
        right: 0;
        top: 50%;
        height: 2px;
    }
    
    .skills h2 {
        display: block;
        background: #fff;
        padding: 0;
        color: #4cab96;
        font-family: Helvetica;
        margin: 0;
        overflow-y: visible;
        text-align: center;
        float: inherit;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        transition: color 0.1s ease-in-out;
    }
</style>
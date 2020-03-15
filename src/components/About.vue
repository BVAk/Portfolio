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
        <div class="row p-2">
          <div class="col">
          <div class="skills">
            <div class="skills-line">
              <div class="skills-element">
            <h2 class="h2"> <span>Skills</span></h2> </div>
          </div>
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
        left: 0;
        right: 0;
        top: 50%;
        height: 2px;
        float: none;
        width: 100%;
        text-align: center;
    }
    
    .skills-line {
        overflow: hidden;
        text-align: center;
    }
    
    .skills-element {
        position: relative;
        margin: 0 0 15px;
        padding: 0 20px;
    }
    
    .skills-element ::before {
        transition: background 0.2s ease-in-out;
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        height: 2px;
        background: #4cab96;
    }
    
    .skills-element h2::before {
        position: absolute;
        top: 0;
        left: -1px;
        bottom: 0;
        width: 15px;
        background: #fff;
        height: auto;
    }
    
    .skills-element h2::after {
        left: auto;
        right: -1px;
        content: '';
        position: absolute;
        top: 0;
        left: -1px;
        bottom: 0;
        width: 15px;
        background: #fff;
        height: auto;
    }
    
    span {
        min-height: 28px;
        display: block;
        background: #fff;
        padding: 0;
        transition: color 0.1s ease-in-out;
        outline: none;
        word-wrap: break-word;
        padding: 3px 0;
        min-height: 19px;
        min-width: 10px;
        display: inline-block;
    }
    
    .h2 {
        font-size: 23px;
        line-height: 28px;
        vertical-align: top;
        margin: 0;
        padding: 0 15px;
        background: #fff;
        max-width: 100%;
        font-weight: 500;
        position: relative;
        min-width: 50px;
        color: #4cab96;
    }
</style>
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
              <div class="col col-s">
                <div class="row"> <font-awesome-icon :icon="['fab','linkedin']" width="20px" /><a href="https://www.linkedin.com/in/viktoriabekk-a79595147/">LinkedIn</a>
                </div>
                <div class="row"><font-awesome-icon :icon="['fab', 'bitbucket']" width="20px" /><a href="https://bitbucket.org/VikaBekk/">Bitbucket</a>
                </div>
                <div class="row"><font-awesome-icon :icon="['fab', 'github']" width="20px" /><a href="https://github.com/BVAk">GitHub</a>
                </div>
                <div class="row">  <font-awesome-icon :icon="['fas', 'mobile-alt']" width="20px" /> <a href="tel:+380956289382">+380956289382</a>
                </div>
                <div class="row"> <font-awesome-icon :icon="['far','envelope']" width="20px" /><a href="mailto:bekkviktoria55@gmail.com">bekkviktoria55@gmail.com</a>
                </div>
                <div class="row"></div>
              </div>
              <div class="col"><h2>Viktoriia Bekk</h2>
                <h3>PHP Developer</h3></div>
             <div class="col">
              <img src="me.jpg" width="200px">
          </div>
        </div>
        <div class="row p-2">
          <div class="col">
             <h2 class="h2"> <span>Skills</span></h2> 
          </div>
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
        
        <div class="row p-2">
          <div class="col">
            <h2 class="h2"> <span>Experience</span></h2> </div>
          </div>
          <div class="row">
            <div class="col"><b>Self-Employed</b><br>Front-end, Back-end Developer<br>09/2017 - present</div>
            <div class="col"><ul>
              <li>Developed web applications using PHP framework Laravel, preparing both client’s and administrator’s sides;</li>
<li>                Organized database for application - MySQL tables;</li>
<li>            Completed front-end web development utilizing Bootstrap, HTML, CSS, JavaScript, Vue.js;</li>
<li>            Designed mockups for web pages, filling with useful content and information.</li>
            </ul></div>
          
          </div>

          <div class="row p-2">
            <div class="col">
              <h2 class="h2"> <span>Education</span></h2> </div>
            </div>
            <div class="row">
              <div class="col"><b>Odessa National Maritime University</b><br>2018 - 2019<br></div>
              <div class="col"><i>Master’s of Science in Computer Science</i></div>
            </div>
            <div class="row">
              <div class="col"><b>Odessa National Maritime University</b><br>2014 - 2018<br></div>
              <div class="col"><i>Bachelor’s  of Science in Computer Science</i></div>
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
</style>
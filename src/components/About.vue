<template>
  <div class="about" >
  
    <div class="container flex">
      <div class="header waypoint" data-animation="slide-in-left">
        ABOUT
      </div>
      <div
        class="header-bar waypoint"
        data-animation="slide-in-left"
        data-delay=".5s"
      ></div>

      <div class="flex row label-wrap">
        <div class="flex row-gt-sm">
          <div class="flex bullet-wrap ">
            <div class="hex-wrap waypoint" data-animation="flip-in-x">
              <div class="hexagon">
                <i class="mdi mdi-speedometer"></i>
              </div>
            </div>
            <div class="waypoint" data-animation="fade-in">
              <div class="label bold">Fast</div>
              <div>
                Fast load times and lag free interaction, my highest
                priority.
              </div>
            </div>
          </div>

          <div class="flex bullet-wrap ">
            <div
              class="hex-wrap waypoint"
              data-animation="flip-in-x"
              data-delay=".2s"
            >
              <div class="hexagon">
                <i class="mdi mdi-cellphone-link"></i>
              </div>
            </div>
            <div class="waypoint" data-animation="fade-in" data-delay=".2s">
              <div class="label bold">Responsive</div>
              <div>My layouts will work on any device, big or small.</div>
            </div>
          </div>
        </div>
        <div class="flex row-gt-sm">
          <div class="flex bullet-wrap ">
            <div
              class="hex-wrap waypoint"
              data-animation="flip-in-x"
              data-delay=".4s"
            >
              <div class="hexagon">
                <i class="mdi mdi-lightbulb-outline"></i>
              </div>
            </div>
            <div class="waypoint" data-animation="fade-in" data-delay=".4s">
              <div class="label bold">Intuitive</div>
              <div>Strong preference for easy to use, intuitive UX/UI.</div>
            </div>
          </div>

          <div class="flex bullet-wrap ">
            <div
              class="hex-wrap waypoint"
              data-animation="flip-in-x"
              data-delay=".6s"
            >
              <div class="hexagon">
                <i class="mdi mdi-rocket"></i>
              </div>
            </div>
            <div class="waypoint" data-animation="fade-in" data-delay=".6s">
              <div class="label bold">Dynamic</div>
              <div>
                Websites don't have to be static, I love making pages come
                to life.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-wrapper flex row-gt-sm">
        <div
          class="flex flex-50-gt-sm waypoint"
          data-animation="slide-in-left"
        >
          <img src="me.JPG" width="100%" />
          <!-- <div><img class="up-arrow" src="img/up-arrow.png"></div> -->
          <div class="label bold">Who's this guy?</div>
          <div>
            I'm a Front-End Developer for
            <a
              class="highlight"
              href="http://www.chownow.com"
              target="_blank"
              >ChowNow</a
            >
            in Los Angeles, CA.
            <br />
            I have serious passion for UI effects, animations and creating
            intuitive, dynamic user experiences.
            <br />
            <span class="page-link highlight" dest="contact"
              >Let's make something special.</span
            >
          </div>
        </div>

        <div
          class="flex flex-50-gt-sm waypoint bars-wrap"
          data-animation="slide-in-right"
        >
          <div class="bar flex">
            <div class="bar fill" style="width:90%">
              <div class="tag bold flex">CSS</div>
            </div>
            <span>90%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:90%">
              <div class="tag bold flex">HTML</div>
            </div>
            <span>90%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:80%">
              <div class="tag bold flex">React</div>
            </div>
            <span>80%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:80%">
              <div class="tag bold flex">JavaScript</div>
            </div>
            <span>80%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:50%">
              <div class="tag bold flex">Angular</div>
            </div>
            <span>50%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:65%">
              <div class="tag bold flex">Node.js</div>
            </div>
            <span>65%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:65%">
              <div class="tag bold flex">Ruby/Rails</div>
            </div>
            <span>65%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:50%">
              <div class="tag bold flex">UI Design</div>
            </div>
            <span>50%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:60%">
              <div class="tag bold flex">Photoshop</div>
            </div>
            <span>60%</span>
          </div>

          <div class="bar flex">
            <div class="bar fill" style="width:50%">
              <div class="tag bold flex">Sketch</div>
            </div>
            <span>50%</span>
          </div>
        </div>
      </div>
    </div>
  
  
    <div class="overflow-wrap">

      <div class="modal-wrap flex">
        <section class="flex height-fix">
          <div class="flex">
            <h1>About</h1>
          </div>
        </section>
      </div>
    </div>
     
  
  </div>
  
</template>

<script>
    export default {
        name: "About"

    };
</script>
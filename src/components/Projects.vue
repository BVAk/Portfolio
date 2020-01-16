<template>
  <div class="proj" id="projectid">
    <div class="overflow-wrap">
      <div class="modal-wrap flex">
        <section class="flex height-fix">
          <div class="flex">
            <h1>Projects</h1>
          </div>
        </section>
      </div>
    </div>
    <div class="row justify-content">
      <div class="col">
        <h2>JavaLearn</h2>
        <lingallery :width="600" :height="400" :items="items" />
        <p>The project is designed for distance learning. The site is written in PHP - Laravel framework and
          Javascript.
        </p>
      </div>
      <div class="col">
        <h2>Yachting</h2>
        <lingallery :width="600" :height="400" :items="items2" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>FitnessTime</h2>
        <lingallery :width="600" :height="400" :items="items3" />
      </div>
    </div>
  </div>
</template>
<script>
  import Lingallery from 'lingallery';

  export default {
    data() {
      return {
        items: [{
          id: '0',
          src: 'javalearn.png',
          thumbnail: 'javalearn.png'
        },
        {
          id: '1',
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        }
        ],
        items2: [{
          id: '0',
          src: 'yachting.png',
          thumbnail: 'yachting.png'
        },
        {
          id: '1',
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        }],
        items3: [{
          id: '0',
          src: 'yachting.png',
          thumbnail: 'yachting.png'
        },
        {
          id: '1',
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        }
        ]


      };
    },
    components: {
      Lingallery

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /* Base */

  #projectid {
    height: -webkit-fill-available;
    text-align: center;

    margin: 15px;
    justify-content: center;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    


  }

  p {
    text-align: left;
  }

  .col {
    border: 1px solid lightblue;
    margin: 10px;
  }
</style>
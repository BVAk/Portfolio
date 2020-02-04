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
     <div v-lazy-container="{ selector: 'lingallery', error: 'error.png', loading: 'loading.gif' }">
    <div class="row justify-content">
      <div class="col">
       
        <h2>JavaLearn</h2>
        <lingallery :width="600" :height="400" :items="items"/>
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
  </div>
</template>
<script>
    import Lingallery from 'lingallery';

    export default {
        data() {
            return {
                items: [{
                    id: '0',
                    src: 'javalearn.jpg',
                    thumbnail: 'javalearn.jpg'
                }, {
                    id: '1',
                    src: 'https://picsum.photos/600/400/?image=10',
                    thumbnail: 'https://picsum.photos/64/64/?image=10'
                }],
                items2: [{
                    id: '0',
                    src: 'yachting.jpg',
                    thumbnail: 'yachting.jpg'
                }, {
                    id: '1',
                    src: 'yachting2.jpg',
                    thumbnail: 'yachting2.jpg'
                }],
                items3: [{
                    id: '0',
                    src: 'fitnessmain.jpg',
                    thumbnail: 'fitnessmain.jpg'
                }, {
                    id: '1',
                    src: 'fitnessmain4.jpg',
                    thumbnail: 'fitnessmain4.jpg'
                }, {
                    id: '2',
                    src: 'fitnessmain3.jpg',
                    thumbnail: 'fitnessmain3.jpg'
                }, {
                    id: '3',
                    src: 'fitnessmain2.jpg',
                    thumbnail: 'fitnessmain2.jpg'
                }]


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
        margin: 35px 15px;
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
    
    .lingalleryContainer {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    
    figure {
        width: 100%
    }
</style>
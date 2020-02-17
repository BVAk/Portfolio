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
      <div class="col" id="proj">
       
        <h2>JavaLearn</h2>
        <lingallery :width="600" :height="400" :items="items" class="m-2"/>

        <p class="text-justify">The project is developed for distance learning.<br>
          JavaLearn helps:
          <ul>    <li>clients learn lectures and take the test remotely;</li>
             <li>teachers to share lectures and evaluate students remotely.</li>
      </ul> </p><div class="row p-2"> <p class="m-3">Skills:</p>
      <button type="button" class="btn btn-primary btn-sm m-2">Laravel</button>
      <button type="button" class="btn btn-primary btn-sm m-2">JavaScript</button>
      <button type="button" class="btn btn-primary btn-sm m-2">MySQL</button>
    </div>
      
        
      </div>
      <div class="col" id="proj">
        <h2>Yachting</h2>
        <lingallery :width="600" :height="400" :items="items2" class="m-2" />
        <p class="text-justify ">This web-based system was established to organize the process of chartering yachts.
          This system allows to:
          
          <ul>    <li>view the provided routes;</li>
             <li>study information about yachts (technical indicators, passenger capacity, design);</li>
             <li>order a yacht for a certain period in the provided marinas;</li>
             <li>use the services of a skipper.</li>
      </ul> </p><div class="row p-2"> <p class="m-3">Skills:</p>
        <button type="button" class="btn btn-primary btn-sm m-2">PHP</button>
      <button type="button" class="btn btn-primary btn-sm m-2">Laravel</button>
      <button type="button" class="btn btn-primary btn-sm m-2">JavaScript</button>
      <button type="button" class="btn btn-primary btn-sm m-2">MySQL</button>

      </div>
    </div>
    <div class="row">
      <div class="col" id="proj">
        <h2>FitnessTime</h2>
        <lingallery :width="600" :height="400" :items="items3" class="m-2" />

        <p class="text-justify ">The topic of the site is the information system of the fitness club. In the framework of this work, an analysis of the existing systems of fitness clubs was carried out, and the metrics used in practice for assessing the activities of fitness clubs were described
         
       </p><div class="row p-2"> <p class="m-3">Skills:</p>
      <button type="button" class="btn btn-primary btn-sm m-2">Laravel</button>
      <button type="button" class="btn btn-primary btn-sm m-2">JavaScript</button>
      <button type="button" class="btn btn-primary btn-sm m-2">MySQL</button>
      </div>
      </div>
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
                    src: 'javalearn2.jpg',
                    thumbnail: 'javalearn2.jpg'
                }],
                items2: [{
                    id: '0',
                    src: 'yachtingmain.jpg',
                    thumbnail: 'yachtingmain.jpg'
                }, {
                    id: '1',
                    src: 'yachting.jpg',
                    thumbnail: 'yachting.jpg'
                }, {
                    id: '2',
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
    
    #proj {
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
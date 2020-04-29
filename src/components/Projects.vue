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
    <div class="row">
      <div class="col col-s" id="proj">
       
        <h2>JavaLearn</h2>
        <center><lingallery  :items="items" class="m-2"/></center>
         <h3>Used Skills:</h3>
      <div class="row p-2"> 
        <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">PHP</button></div>
        <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">Laravel</button></div>
        <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">JavaScript</button></div>
        <div class="col">  <button type="button" class="btn btn-primary btn-sm m-2">MySQL</button></div>
    </div>
    <h3>Description:</h3>
        <p class="text-justify">The project is developed for distance learning.<br>
          JavaLearn helps:
          <ul>    <li>clients learn lectures and take the test remotely;</li>
             <li>teachers to share lectures and evaluate students remotely.</li>
      </ul> </p>       
      </div>
      <div class="col col-s" id="proj">
        <h2>Yachting</h2>
       <center> <lingallery :width="600" :height="400" :items="items2" class="m-2" /></center>
        <h3>Used Skills:</h3>
        
      <div class="row p-2">  
        <div class="col col-s">
        <button type="button" class="btn btn-primary btn-sm m-2">PHP</button></div>
        <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">Laravel</button></div>
        <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">JavaScript</button></div>
        <div class="col"><button type="button" class="btn btn-primary btn-sm m-2">MySQL</button></div>

      </div>
        <h3>Description:</h3>
        <p class="text-justify ">This web-based system was established to organize the process of chartering yachts.
          This system allows to:
          
          <ul>    <li>view the provided routes;</li>
             <li>study information about yachts (technical indicators, passenger capacity, design);</li>
             <li>order a yacht for a certain period in the provided marinas;</li>
             <li>use the services of a skipper.</li>
      </ul> </p>
      
    </div>
    </div>
    <div class="row">
      <div class="col col-s" id="proj">
       
        <h2>FitnessTime</h2>
        <center><lingallery :width="600" :height="400" :items="items3" class="m-2"/></center>
          <h3>Used Skills:</h3><div class="row p-2">
        <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">Laravel</button></div>
            <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">JavaScript</button></div>
              <div class="col"><button type="button" class="btn btn-primary btn-sm m-2">MySQL</button></div>
            </div>
    <h3>Description:</h3>
        <p class="text-justify">The topic of the site is the information system of the fitness club. In the framework of this work, an analysis of the existing systems of fitness clubs was carried out, and the metrics used in practice for assessing the activities of fitness clubs were described </p>    
    </div>
    <div class="col col-s" id="proj">
       
        <h2>ChineseLogic</h2>
        <center><lingallery :width="600" :height="400" :items="items4" class="m-2"/></center>
          <h3>Used Skills:</h3><div class="row p-2">
        <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">Laravel</button></div>
            <div class="col"> <button type="button" class="btn btn-primary btn-sm m-2">JavaScript</button></div>
              <div class="col"><button type="button" class="btn btn-primary btn-sm m-2">MySQL</button></div>
            </div>
    <h3>Description:</h3>
        <p class="text-justify"> </p>    
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
                }, {
                    id: '2',
                    src: 'javalearn3.jpg',
                    thumbnail: 'javalearn3.jpg'
                }, {
                    id: '3',
                    src: 'javalearn4.jpg',
                    thumbnail: 'javalearn4.jpg'
                }, {
                    id: '4',
                    src: 'javalearn5.jpg',
                    thumbnail: 'javalearn5.jpg'
                }],

                items2: [{
                    id: '0',
                    src: 'yachting.jpg',
                    thumbnail: 'yachting.jpg'
                }, {
                    id: '1',
                    src: 'yachting2.jpg',
                    thumbnail: 'yachting2.jpg'
                }, {
                    id: '2',
                    src: 'yachting3.jpg',
                    thumbnail: 'yachting3.jpg'
                }, {
                    id: '3',
                    src: 'yachting4.jpg',
                    thumbnail: 'yachting4.jpg'
                }, {
                    id: '4',
                    src: 'yachting5.jpg',
                    thumbnail: 'yachting5.jpg'
                }],

                items3: [{
                    id: '0',
                    src: 'fitnessmain.jpg',
                    thumbnail: 'fitnessmain.jpg'
                }, {
                    id: '1',
                    src: 'fitnessmain2.jpg',
                    thumbnail: 'fitnessmain2.jpg'
                }, {
                    id: '2',
                    src: 'fitnessmain3.jpg',
                    thumbnail: 'fitnessmain3.jpg'
                }, {
                    id: '3',
                    src: 'fitnessmain4.jpg',
                    thumbnail: 'fitnessmain4.jpg'
                }, {
                    id: '4',
                    src: 'fitnessmain5.jpg',
                    thumbnail: 'fitnessmain5.jpg'
                }],
                items4: [{}]


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
        padding: 5px 5px;
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
        margin: 1vh;
        width: 90%;
    }
    
    .lingalleryContainer {
        display: inline-block;
        width: 100%;
    }
    
    figure {
        width: 100%
    }
    
    h3 {
        color: #4cab96;
        font-family: Helvetica;
    }
</style>
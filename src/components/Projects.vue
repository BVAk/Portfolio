<template>
  <div class="proj" id="projectid">
    <div class="overflow-wrap">
      <div class="modal-wrap flex">
        <section class="flex height-fix">
          <div class="flex">

            <h1>Projects</h1>
            <div class="row justify-content">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
    </div>
  </div>
</section>
</div>
</div>
    <div class="row justify-content">
      <div class="col">
        <h1>JavaLearn</h1>
        <lingallery  :items="items" />
        <p>The project is designed for distance learning. The site is written in PHP - Laravel framework,</p>
      </div>
      <div class="col">
        <lingallery  :items="items" />
      </div>
    </div>
  </div>
</template>
<script>
  import Lingallery from 'lingallery';
  import VueGallery from 'vue-gallery';
  export default {
    data() {
      return {
        items: [{
          src: 'javalearn.png',
          thumbnail: 'javalearn.png',
          caption: "JavaLearn"
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        }
        ],
        images: [
         'javalearn.png',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
     
      };
    },
    components: {
      Lingallery,
      
      'gallery': VueGallery

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

    
  }
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ddc3c3;
    margin: 5px;
  }  

  .flex {
    font-size: 32pt;
    line-height: 36pt;
    font-family: "Raleway";

  }
</style>
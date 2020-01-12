<template>
  <div class="proj" id="projectid">
    <div class="overflow-wrap">
      <div class="modal-wrap flex">
        <section class="flex height-fix">
          <div class="flex">

            <h1>Projects</h1>

            <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
   import VueGallery from 'vue-gallery';
  export default {
    name: "Projects",
    data: function () {
      return {
        images: [
         {title:'JavaLearn', description:'Java descropt', href: 'javalearn.png'},
          {title:'JavaLearn', description:'Notdescropt', href:'https://dummyimage.com/1600/ffffff/000000'},
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /* Base */
    .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  #projectid {
    height: -webkit-fill-available;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    overflow: auto;
  }

 #projectid h1 {
    margin: 0;
    
  }
  .flex{ font-size: 32pt;
    line-height: 36pt;    
    font-family: "Raleway";
    
  }
</style>
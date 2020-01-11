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
  </div>
</template>
<script>
  export default {
    name: "Projects"
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /* Base */
  #projectid {
    height: -webkit-fill-available;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    resize: vertical;
    overflow: auto;
  }

 #projectid h1 {
    margin: 0;
    resize: vertical;
  }
  .flex{ font-size: 32pt;
    line-height: 36pt;    
    font-family: "Raleway";
    
  }
</style>
<template>
  <div class="hello" style="background-image:url('background.jpg') ; background-size: 100% auto;">



    <div class="row">
      
        <div class="col">
          <div class="flex">
          <h1>
            Hello, I'm Viktoriia Bekk.<br>
            I'm a full-stack developer.</h1>
          </div>
          <button type="button" class="btn btn-outline-info">
            View my work <i class="mdi mdi-arrow-right"></i></button>


        </div>
        
      
    </div>
  </div>





</template>

<script>
  export default {
    name: "HelloWorld"

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /* Base */
  .hello {
    height: -webkit-fill-available;
    display: grid;
    text-align: center;
  }
  .flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
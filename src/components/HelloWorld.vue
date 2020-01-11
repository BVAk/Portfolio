<template>
  <div class="hello" style="background-image:url('background.jpg') ; background-size: 100% auto;">
    <div class="overflow-wrap">
      <div class="modal-wrap flex">
        <section class="flex height-fix">
          <div class="flex">
            <h1>
              Hello, I'm <b>Viktoriia Bekk</b>.<br>
              I'm a full-stack web developer.</h1>
            <button type="button" class="btn btn-lg btn-outline-info">
              <a class="float-left" href="#project"> View my work</a> </button>
          </div>
        </section>
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
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    resize: vertical;
    overflow: auto;
  }
  a:link {
  text-decoration: none;
}

 .hello h1 {
    margin: 0;
    resize: vertical;
    overflow: auto;
  }
  .flex{ font-size: 32pt;
    line-height: 36pt;    
    font-family: "Raleway";
    
  }
</style>
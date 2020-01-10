<template>
  <div class="hello" style="background-image:url('background.jpg') ; background-size: 100% auto;">
    <div class="overflow-wrap">
      <div class="modal-wrap flex">
        <section class="flex height-fix">
          <div class="flex">
            <h1>
              Hello, I'm Viktoriia Bekk.<br>
              I'm a full-stack developer.</h1>
            <button type="button" class="btn btn-lg btn-outline-info">
              View my work </button>
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

 .hell0 h1 {
    margin: 0;
    resize: vertical;
    overflow: auto;
  }
</style>
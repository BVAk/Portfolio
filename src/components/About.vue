<template>
  <div class="about" >
  
   
  
  
    <div class="overflow-wrap">

      <div class="modal-wrap flex">
        <section class="flex height-fix">
          <div class="flex">
            <h1>About</h1>
          </div>
        </section>
      </div>
    </div>
    <div id="CV" class="p-3 m-3">
      <div class="row">
      <div class="header">
      <h2>Viktoriia Bekk</h2>
      <h3>PHP Developer</h3>
      <div class="row">
        <div class="col">
      <label>bekkviktoria55@gmail.com</label>

      <label></label>
    </div>
      <div class="col">
        <i class="fa-phone"></i>
<a href="tel:+380956289382">+380956289382</a>
        <label></label>
        <label></label>
      </div>
    </div>
      </div>
      <div class="img">
        <img src="me.jpg" width="200px">
      </div>
    </div>
  </div>
  
  </div>
  
</template>

<script>
    export default {
        name: "About"

    };
</script>
<style>
    .about {
        height: -webkit-fill-available;
        text-align: center;
        margin: 35px 15px;
        justify-content: center;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    h2 {
        color: #4cab96;
        font-family: Helvetica;
    }
    
    #CV {
        text-align: center;
    }
    
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: calc(100% - 300px);
    }
    
    .img {
        direction: ltr;
        align-self: flex-start;
        position: relative;
        width: 200px;
        height: 200px;
        line-height: 0;
        touch-action: none;
        user-select: none;
        box-sizing: border-box;
        display: block;
    }
</style>
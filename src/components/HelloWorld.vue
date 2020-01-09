<template>
  <div class="hello">
    
  <ul class="flex-container">
    
    <li class="flex-item item-1">
      
       Hello, I'm Viktoriia Bekk. <br>I'm a full-stack developer.
    </li>
    <li class="flex-item item-4"><img alt="Vue logo" src="../assets/logo2.png" /></li>
   
  </ul>

  <div class="alert alert-success alert-dismissible fade show" role="alert">
    With Bootstrap!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
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
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}
.item-1 {
   -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -webkit-flex: 3 1 auto;
    -ms-flex: 3 1 auto;
    flex: 3 1 auto;
}

.item-4 {
   -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -webkit-flex: 3 1 auto;
    -ms-flex: 3 1 auto;
    flex: 3 1 auto;
}

.flex-item {
  background: tomato;
  padding: 0px;
  width: auto;
  height: auto;
  margin-top: 10px;
  border: 1px solid black;
  
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
  
</style>

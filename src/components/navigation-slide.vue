<template>
  <div id="slide" :class="[slidewidth.showslide?'show':'']" :style="{left:slidewidth.slidewidth}">
    <div>123</div>
  </div>
</template>

<script>
import Bus from '../bus.js';

export default {
  name:'slide',
  data(){
    return{

    }
  },
  props:['slidewidth'],
  methods:{
  },
  created(){
    console.log(this.slidewidth);
  }
    
}
</script> 



<style scoped>
  #slide{
    width: 50%;
    height: 100%;
    background-color: pink;
    position: fixed;
    z-index: 1003;
    top: 0
  }
  .show{
    animation:mymove 1s 1;
    -webkit-animation:mymove 1s 1; /*Safari and Chrome*/
  }

  @keyframes mymove
  {
    from {left:-50%;}
    to {left:0;}
  }

  @-webkit-keyframes mymove 
  {
    from {left:-50%;}
    to {left:0;}
  }
</style>

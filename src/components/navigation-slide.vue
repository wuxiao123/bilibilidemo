<template>
  <div id="slide" :style="{left:slidewidth.slidewidth}">
    <div>123</div>
  </div>
</template>

<script>

export default {
  name:'slide',
  data(){
    return{
      slide:0
    }
  },
  props:['slidewidth'],
  methods:{
  },
  created(){
    console.log(this.slidewidth);
    // this.slidewidth='-50%';
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
    top: 0;
    left: 0
  }
</style>

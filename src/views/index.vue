<template>
  <div class="home">
    <headerBar :nav=0></headerBar>
    <div class="header-tab">
        <div class="header-tab-item" :class="[index==sel?'active':'']" v-for="(item,index) in headerItem" :key="index" @click="changesel(index)">
            <router-link :to="{ path: item.href }">{{item.title}}</router-link>
        </div>
    </div>
    <v-touch  @swipeleft="onSwipeLeft(index)"  @swiperight="onSwipeRight()">
        <div style="height:300px">
            <router-view></router-view>
        </div>
    </v-touch>
    <navBar :nav=0></navBar>
  </div>
</template>

<script>
import navBar from '../components/navigation-bar'
import headerBar from '../components/navigation-header'
export default {
  name: 'index',
  data(){
      return{
          headerItem:[
              {id:1,"title":"直播",'category':'live'},
              {id:2,"title":"推荐",'category':'recommend'},
              {id:3,"title":"追番",'category':'chasing'},
              {id:4,"title":"喵哩喵哩",'category':'miao',},
              {id:5,"title":"NBA星点播",'category':'nba'},
              {id:6,"title":"进博会",'category':'meet'}
            ],
          sel:1,
          path:"/recommend"
      }
  },
  components: {
    navBar,
    headerBar
  },
  methods:{
      changesel(index){
        console.log(index);
        this.sel=index;
      },
      onSwipeLeft(){
          this.sel=this.sel+1
      },
      onSwipeRight(){
          this.sel=this.sel-1
      }
  },
  created(){
      var header=this.headerItem;
      for( let i=0;i<header.length;i++){
          if(this.$route.path==header[i].href){
              this.sel=i;
          }
      }
  }
}
</script>

<style scoped>
    .header-tab{
        background-color: white;
        font-size: 14px;
        height: 30px;
        color: #757575;        
        white-space: nowrap;
        overflow-x: scroll;
    }
    .header-tab-item{
        display: inline-block;
        margin:0 15px;
        white-space:nowrap;
        height: 100%;
        line-height: 26px;
        width: fit-content

    }
     .header-tab .active{
        border-bottom: 2px solid #fb7299;
     }
     .header-tab a{
        color: #757575;
     }
    .header-tab .active a{
        color: #fb7299
    }
</style>


<template>
  <div class="home">
    <headerBar :nav=0></headerBar>
    <div class="header-tab">
        <div class="header-tab-item" :class="[index==sel?'active':'']" v-for="(item,index) in headerItem" :key="index" @click="changesel(index)">
            <router-link :to="{ path: item.href }">{{item.title}}</router-link>
        </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
    <div class="content"></div>
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
              {id:1,"title":"直播",'href':'/live'},
              {id:2,"title":"推荐",'href':'/recommend'},
              {id:3,"title":"追番",'href':'/chasing'},
              {id:4,"title":"喵哩喵哩",'href':'/miao'},
              {id:5,"title":"NBA星点播",'href':'/nba'},
              {id:6,"title":"进博会",'href':'/meet'}
            ],
          sel:1,
      }
  },
  components: {
    navBar,
    headerBar
  },
  methods:{
      changesel(index){
          this.sel=index;
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


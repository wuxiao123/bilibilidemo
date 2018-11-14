<template>
  <div id="app" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' >
    <router-view/>
    <div class="mask" v-if="showmask" @click='changeMaskShow'></div>
    <slide :slidewidth="{slidewidth}"></slide>
  </div>
</template>

<script>
import slide from './components/navigation-slide'
export default {
    data(){
        return {
            showmask:false,
            slidewidth:'-50%',
            canSlide:false
        }
    },
    components:{
        slide
    },
     mounted() {
        let that = this;
        that.screenwidth=document.documentElement.clientWidth ;
    },
    methods:{
        changeShowslide:function(){
            this.showslide=!this.showslide;
            this.showmask=!this.showmask
        },
       touchStart:function(ev){
            if(ev.changedTouches[0].clientX<10){
                this.showmask=true;
                this.slidewidth= (-0.5+ev.changedTouches[0].clientX/this.screenwidth)*100+"%";
                this.canSlide=true;
            }
       },
       touchMove:function(ev){
           if(this.canSlide){
                var currentwidth=-0.5+ev.changedTouches[0].clientX/this.screenwidth;
                if(currentwidth>0){
                    this.slidewidth="0";
                }else{
                    this.slidewidth= currentwidth*100+"%";  
                }
           }
        
       },
       touchEnd:function(ev){
           if(this.canSlide){
            var currentwidth=-0.5+ev.changedTouches[0].clientX/this.screenwidth
                if(currentwidth<0){
                    this.slidewidth= currentwidth*100+"%";
                    this.showmask=false;
                    this.slidewidth="-50%";
                }else{
                    this.showmask=true;
                    this.slidewidth="0";
                }
                this.canSlide=false;
            }
       },
       changeMaskShow:function(){
            this.showmask=false;
            this.slidewidth="-50%";
       }
    },
    created(){
        console.log()
    }
    
}
</script>


<style>
    html,body,#app{
        width: 100%;
        height: 100%
    }
    .gotoindex{
        position: fixed;
        width: 57px;
        height: 57px;
        background-image: url('https://pic.repaiapp.com/static/png/20180528/16/1527497342006264955.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        right: 10px;
        top: 10px;
        z-index: 1002;
    }
    html{
        background-color: #f3f3f3;
        font-size: 14px;
        /*font-size: 14px;*/
    }
    input{
        font-size: 14px;
    }
    *{
        margin: 0;padding: 0
    }
    div,input,img,ul,li,span,p,tr,td,table{
        box-sizing: border-box
    }
    a{
        text-decoration: none
    }
    a:active{
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    *{
        -webkit-tap-highlight-color:rgba(255,255,255,0);
    }
    *{
        -webkit-tap-highlight-color:transparent;
    }
    button{
        border: none;outline: none
    }
    .whiteBtn{
        width: 79px;
        height: 31px;
        background: #fff;
        color: #123676;
        font-size: 14px;
        border-radius: 2px;
        border: 1px solid #123676;
    }
    .blueBtn{
        width: 79px;
        height: 31px;
        font-size: 14px;
        border-radius: 2px;
        background-color: #113676;
        color: #fff;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;
    }
    .clear::after{
        content: '';
        display: block;
        clear: both;
    }
    .sj-hint{
        position: fixed;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        /*width: 3.35rem;*/
        /*height: 1rem;*/
        background: #000;
        opacity: 0.8;
        /*line-height: 1rem;*/
        text-align: center;
        border-radius: .05rem;
        font-size: .28rem;
        color: #fff;
        z-index: 23;
        display: none;
        padding:0.3rem;
    }
    li {
        list-style: none;
    }
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        z-index: 1000;
        opacity: 0.5
    }
</style>

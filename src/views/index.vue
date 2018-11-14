<template>
  <div class="home">
    <headerBar :nav=0></headerBar>
    <navBar :nav=0></navBar>
  </div>
</template>

<script>
import navBar from '../components/navigation-bar'
import headerBar from '../components/navigation-header'
export default {
  name: 'index',
  components: {
    navBar,
    headerBar
  }
}
</script>

<style scoped>
    .poput-close{
        position: absolute;
        right: 13px;
        top: 13px;
        width: 17px;
        height: 17px;
        background-image: url('https://pic.repaiapp.com/static/png/20180619/10/1529376716326794955.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .poput span{
        color: #888888;
    }
    .poput img{
        position: relative;
        width: 196px;
        height: 196px;
        margin: 15px 0;
    }
    .poput-header{
        text-align: center;
    }
    .poput{
        position: fixed;
        width:316px;
        height:335px;
        background:rgba(255,255,255,1);
        border-radius:11px;
        top: 0;
        left: 0;
        z-index: 10002;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #323232;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .mask{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        top: 0;
        left: 0;
        z-index: 10001;
    }
    .footer-tips{
        position: fixed;
        width: 100%;
        height: 35px;
        background-color: #f79191;
        box-sizing: border-box;
        bottom: 50px;
        left: 0;
        z-index: 3;
        display: flex;
        font-size: 13px;
        color: #fff;
        align-items: center;
        padding: 0 10px;
    }
    .laba{
        width: 13px;
        height: 12px;
        margin-right: 5px;
    }
    .close{
        width: 12px;
        height: 12px;
        margin-left: 5px;
    }
    .height35{
        position: relative;
        height: 35px;
    }
    .swiper-pagination-bullet-active{
        background: #fff !important
    }
    .headHeight{
        height: 45px;
    }
    .navHeight{
        height: 50px;
    }
    .tips{
        position: absolute;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #fff;
        color: #fff;
        right: -3px;
        top: -2px;
        font-size: 11px;
        text-align: center;
        line-height: 15px;
    }
   .head{
        position: fixed;
        width: 100%;
        height: 45px;
        /*background-color: #ea3d3d;*/
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0 13px;
        justify-content: space-between;
        z-index: 9999;
        background-image: url('https://pic.repaiapp.com/static/png/20180524/10/1527127815979505055.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
   }
   .scan{
        position: relative;
        font-size: 9px;
        color: #fff;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
   }
   .scan img{
        width:  19px;
        height: 19px;

        /*margin-bottom: 4px;*/
   }
   .input{
        position: relative;
        width: 275px;
        height: 30px;
        background-color: #d02b2b;
        border-radius: 15px;
        display: flex;
        align-items: center;
        padding-left: 9px;
        box-sizing: border-box;
   }
   .input img{
        position: relative;
        width: 15px;
        height: 15px;
        margin-right: 8px;

   }
   .input div{
        flex: 1;
        height: 30px;
        background-color: #cc2b2b;
        outline: none;
        -webkit-appearance: none;
        /*border-radius: 0;*/
        font-size: 14px;
        color: #fbd5d5;
        border:none;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        line-height: 30px;
   }
    .input input::-webkit-input-placeholder{
        color:#fbd5d5;
    }
    .msg{
        position: relative;
        font-size: 9px;
        color: #fff;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }
    .msg img{
        width: 20px;
        height: 19px;
    }
    /*Swiper插件*/
    #swiper1 {
        width: 100%;
        height: 180px;
    }

    #swiper1 img {
        width: 100%;
        height: 100%;
    }

    #swiper1 .swiper-slide {
        background-color: #fff;
    }
    .swiper-pagination-bullet-active{
        background-color: #fff;
    }
    #swiper3{
        width: 190px;
        height: 100%;
        line-height: 38px;
    }
    /*#swiper3*/
    .ad{
        position: relative;
        background-color: #fff;
        border-radius: 20px;
        width: 95%;
        margin: 6.5px auto;
        height: 38px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        font-size: 14px;
        color: #000000;

    }
    .ad img{
        width: 50px;
        height: 19px;
        margin: 0 6.5px;
    }
    .adCon{
        width: 190px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .more{
        position: relative;
        height: 21px;
        border-left: 1px #dedede solid;
        margin-left: 5px;
        padding-left: 5px;

    }
    .today{
        position: relative;
        background-color: #fff;
        padding-top: 19px;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .todayTitle{
        position: relative;
        width: 188px;
        height: 28px;
        background-image: url('https://pic.repaiapp.com/static/png/20180410/11/1523332562027179754.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-bottom: 20px;
    }
    .todayCon{
        position: relative;
        display: flex;
        width: 93%;
        margin: 0 auto;
        border-radius: 10px;
        height: 185px;
        /*background-image: url('https://pic.repaiapp.com/static/png/20180410/12/1523333008026555550.png');*/
        background-size: 100% 100%;
        background-repeat: no-repeat;
        /*margin-bottom: 20px;*/
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
        flex-flow: column;
    }
    .todayConAll{
        height: 225px;
        width: 100%;
    }
    .todayConAll .swiper-slide{
        height: 100%;
    }
    .swiper-pagination-bullet-active{
        background-color: red !important
    }
    .conHead{
        position: relative;
        height: 76px;
        /*background-color: red;*/
        width: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .conHead p{
        position: absolute;
        top: 50px;
        left: 16px;
        font-size: 14px;
        color: #916612
    }
    .conItro{
        position: relative;
        height: 110px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 14px;
        box-sizing: border-box;
        font-size: 15px;
        color: #000000;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        /*background-color: red;*/
    }
    .IntroLeft{
        position:relative;
        width:85px;
        height:85px;
        border:1px solid #e5e5e5;
    }
    .IntroRight{
        flex:1;
        padding-left: 12.5px;
    }
    .price{
        font-size: 15px;
        color: #dd3232;
        display: flex;
        margin: 10px 0;
    }
    .price span{
        font-size: 12px;
    }
    .price p{
        padding: 1.5px 4px;
        border:1px #b3d465 solid;
        border-radius: 2.5px;
        font-size: 9px;
        color: #98bd6a;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 6px;
    }
    .price p img{
        width: 7px;
        height: 9px;
    }
    .btn{
        width: 72px;
        height: 22px;
        /*background-color: red;*/
        font-size: 12px;
        color: #ffffff;
        background: linear-gradient(to right, #fa0101, #c50606); 
        border-radius: 2.5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn img{
        width: 3.5px;
        height: 7px;
        margin-left: 8px;
    }
    .popular{
        position: relative;
        background-color: #fff;
        margin-top: 10px
    }
    .popularTitle{
        position: relative;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    .popularTitle img{
        width: 189px;
        height: 29px;
    }
    .popularCon{
        position: relative;
        padding: 0 12.5px;
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
    }
    .list{
        position: relative;
        display: flex;
        width: 169px;
        border:1px solid #e5e5e5;
        /*height: 100px;*/
        margin-bottom: 10px;
        flex-flow: column;
    }
    .list img{
        width: 100%;
        height: 170px;
    }
    .listTitle{
        position: relative;
        width: 100%;
        font-size: 14px;
        color: #333333;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-top: 10px;
    }
    .nums{
        position: relative;
        font-size: 11px;
        color: #9a9a9a;
        margin: 5px 0;
        /*margin-top: 5px;*/
        /*margin-bottom: 7px;*/
    }
    .list .price1{
        font-size: 14px;
        color: #e73131;
        margin-bottom: 9px;
    }
    .shopCart{
        position: absolute;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-image: url('https://pic.repaiapp.com/static/png/20180524/10/1527128129493310052.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        right: 10px;
        bottom: 10px;
    }
</style>


<template>
    <div id="headerBar" @click.stop="pushSlide">
        <div class="left-container">
            <img class="imgt-list" src="../assets/header/list.png" alt="">
            <img src="../assets/header/avatard.png" alt="">
        </div>
        <div class="center-container">
            <div v-if="nav==0">首页</div>
            <div v-if="nav==1">频道</div>
            <div v-if="nav==2">动态</div>
            <div v-if="nav==3">会员购</div>
        </div>
        <div class="right-container">
            789
        </div>
    </div>
</template>

<script>
import navBar from './navigation-bar'
import Bus from '../bus.js';

export default {
    name:'headerBar',
    props:['nav'],
    methods:{
        pushSlide(){
            Bus.$emit('showslide', true)
        }
    }
}
</script>

<style  scoped>
    #headerBar{
        position: relative;;
        top: 0;
        left: 0;
        width: 100%;
        height:50px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;
        background-color: #fb7299;
        color: #ffffff;
        font-size: 20px;
        font-weight: 300
    }
    #headerBar img{
        width: 20px;
        height: 20px;
        margin-right:10px 
    }
    .imgt-list{
        margin-left: -10px
    }
</style>

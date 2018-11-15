<template>
    <div id="headerBar" @click.stop="pushSlide">
        <div class="left-container">
            <img class="imgt-list" src="../assets/header/list.png" alt="">
            <img src="../assets/header/avatard.png" alt="">
        </div>
        <div class="center-container">
            <div v-if="nav==0">
                <div class="search-container">
                    <input type="text" class="header-search" @click.stop="goSearch">
                    <img class="img-search" src="../assets/header/search-grey.png" alt="">
                </div>
            </div>
            <div v-if="nav==1">频道</div>
            <div v-if="nav==2">动态</div>
            <div v-if="nav==3">会员购</div>
        </div>
        <div class="right-container">
            <template  v-if="nav==0">
                <img class="right-img" src="../assets/header/game-white.png" alt="">
                <img class="right-img" src="../assets/header/download-white.png" alt="">
                <img class="right-img" src="../assets/header/msg-white.png" alt="">
            </template >
            <template  v-if="nav==1">
                <img class="right-img" src="../assets/header/download-white.png" alt="">
                <img class="right-img" src="../assets/header/msg-white.png" alt="">
            </template >
            <template  v-if="nav==2">
                <img class="right-img" src="../assets/header/edit-white.png" alt="">
            </template >
            <template  v-if="nav==3">
                <img class="right-img" src="../assets/header/shopcart-white.png" alt="">
                <img class="right-img" src="../assets/header/list-white.png" alt="">
            </template >
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
            },
            goSearch(){
                console.log(123)
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fb7299;
        color: #ffffff;
        font-size: 18px;
        font-weight: 300
    }
    .left-container img{
        width: 20px;
        height: 20px;
        margin-right:10px 
    }
    .imgt-list{
        margin-left: -10px
    }
    .header-search{
        width: 200px;
        background-color: #e5688c;
        height: 30px;
        border-radius: 15px;
        border: none;
        -webkit-appearance:none;
        outline:none
    }
    .search-container{
        position: relative;
    }
    .search-container .img-search{
        position: absolute;
        top: 7px;
        left: 10px;
        width: 15px;
        height: 15px;
    }
    .right-container{
        float: right;
    }
    .right-img{
        width: 20px;
        height: 20px;
        margin-right:15px 
    }
</style>

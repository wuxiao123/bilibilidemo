<template>
    <div id="headerBar">
        <div class="icon-container">
            <div></div>
            <div class="icon"></div>
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
export default {
    name:'header',
    props:['nav']
}
</script>

<style scoped>
    #headerBar{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height:30px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px
    }
</style>

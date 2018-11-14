<template>
    <div class="mine">
        <headerBar :nav=4></headerBar>
        <navBar :nav=4></navBar>
    </div>
</template>

<script>
import navBar from '../components/navigation-bar'
import headerBar from '../components/navigation-header'

export default {
    name:'mine',
    components: {
        navBar,
        headerBar
    }      
}
</script>

<style>

</style>
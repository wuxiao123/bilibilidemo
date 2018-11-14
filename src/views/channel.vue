<template>
    <div class="channel">
        <headerBar :nav=1></headerBar>
        <navBar :nav=1></navBar>
    </div>
</template>

<script>
import navBar from '../components/navigation-bar'
import headerBar from '../components/navigation-header'

export default {
    name:'channel',
    components: {
        navBar,
        headerBar
    } 
}
</script>

<style>

</style>
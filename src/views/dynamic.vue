<template>
    <div class="dynamic">
        <headerBar :nav=2></headerBar>
        <navBar :nav=2></navBar> 
    </div>
</template>

<script>
import navBar from '../components/navigation-bar'
import headerBar from '../components/navigation-header'

export default {
    name:'dynamic',
    components: {
        navBar,
        headerBar
    } 
}
</script>

<style>

</style>
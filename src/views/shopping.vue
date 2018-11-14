<template>
    <div class="shopping">
        <headerBar :nav=3></headerBar>
        <navBar :nav=3></navBar>
    </div>
</template>

<script>
import navBar from '../components/navigation-bar'
import headerBar from '../components/navigation-header'

export default {
    name:'shopping',
    components: {
        navBar,
        headerBar
    }     
}
</script>

<style>

</style>
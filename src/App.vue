<template>
    <div id="run2pro" class="wrap">
        <top-bar></top-bar>
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
    	</transition>
        <foot-sec></foot-sec>
    </div>
</template>

<script>
import TopBar from './components/top-bar';
import FootSec from './components/foot-sec';

export default {
    name: 'App',
    components: { TopBar, FootSec }
};
</script>

<style lang="scss" scoped>
</style>

<template>
    <div>
        <nav-header></nav-header>
        <transition name='fade' mode="out-in">
            <router-view></router-view>
        </transition>  
    </div>
</template>
<script>
    import NavHeader from './NavHeader.vue' 
    export default {
        name: 'Layout',
        components: {
            NavHeader
        }
    }
</script>

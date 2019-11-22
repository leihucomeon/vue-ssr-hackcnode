<template>
    <div class="header">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo" class='logo'>
        <div class='links'>
            <router-link to="/">首页</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'NavHeader'
    }
</script>  
<style lang="stylus">
.header 
    background: #444
    display: flex
    height: 60px
    align-items center
    padding: 0 20px
    .logo
        display: inline-block
        width: 120px
        height: 28px
        margin-right: 20px
    .links 
        flex-grow: 1
        display: flex
        justify-content flex-end
        a
            color: #ccc
            text-decoration: none
            display inline-block
            padding: 0 15px
            &:hover 
                color #fff
            &:active
                color #fff 

</style>
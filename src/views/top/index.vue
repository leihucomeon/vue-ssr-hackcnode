<template>
    <div class='panel'>
        <div class="filters">
            <router-link 
                v-for="(link, index) in filters" 
                :key="link.to" 
                :to="link.to"
                @click.native="handleFilter(index)"
                :class="['tab-topic', activeIdx === index ? 'current-tab': '']"
            >
                {{link.title}}
            </router-link>
        </div>
        <div class='topic-list'>
            <li class="cell" v-for="item in $store.state.chaptersList" :key="item.id">
                <img :src="item.author.avatar_url" class="avatar" />
                {{item.title}}
            </li>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Top',
        asyncData({ store, route }) {
            return store.dispatch('FETCH_CHAPTERS', {
                page: 1,
                tab: '',
                limit: 20
            })
        },
        data() {
            return {
                filters: [
                    {
                        title: '全部' ,
                        to: '/?tab=all'
                    },
                    {
                        title: '精华' ,
                        to: '/?tab=topic'
                    },
                    {
                        title: '分享' ,
                        to: '/?tab=share'
                    },
                    {
                        title: '问答' ,
                        to: '/?tab=ask'
                    },
                    {
                        title: '招聘' ,
                        to: '/?tab=job'
                    }
                ],
                activeIdx: 0
            }
        },
        created() {
            console.log(this.$store.state.chaptersList[0]);
        },
        methods: {
            handleFilter(index) {
                this.activeIdx = index
            }
        }
    }
</script>
<style lang="stylus">
    ul, li 
        list-style-type none
        padding: 0
        margin: 0
    
    .panel .filters 
        padding: 10px
        background-color: #f6f6f6
        border-radius: 3px 3px 0 0
        .tab-topic 
            cursor pointer
            margin: 0 10px
            color: #80bd01
            text-decoration none
        .current-tab
            background-color: #80bd01
            color: #fff
            padding: 3px 4px
            border-radius: 3px
    .topic-list 
        .cell 
            padding-right: 10px
            background #fff
            border-top 1px solid #f0f0f0
            position: relative
            padding: 10px 0 10px 10px
            font-size: 14px;
            &:first-child {
                border-top: none
            }
            &:hover {
                cursor pointer
                background: #f6f6f6
            }
            .avatar 
                width: 30px
                height: 30px
                border-radius: 3px
</style>
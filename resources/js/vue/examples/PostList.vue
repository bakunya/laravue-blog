<template>
    <div class="list-group">
        <div v-for="post in posts" :key="post.id" class="list-group-item">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
    import SinglePost from './SinglePost.vue'
    
    export default {
        props: {
            posts: {
                type: Array,
                default: []
            }
        },
        components: {
            SinglePost
        },
        setup() {

        }
    }
</script>
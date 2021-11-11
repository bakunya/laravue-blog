<template>
    <div class="card p-0 border-0 shadow rounded-3">
        <img :src="image" class="card-img-top h-250 object-cover" alt="code">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ content }}</p>
            <router-link :to="{ name: 'Home' }" class="btn btn-primary text-decoration-none ms-auto w-fit-content d-block">Read more</router-link>
        </div>
    </div>
</template>

<script>
    import { computed } from '@vue/reactivity'

    export default {
        props: {
            article: {
                type: Object,
                default: {}
            }
        },
        setup(props) {
            const title = computed(() => `${props.article.title.substring(0, 50)}...`)
            const content = computed(() => `${props.article.content.substring(0, 100)}...`)
            const image = /*props.article.image_url ??*/ 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXx8fHx8fDE2MzE1ODM3Njk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
            const slug = props.article.slug

            return {
                title,
                content,
                image,
                slug,
            }
        }
    }
</script>
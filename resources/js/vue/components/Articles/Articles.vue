<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
        <div class="col p-3" v-for="article in articles" :key="article.id">
            <CardArticle :article="article" />
        </div>
    </div>
</template>

<script>
    import CardArticle from '../Card/Card.Article.vue'

    export default {
        props: {
            articles: {
                type: Array,
                default: []
            }
        },
        components: {
            CardArticle
        },
        setup(props) {
            const { articles } = props

            return {
                articles,
            }
        }
    }
</script>

<style>

</style>
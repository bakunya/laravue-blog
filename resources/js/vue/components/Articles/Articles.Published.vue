<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-center mt-5">
            <div class="spinner-grow spinner-grow-sm m-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow spinner-grow-sm m-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow spinner-grow-sm m-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else-if="notEmpty">
            <h1 class="lead">
                <strong>{{ articleLength }} Article is Published</strong>
            </h1>
            <hr />
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
                <div class="col p-3" v-for="article in articles" :key="article.id">
                    <CardArticlePublished :article="article" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { onMounted } from '@vue/runtime-core'
    import { computed } from '@vue/reactivity'
    import { useStore } from 'vuex'

    import CardArticlePublished from '../Card/Card.ArticlePublished.vue'

    export default {
        components: {
            CardArticlePublished
        },
        setup() {
            const store = useStore()

            const loading = computed(() => store.getters['publishedArticles/loading'])
            const articles = computed(() => store.getters['publishedArticles/all'])

            const token = computed(() => store.getters['user/token'])
            const notEmpty = computed(() => articles.value.length > 0)
            const articleLength = computed(() => articles.value.length)

            onMounted(() => {
                store.dispatch("publishedArticles/fetchAll", token.value)
            })

            return {
                loading,
                notEmpty,
                articles,
                articleLength
            }
        }
    }
</script>

<style>

</style>
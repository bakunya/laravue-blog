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
        <div v-else-if="notEmpty" class="mt-4">
            <h1 class="lead">
                <strong>{{ articleLength }} Article is Unpublished</strong>
            </h1>
            <hr>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4" v-if="notEmpty">
                <div class="col p-3" v-for="article in articles" :key="article.id">
                    <CardArticleUnpublished :article="article" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { onMounted } from '@vue/runtime-core'
    import { computed } from '@vue/reactivity'
    import { useStore } from 'vuex'

    import CardArticleUnpublished from '../Card/Card.ArticleUnpublished.vue'

    export default {
        components: {
            CardArticleUnpublished
        },
        setup() {
            const store = useStore()

            const token = computed(() => store.getters['user/token'])
            const loading = computed(() => store.getters['unpublishedArticles/loading'])
            const articles = computed(() => store.getters['unpublishedArticles/all'])

            const notEmpty = computed(() => articles.value.length > 0)
            const articleLength = computed(() => articles.value.length)

            onMounted(() => {                
                store.dispatch("unpublishedArticles/fetchAll", token.value)
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
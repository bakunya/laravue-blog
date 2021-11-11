<template>
    <div class="container mx-auto mt-5">
        <h1 class="text-center mb-3">Home</h1>
        <div v-if="allArticleIsEmpty">
            <h1 class="text-center mt-5 lead">You are not create an article yet.</h1>
        </div>
        <div v-else>
            <ArticlesPublished />
            <ArticlesUnpublished />
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
    import { useStore } from 'vuex'
    import ArticlesPublished from '../components/Articles/Articles.Published.vue'
    import ArticlesUnpublished from '../components/Articles/Articles.Unpublished.vue'

    export default {
        components: {
            ArticlesPublished,
            ArticlesUnpublished
        },
        setup() {
            const store = useStore()

            const publishedArticles = computed(() => store.getters['publishedArticles/all'])
            const unpublishedArticles = computed(() => store.getters['unpublishedArticles/all'])

            return {
                allArticleIsEmpty: computed(() => publishedArticles.value.length <= 0 && unpublishedArticles.value.length <= 0)
            }
        }
    }
</script>
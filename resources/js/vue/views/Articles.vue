<template>
    <div class="container mx-auto mt-5">
        <h1 class="text-center mb-3">Articles</h1>
        <div v-if="loading">
            <flex-circle-loader />
        </div>
        <div v-else-if="isEmpty">
            <h1 class="text-center mt-5 lead">Articles is empty.</h1>
        </div>
        <div v-else>
            <articles :articles="articles" />
        </div>
    </div>
</template>

<script>
    import { computed, ref } from '@vue/reactivity'

    import Articles from '../components/Articles/Articles.vue'
    import FlexCircleLoader from '../components/Loader/FlexCircle.Loader.vue'
    import { articlesAll } from '../fetch/articles.all'
    import { onMounted } from '@vue/runtime-core'

    export default {
        components: {
            Articles,
            FlexCircleLoader
        },
        setup() {
            const articles = ref([])
            const isEmpty = computed(() => articles.value.length <= 0)
            const loading = ref(false)

            onMounted(() => {
                loading.value = true

                articlesAll()
                    .then(res => (articles.value = res))
                    .finally(() => (loading.value = false))
            })

            return {
                articles,
                isEmpty,
                loading
            }
        }
    }
</script>
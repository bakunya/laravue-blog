<template>
    <div class="card p-0 border-0 shadow rounded-3">
        <img :src="image" class="card-img-top h-250 object-cover" alt="code">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ content }}</p>
            <router-link :to="{ name: 'Home' }" class="btn btn-primary text-decoration-none ms-auto w-fit-content d-block">Read more</router-link>

            <button class="btn btn-outline-dark w-100 mt-3" type="button" data-bs-toggle="collapse" :data-bs-target="id_target" aria-expanded="false" :aria-controls="id_target">
                Action
            </button>
            <div class="collapse mt-1" :id="id">
                <div class="card card-body p-0 border-0">
                    <button-action :title="'Unpublish'" :variant="'btn-warning'" @action="unpublish" :loading="loading" />
                    <button-toast :title="fullTitle" @action="deleteArticle" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, ref } from '@vue/reactivity'
    import { articleUnpublish } from '../../fetch/article.unpublish'
    import { articleDelete } from '../../fetch/article.delete'
    import { useStore } from 'vuex'
    import ButtonAction from '../Button/Button.Action.vue'
    import ButtonToast from '../Button/Button.Toast.vue'

    export default {
        props: {
            article: {
                type: Object,
                default: {}
            }
        },
        components: {
            ButtonAction,
            ButtonToast
        },
        setup(props) {
            const store = useStore()

            const loading = ref(false)
            const token = computed(() => store.getters['user/token'])
            const title = computed(() => `${props.article.title.substring(0, 50)}...`)
            const content = computed(() => `${props.article.content.substring(0, 100)}...`)
            const image = props.article.image_url ?? 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXx8fHx8fDE2MzE1ODM3Njk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
            const slug = props.article.slug
            const id = props.article.id

            const unpublish = () => {
                loading.value = true
                articleUnpublish(token.value, id)
                    .then(() => {
                        store.dispatch("publishedArticles/fetchAll", token.value)
                        store.dispatch("unpublishedArticles/fetchAll", token.value)
                    })
                    .finally(() => (loading.value = false))
            }

            const deleteArticle = () => {
                loading.value = true
                articleDelete(token.value, id)
                    .then(() => {
                        store.dispatch("publishedArticles/fetchAll", token.value)
                        store.dispatch("unpublishedArticles/fetchAll", token.value)
                    })
                    .finally(() => (loading.value = false))
            }

            return {
                loading,
                title,
                content,
                image,
                slug,
                fullTitle: props.article.title,
                unpublish,
                deleteArticle,
                id: computed(() => `published-id-${id}`),
                id_target: computed(() => `#published-id-${id}`),
            }
        }
    }
</script>
<template>
    <div class="container mx-auto mt-5">
        <h1 class="text-center mb-3">Job Details</h1>
        <div class="d-flex justify-content-center" v-if="loading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <h6 class="text-center mt-5">{{ data.title }}</h6>
        <p class="mt-3">{{ data.body }}</p>
        <strong class="d-block mt-5">Post by: {{ user }}</strong>
    </div>
</template>

<script>
    import { reactive, toRefs } from '@vue/reactivity'
    import { watchEffect } from '@vue/runtime-core'
    import { useRoute } from 'vue-router'

    export default {
        setup() {
            const data = reactive({
                loading: false,
                data: {},
                user: ''
            })

            const { params } = useRoute()

            const fetchData =  async () => {
                data.loading = true

                try {
                    let dataApi = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
                    dataApi = await dataApi.json()
                    data.data = dataApi
                    let user = await fetch(`https://jsonplaceholder.typicode.com/users/${data.data.userId}`)
                    user = await user.json()
                    data.user = user.name
                } catch(er) {
                    console.error(er.message)
                } finally {
                    data.loading = false
                }
            }

            watchEffect(() => {
                fetchData()
            })

            return { ...toRefs(data) }
        },
    }
</script>
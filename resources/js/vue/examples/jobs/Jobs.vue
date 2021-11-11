<template>
    <div class="container mx-auto mt-5">
        <h1 class="text-center">Jobs</h1>
        <div class="list-groups mt-5">
            <div class="d-flex justify-content-center" v-if="loading">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <router-link class="list-group-item" v-for="job in jobs" :key="job.id" :to="{ name: 'JobDetails', params: { id: job.id } }">{{ job.title }}</router-link>
        </div>
    </div>
</template>

<script>
    import { reactive, toRefs } from '@vue/reactivity'
    import { onMounted } from '@vue/runtime-core'

    export default {
        setup() {
            const data = reactive({
                jobs: [],
                loading: false
            })

            onMounted(() => {
                data.loading = true
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(res => res.json())
                    .then(res => (data.jobs = res))
                    .catch(er => console.error(er.message))
                    .finally(() => (data.loading = false))
            })

            return { ...toRefs(data) }
        },
        // data() {
        //     return {
        //         jobs: [],
        //         loading: false
        //     }
        // },
        // mounted() {
        //     this.loading = true
        //     fetch("https://jsonplaceholder.typicode.com/posts")
        //         .then(res => res.json())
        //         .then(res => (this.jobs = res))
        //         .catch(er => console.error(er.message))
        //         .finally(() => (this.loading = false))
        // }
    }
</script>
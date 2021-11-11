<template>
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
</template>

<script>
    import { computed } from '@vue/reactivity'

    export default {
        props: {
            post: {
                type: Object,
                default: {}
            }
        },
        setup(props) {
            const title = computed(() => `${props.post.title.substring(0, 10)}...`)
            const body = computed(() => `${props.post.body.substring(0, 100)}...`)

            return {
                title,
                body
            }
        }
    }
</script>
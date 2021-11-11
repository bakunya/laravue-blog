<template>
    <button class="btn mt-2" :disabled="loading" :class="variant" @click="handleClick">{{ title }}</button>
</template>

<script>
    export default {
        props: {
            variant: {
                type: String,
                default: 'btn-primary'
            },
            title: {
                type: String,
                default: 'Publish'
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        setup(props, { emit }) {
            const { variant } = props
            const { title } = props
            const { loading } = props

            const handleClick = () => emit('action')

            return {
                variant,
                loading,
                title,
                handleClick
            }
        }
    }
</script>

<style>

</style>
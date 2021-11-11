<template>
    <div>
        <NavBar v-if="isAuthenticated" />
        <BasicNavBar v-else />
        <router-view />
    </div>
</template>

<script>
    import { computed } from '@vue/reactivity'
    import BasicNavBar from './components/NavBar/BasicNavBar.vue'
    import NavBar from './components/NavBar/NavBar.vue'
    import { useStore } from 'vuex'
    import { onMounted } from '@vue/runtime-core'

    export default {
        components: {
            BasicNavBar,
            NavBar
        },
        setup() {
            const store = useStore()

            onMounted(() => {
                store.dispatch('categories/fetchAll')
            })

            return {
                isAuthenticated: computed(() => store.getters['user/isAuthenticated'])
            }
        },
    }
</script>



<style>
    .router-link-active {
        text-decoration: underline !important;
    }
</style>
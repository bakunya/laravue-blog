<template>
    <div>
        <div class="container mx-auto mt-3">
            <div class="d-flex align-items-center justify-content-center">
                <router-link :to="{ name: 'Home' }" class="btn btn-info mx-1">Home</router-link>
                <router-link :to="{ name: 'About' }" class="btn btn-info mx-1">About</router-link>
                <router-link :to="{ name: 'Jobs' }" class="btn btn-info mx-1">Jobs</router-link>
            </div>

            <button class="btn btn-light mx-1 mt-3" @click="redirect">Redirect</button>
            <button class="btn btn-light mx-1 mt-3" @click="back">Go Back</button>
            <button class="btn btn-light mx-1 mt-3" @click="forward">Go Forward</button>

        </div>
        <router-view />
    </div>
</template>

<script>
    import { useRouter } from 'vue-router'

    export default {
        setup(props, context) {
            const router = useRouter()

            const back = () => {
                router.go(-1)
            }
            const forward = () => {
                router.go(1)
            }
            const redirect = () => {
                router.push({
                    name: "Home"
                })
            }

            return {
                back,
                forward,
                redirect
            }
        },
    }
</script>



<style>
    .router-link-active {
        text-decoration: underline !important;
    }
</style>
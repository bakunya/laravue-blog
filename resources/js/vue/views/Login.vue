<template>
    <div class="container row justify-content-center mx-auto">
        <form class="mt-5 col-8" @submit="handleSubmit">
            <h1 class="display-6 mb-5">Register</h1>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" :class="!!errorEmail && 'is-invalid'">
                    <div class="invalid-feedback" v-if="!!errorEmail">{{ errorEmail }}</div>
                    <div id="emailHelp" class="form-text" v-else>Please input your registered email in here.</div>
                </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" :class="!!errorPassword && 'is-invalid'">
                <div class="invalid-feedback" v-if="!!errorPassword">{{ errorPassword }}</div>
                <div id="passwordHelp" class="form-text" v-else>Please input your password in here.</div>
            </div>
            <div class="text-center text-danger mt-3" v-if="!!errorMessage">{{ errorMessage }}</div>
            <button class="btn btn-primary ms-auto d-block" :disabled="loading && true" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import { computed, reactive, ref, toRefs } from '@vue/reactivity'
    import { onMounted } from '@vue/runtime-core'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    export default {
        setup() {
            const router = useRouter()
            const store = useStore()

            const email = ref('')
            const password = ref('')
            const loading = ref(false)
            const errors = reactive({
                errorMessage: '',
                errorEmail: '',
                errorPassword: ''
            })

            const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])

            const fetchLogin = async () => {
                loading.value = true
                try {
                    const res = await store.dispatch('user/login', { email: email.value, password: password.value })
                    if(!res.success) {
                        errors.errorEmail = res.errors.errorEmail
                        errors.errorMessage = res.errors.errorMessage
                        errors.errorPassword = res.errors.errorPassword
                    }
                    
                    return router.push({ name: 'Home' })
                } catch(er) {
                    console.log(er)
                    errors.errorMessage = er.message
                } finally {
                    loading.value = false
                }
            }

            const handleSubmit = async (e) => {
                e.preventDefault()
                fetchLogin()
            }

            onMounted(() => {
                isAuthenticated.value && router.push({
                    name: 'Home'
                })
            })
            
            return {
                email,
                loading,
                password,
                handleSubmit,
                ...toRefs(errors)
            }
        }
    }
</script>
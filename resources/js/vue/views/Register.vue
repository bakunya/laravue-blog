<template>
    <div class="container row justify-content-center mx-auto">
        <form class="mt-5 col-8" @submit="handleSubmit">
            <h1 class="display-6 mb-5">Register</h1>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="username" :class="!!errorUsername && 'is-invalid'">
                <div class="invalid-feedback" v-if="!!errorUsername">{{ errorUsername }}</div>
                <div id="usernameHelp" class="form-text" v-else>Please input username in here.</div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email" :class="!!errorEmail && 'is-invalid'">
                <div class="invalid-feedback" v-if="!!errorEmail">{{ errorEmail }}</div>
                <div id="emailHelp" class="form-text" v-else>Please input valid email in here.</div>
            </div>
            <div class="mb-3">
                <label for="pass" class="form-label">Password</label>
                <input type="password" class="form-control" id="pass" v-model="password" :class="!!errorPassword && 'is-invalid'">
                <div class="invalid-feedback" v-if="!!errorPassword">{{ errorPassword }}</div>
                <div id="passwordHelp" class="form-text" v-else>Please input your password in here.</div>
            </div>
            <div class="text-center text-danger mt-3" v-if="!!errorMessage">{{ errorMessage }}</div>
            <button class="btn btn-primary ms-auto d-block" :disabled="loading && true" type="submit">Register</button>
        </form>
    </div>
</template>

<script>
    import { reactive, ref, toRefs } from '@vue/reactivity'
    import { onMounted } from '@vue/runtime-core'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    export default {
        setup() {
            const router = useRouter()
            const store = useStore()
    
            const email = ref('')
            const password = ref('')
            const username = ref('')
            const loading = ref(false)

            const errors = reactive({
                errorMessage: '',
                errorEmail: '',
                errorPassword: '',
                errorUsername: ''
            })

            const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])

            const fetchRegister = async () => {
                loading.value = true
                try {
                    const rawRes = await fetch("/api/auth/register", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json",
                            'Accept': "application/json",
                        },
                        body: JSON.stringify({
                            email: email.value,
                            password: password.value,
                            username: username.value,
                        })
                    });
                    const res = await rawRes.json()
                    if(!rawRes.ok) {
                        errors.errorMessage = res?.message ?? ''
                        errors.errorEmail = res?.errors?.email?.join(" ") ?? ''
                        errors.errorPassword = res?.errors?.password?.join(" ") ?? ''
                        errors.errorUsername = res?.errors?.username?.join(" ") ?? ''
                        return
                    }
                    return store.dispatch('user/setUser', res)
                } catch(er) {
                    errors.errorMessage = er.message ?? ''
                } finally {
                    loading.value = false
                }
            }

            const handleSubmit = (e) => {
                e.preventDefault()
                fetchRegister()
            }

            onMounted(() => {
                isAuthenticated && router.push({
                    name: 'Home'
                })
            })
            
            return {
                email,
                loading,
                password,
                username,
                handleSubmit,
                ...toRefs(errors),
            }
        }
    }
</script>
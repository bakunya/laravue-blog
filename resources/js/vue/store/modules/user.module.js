import { PREFIX } from "../../constant";
import useLocalStorage from "../../use/localStorage";

const [ setItem, getItem ] = useLocalStorage()

/**
 * get from local storage
 */
const userData = getItem(`${PREFIX}-user`)

const userStore = {
    namespaced: true,
    
    state: () => {
        return {
            token: userData?.token ?? null,
            data: userData?.user ?? null,
        }
    },
    getters: {
        all({ token, data }) {
            return {
                token,
                data,
            }
        },
        data({ data }) {
            return data
        },
        token({ token }) {
            return token
        },
        isAuthenticated({ token }) {
            return !!token
        }
    },
    mutations: {
        SETUSER(state, user) {
            state.token = user.token
            state.token = user.user

            /**
             * set to local storage
             */
            setItem(`${PREFIX}-user`, user)
        }
    },
    actions: {
        setUser({ commit }, user) {
            commit('SETUSER', user)
        },
        async login({ commit }, { email, password }) {
            try {
                const rawRes = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json",
                        'Accept': "application/json",
                    },
                    body: JSON.stringify({ email, password, })
                });
                const res = await rawRes.json()
                
                if(rawRes.ok) {
                    commit('SETUSER', res)
                    return {
                        success: true,
                        errors: null
                    }
                }
                return {
                    success: false,
                    errors: {
                        errorMessage: res?.message ?? '',
                        errorEmail: res?.errors?.email.join(" ") ?? '',
                        errorPassword: res?.errors?.password.join(" ") ?? '',
                    }
                }
            } catch(er) {
                return er?.message ?? ''
            }
        }
    }
}

export default userStore
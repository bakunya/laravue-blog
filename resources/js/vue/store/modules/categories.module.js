const categoriesStore = {
    namespaced: true,
    
    state: () => {
        return {
            categories: [],
        }
    },
    getters: {
        all({ categories }) {
            return categories
        },
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        }
    },
    actions: {
        async fetchAll({ commit }) {
            try {
                const rawRes = await fetch("/api/master/categories", {
                    method: "GET",
                    headers: {
                        'Content-Type': "application/json",
                        'Accept': "application/json",
                    },
                });
                const res = await rawRes.json()
                
                if(rawRes.ok) {
                    commit('SET_CATEGORIES', res?.data ?? [])
                }
            } catch(er) {
                console.error(er?.message ?? '')
            }
        }
    }
}

export default categoriesStore
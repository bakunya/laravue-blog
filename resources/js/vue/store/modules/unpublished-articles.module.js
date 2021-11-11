import { articlesUnpublished } from '../../fetch/articles.unpublished'

const unpublishedArticlesStore = {
    namespaced: true,
    
    state: () => {
        return {
            unpublishedArticles: [],
            loading: false
        }
    },
    getters: {
        all({ unpublishedArticles }) {
            return unpublishedArticles
        },
        loading({ loading }) {
            return loading
        }
    },
    mutations: {
        SET_UNPUBLISHED_ARTICLES(state, unpublishedArticles) {
            state.unpublishedArticles = unpublishedArticles
        },
        SET_LOADING(state, loading) {
            state.loading = loading
        }
    },
    actions: {
        async fetchAll({ commit }, token) {
            commit('SET_LOADING', true)
            try {
                const res = await articlesUnpublished(token);
                
                commit('SET_UNPUBLISHED_ARTICLES', res)
            } finally {
                commit('SET_LOADING', false)
            }
        }
    }
}

export default unpublishedArticlesStore
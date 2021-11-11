import { articlesPublished } from '../../fetch/articles.published'

const publishedArticlesStore = {
    namespaced: true,
    
    state: () => {
        return {
            publishedArticles: [],
            loading: false
        }
    },
    getters: {
        all({ publishedArticles }) {
            return publishedArticles
        },
        loading({ loading }) {
            return loading
        }
    },
    mutations: {
        SET_PUBLISHED_ARTICLES(state, publishedArticles) {
            state.publishedArticles = publishedArticles
        },
        SET_LOADING(state, loading) {
            state.loading = loading
        }
    },
    actions: {
        async fetchAll({ commit }, token) {
            commit('SET_LOADING', true)
            try {
                const res = await articlesPublished(token);
                
                commit('SET_PUBLISHED_ARTICLES', res)
            } finally {
                commit('SET_LOADING', false)
            }
        }
    }
}

export default publishedArticlesStore
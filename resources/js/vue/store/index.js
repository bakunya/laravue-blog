import { createStore } from "vuex";
import userStore from "./modules/user.module";
import categoriesStore from "./modules/categories.module";
import publishedArticlesStore from './modules/published-articles.module'
import unpublishedArticlesStore from './modules/unpublished-articles.module'

const store = createStore({
    modules: {
        user: userStore,
        categories: categoriesStore,
        publishedArticles: publishedArticlesStore,
        unpublishedArticles: unpublishedArticlesStore,
    }
})

export default store
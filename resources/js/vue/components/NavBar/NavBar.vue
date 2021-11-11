<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/home">Laravel Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/articles">Articles</a>
                    </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li v-for="category in categories" :key="category.id">
                                    <router-link class="dropdown-item text-capitalize" :to="{ name: 'ArticlesCategories', params: { slug: category.slug } }">{{ category.name }}</router-link>
                                </li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="/articles">Articles</a></li>
                            </ul>
                        </li>
                    <li class="nav-item dropdown ms-lg-auto">
                        <a class="nav-link dropdown-toggle text-capitalize" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ username }}</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'Home' }">Home</router-link>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/article/action/create">Create Article</a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="/logout">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex mb-0 mb-md-3 mb-lg-0" id="form-search" @submit="submit">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="keywords" id="search-input" v-model="keyword">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    import { computed, ref } from '@vue/reactivity'
    import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

    export default {
        setup() {
            const store = useStore()
            const router = useRouter()
            const route = useRoute()

            const keyword = ref()

            const submit = (e) => {
                e.preventDefault()
                router.push({
                    name: 'Search',
                    query: {
                        ...( route.name === 'Search' && route.query ),
                        keywords: keyword.value,
                    }
                })
            }

            return {
                submit,
                keyword,
                categories: computed(() => store.getters['categories/all']),
                username: computed(() => store.getters['user/data']?.username ?? '')
            }
        }
    }
</script>

<style>

</style>
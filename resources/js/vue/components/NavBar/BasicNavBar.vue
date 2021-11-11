<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand">Laravel Blog</span>
            <div class="d-flex align-items-center ms-auto">
                <router-link :to="{ name: 'Register' }" class="nav-link active text-dark" role="button">Register</router-link>
                <router-link :to="{ name: 'Login' }" class="nav-link active btn-warning" role="button">Login</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style>

</style>
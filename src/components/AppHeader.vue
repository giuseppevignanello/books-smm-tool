<script>
export default {
    name: "AppHeader",
    props: {

    },
    components: {

    },
    data() {
        return {

        }
    }
}
</script>
<template>
    <header
        class="bg-dark d-flex flex-wrap align-items-center justify-content-center justify-content-md-around py-3 mb-4 border-bottom">
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <router-link :to="{ name: 'home' }" class="nav-link px-2 text-white">
                <li>
                    Home
                </li>
            </router-link>

            <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <div class="col-md-3 text-end">
            <button type="button" class="btn btn-light">Logout</button>
        </div>
    </header>
</template>
<style scoped></style>
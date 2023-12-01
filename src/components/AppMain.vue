<script lang="ts">
import SearchForm from './SearchForm.vue';
export default {
    name: "AppMain",
    props: {

    },
    components: {
        SearchForm
    },
    data() {
        return {
            searchResults: "",

        }
    },
    methods: {
        handleSearch(searchTerm: string) {

        }
    }
}
</script>
<template>
    <div class="wrapper">
        <SearchForm @search="handleSearch"></SearchForm>

    </div>
</template>
<style scoped></style>
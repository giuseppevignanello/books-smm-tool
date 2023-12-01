<script lang="ts">
export default {
    name: "SearchForm ",
    props: {

    },
    components: {

    },
    data() {
        return {
            searchTerm: ""
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('search', this.searchTerm)
        }
    }
}
</script>
<template>
    <form @submit.prevent="handleSubmit" class="text-center p-4 border rounded ">
        <div class="bg_opacity search_title_container">
            <label for="search" class="form-label fw-bold h4 display-5 mb-4">Social Media Books</label>
        </div>
        <div class="input-group w-75 m-auto">
            <input v-model="searchTerm" type="text" class="form-control" name="search" id="search" aria-describedby="helpId"
                placeholder="Search a book or an author">
            <button type="submit" class="btn btn-dark">Search</button>
        </div>
    </form>
</template>
<style scoped></style>
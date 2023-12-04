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
    <form @submit.prevent="handleSubmit" class="text-center p-4">
        <div>
            <label for="search" class="form-label fw-bold display-4 mb-5">Social Media Books</label>
        </div>
        <div class="input-group w-75 m-auto">
            <input v-model="searchTerm" type="text" class="form-control" name="search" id="search" aria-describedby="helpId"
                placeholder="Search a book or an author">
            <button type="submit" class="btn btn-dark">Search</button>
        </div>
    </form>
</template>
<style scoped></style>
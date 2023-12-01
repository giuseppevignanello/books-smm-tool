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
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <div class="text-center my-2">
                <label for="search" class="form-label fw-bold display-5 mt-2">Search a Book or an author</label>
            </div>
            <input v-model="searchTerm" type="text" class="form-control w-75 m-auto" name="search" id="search"
                aria-describedby="helpId">
            <div class="text-center my-3">
                <button type="submit" class="btn btn-dark">Search</button>
            </div>
        </div>
    </form>
</template>
<style scoped></style>
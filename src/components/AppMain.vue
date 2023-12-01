<script lang="ts">
import SearchForm from './SearchForm.vue';
import axios from 'axios';



export default {

    name: "AppMain",
    props: {

    },
    components: {
        SearchForm
    },
    data() {
        return {
            apiUrlBase: "https://www.googleapis.com/books/v1/volumes?q=",
            apiKey: "AIzaSyBJRWR4g442X0LJRco_-qyM-c2tAx_hMqs",

            searchResults: [],

        }
    },
    methods: {
        handleSearch(searchTerm: string) {
            axios.
                get(`${this.apiUrlBase} ${searchTerm} &key ${this.apiKey}`)
                .then((response) => {
                    this.searchResults = response.data.items;
                    console.log(this.searchResults)
                })
                .catch((error) => {
                    console.error("Error", error)
                })
        },
        formatYear(date: string): string {
            if (!date) return '';

            const year = new Date(date).getFullYear();
            return isNaN(year) ? '' : year.toString();
        }
    }

}
</script>
<template>
    <div class="wrapper">
        <SearchForm @search="handleSearch"></SearchForm>
        <div>
            <h3 class="text-center my-3">It's one of these?</h3>
            <div class="d-flex justify-content-around gap-3 mx-4">
                <div v-for="(item, index) in searchResults.slice(0, 3)" class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{ item.volumeInfo.title }}</h4>
                        <h6 v-for="author in item.volumeInfo.authors" class="card-text">{{ author }}</h6>
                        <span>{{ formatYear(item.volumeInfo.publishedDate) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
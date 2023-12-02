<script lang="ts">
import { store } from "../store";
import SearchForm from './SearchForm.vue';
import IsOneOfThese from './IsOneOfThese.vue';
import axios from 'axios';



export default {

    name: "AppMain",
    props: {

    },
    components: {
        SearchForm,
        IsOneOfThese
    },
    data() {
        return {
            store


        }
    },
    methods: {
        handleSearch(searchTerm: string) {
            this.store.startRange = 0;
            this.store.endRange = 3;
            this.store.showResults = true;
            this.store.titleCounter = 0;
            axios.
                get(`${this.store.apiUrlBase} ${searchTerm} &key ${this.store.apiKey}`)
                .then((response) => {
                    this.store.searchResults = response.data.items;

                })
                .catch((error) => {
                    console.error("Error", error)
                })
        },

    },
    mounted() {
        console.log(this.store.apiKey);
        console.log(this.store.openAIKey)
    }

}
</script>
<template>
    <div class="wrapper">
        <SearchForm @search="this.handleSearch"></SearchForm>
        <IsOneOfThese></IsOneOfThese>
    </div>
</template>
<style scoped></style>
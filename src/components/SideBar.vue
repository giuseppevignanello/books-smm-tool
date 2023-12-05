
<script lang="ts">
export default {
    data() {


        return {
            lastSearches: JSON.parse(localStorage.getItem('searchTerms') || '[]'),
        }
    },
    methods: {
        clear() {

            localStorage.clear();


            this.updateSavedSearchTermsView();
        },
        updateSavedSearchTermsView() {

            const savedSearchTerms = this.getSavedSearchTerms();


            this.lastSearches = savedSearchTerms;
        },
        getSavedSearchTerms() {
            return JSON.parse(localStorage.getItem('searchTerms') || '[]');
        }
    },
    mounted() {

        this.updateSavedSearchTermsView();
    }
}
</script>

<template>
    <div class="sidebar d-none d-md-block bg_opacity text-white ">
        <h4 class=" mt-3 ms-2">Last Searches</h4>
        <span @click="clear()" class="p-1 px-2 rounded bg-danger ms-2 clear">Clear!</span>
        <ul class="list-unstyled fs-6 mt-2">
            <li v-for="search in lastSearches" class="border-bottom last_search">
                <div class="p-2 px-3">
                    {{ search }}
                </div>

            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped></style>
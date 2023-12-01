<script lang="ts">
import { store } from "../store.ts"
export default {
    name: "IsOneOfThese",
    props: {

    },
    components: {

    },
    data() {
        return {
            store

        }
    },
    methods: {
        formatYear(date: string): string {
            if (!date) return '';

            const year = new Date(date).getFullYear();
            return isNaN(year) ? '' : year.toString();
        }
    },

}
</script>
<template>
    <div v-show="this.store.searchResults.length > 0">
        <h3 class="text-center my-4">It's one of these?</h3>
        <div class="d-flex justify-content-around gap-3 mx-5 row-cols-4">
            <div v-for="(item) in this.store.searchResults.slice(0, 3)" class="card book_card">
                <div class="card-body">
                    <h4 class="card-title">{{ item.volumeInfo.title }}</h4>
                    <h6 v-for="author in item.volumeInfo.authors" class="card-text">{{ author }}</h6>
                    <span>{{ formatYear(item.volumeInfo.publishedDate) }}</span>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button type="button" class="btn btn-dark mt-5">Nope Give me more</button>
        </div>
    </div>
</template>
<style scoped></style>
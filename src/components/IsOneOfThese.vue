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
        <h3 class="text-center my-3">It's one of these?</h3>
        <div class="d-md-flex justify-content-center gap-3 mx-4 row-md-cols-4 books_container">
            <div v-for="(item) in this.store.searchResults.slice(0, 3)" class="card book_card my-1">
                <router-link class="text-black text-decoration-none" :to="{ name: 'single-book', params: { id: item.id } }">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.volumeInfo.title }}</h5>
                        <h6 v-for="author in item.volumeInfo.authors" class="card-text text-center">{{ author }}</h6>

                        <div class="text-center">{{ formatYear(item.volumeInfo.publishedDate) }} </div>
                    </div>
                </router-link>
            </div>

        </div>
        <div class="text-center mb-3">
            <button type="button" class="btn btn-dark mt-5">Nope Give me more</button>
        </div>
    </div>
</template>
<style scoped></style>
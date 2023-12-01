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
        <h3 class="text-center">It's one of these?</h3>
        <div
            class="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mx-3 flex-wrap books_container">
            <div v-for="(item) in this.store.searchResults.slice(0, 3)" class="book_card my-1">
                <router-link class="text-black text-decoration-none d-flex flex-column"
                    :to="{ name: 'single-book', params: { id: item.id } }">
                    <div class="d-flex">
                        <img v-if="item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail"
                            class="book_cover text-center" :src="item.volumeInfo.imageLinks.thumbnail"
                            alt="{{ item.volumeInfo.title }}">
                        <img class="book_cover text-center" v-else
                            src="https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"
                            alt="image not available">
                        <div class="d-flex flex-column justify-content-center mx-2">
                            <div class="fs- text-center fw-bold">{{ item.volumeInfo.title }}</div>
                            <h6 v-for="author in item.volumeInfo.authors" class="card-text text-center">{{ author }}</h6>
                            <div class="badge fs-6 bg-black mx-4">{{ formatYear(item.volumeInfo.publishedDate) }}
                            </div>
                        </div>
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
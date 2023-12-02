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
        },
        loadMore() {
            if (this.store.endRange <= 9) {
                this.store.startRange += 3;
                this.store.endRange += 3;
                this.store.titleCounter++
            } else {
                this.store.showResults = false;
                this.store.titleCounter++
            }
        }

    },

}
</script>
<template>
    <div v-show="this.store.searchResults.length > 0">
        <h3 class="text-center">{{ this.store.titles[this.store.titleCounter] }}</h3>
        <div v-if="this.store.showResults"
            class="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mx-3 flex-wrap books_container">
            <div v-for="(item) in this.store.searchResults.slice(this.store.startRange, this.store.endRange)"
                class="book_card my-1">
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
                            <h6 v-if="item.volumeInfo && item.volumeInfo.publisher" class="card-text text-center">{{
                                item.volumeInfo.publisher }}</h6>
                            <h6 v-else> Publisher unknown </h6>
                            <div class="badge fs-6 bg-black mx-4">{{ formatYear(item.volumeInfo.publishedDate) }}
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else class="text-center">
            <h2> Sorry, we only found these books...Try a more specific search </h2>
        </div>
        <div class="text-center mb-3">
            <button @click="(loadMore())" type="button" class="btn btn-dark mt-5">Nope Give me more</button>
        </div>
    </div>
</template>
<style scoped></style>
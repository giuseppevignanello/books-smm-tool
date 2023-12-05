

<script>
import { store } from "../store";
import axios from "axios"
export default {
    data() {


        return {
            store,
            singleBook: {}
        }
    },
    mounted() {

        const singleBookId = this.$route.params.id;
        this.singleBook = this.store.searchResults.find(book => book.id === singleBookId)

    },
}

</script>

<template>
    <div class="wrapper">
        <div class="comeback_button ms-3 mt-3">
            <router-link class="text-black text-decoration-none" :to="{ name: 'home' }">
                <div class="btn btn-dark">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
            </router-link>

        </div>

        <div v-if="this.singleBook && Object.keys(this.singleBook).length > 0">
            <h4 class="text-center fw-bold display-4 mb-4">{{ this.singleBook.volumeInfo.title }}</h4>

            <h4 class="text-center">What to do?</h4>
            <div class="button d-flex gap-3 justify-content-center mb-2">
                <router-link :to="{ name: 'social-post', params: { id: this.singleBookId } }">
                    <button type="button" class="btn btn-dark">Create a social media post</button>
                </router-link>
                <router-link :to="{ name: 'related-media', params: { id: this.singleBookId } }">
                    <button type="button" class="btn btn-dark">Suggest me related media</button>
                </router-link>
            </div>
            <div class="d-md-flex w-75 m-auto align-items-center gap-3 mb-3">
                <div class="text-center">
                    <img v-if="singleBook.volumeInfo && singleBook.volumeInfo.imageLinks && singleBook.volumeInfo.imageLinks.thumbnail"
                        class="book_cover text-center" :src="singleBook.volumeInfo.imageLinks.thumbnail"
                        alt="{{ singleBook.volumeInfo.title }}">
                    <img class="book_cover text-center" v-else
                        src="https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"
                        alt="image not available">
                </div>
                <div class="text_box">
                    <p v-if="this.singleBook.volumeInfo.description" class="mx-5">
                        {{ this.singleBook.volumeInfo.description }}
                    </p>
                    <h4 v-else class="mx-5">
                        Sorry, but we do not have any description for this volume
                    </h4>
                </div>
            </div>

        </div>
        <div v-else>
            <p>Loading...</p>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>
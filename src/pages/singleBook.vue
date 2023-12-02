

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
            <h4 class="text-center mb-4">{{ this.singleBook.volumeInfo.title }}</h4>
            <p class="mx-5">
                {{ this.singleBook.volumeInfo.description }}
            </p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
        <h4 class="text-center">What to do?</h4>
        <div class="button d-flex gap-3 justify-content-center mb-2">
            <router-link :to="{ name: 'social-post', params: { id: this.singleBookId } }">
                <button type="button" class="btn btn-dark">Create a social media post</button>
            </router-link>
            <router-link :to="{ name: 'related-media', params: { id: this.singleBookId } }">
                <button type="button" class="btn btn-dark">Suggest me related media</button>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
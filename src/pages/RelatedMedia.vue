
<script>
import { store } from "../store.ts"
import axios from 'axios'
export default {
    data() {


        return {
            store,
            numOfMedia: 0,
            language: "italian",
            mediaTypes: [],
            age: 0,
            response: "",
            loading: false,
        }
    },
    methods: {
        updateMediaTypes(event) {

            const checkboxValue = event.target.value;

            if (event.target.checked) {

                this.mediaTypes.push(checkboxValue);
            } else {

                const index = this.mediaTypes.indexOf(checkboxValue);
                if (index !== -1) {
                    this.mediaTypes.splice(index, 1);
                }
            }
        },
        async openAICall() {
            const description = this.singleBook.volumeInfo.description;
            const title = this.singleBook.volumeInfo.title;
            const author = this.singleBook.volumeInfo.authors[0];
            const lang = this.language == 'italian' ? 'Solo opere in italiano.' : 'Puoi scegliere opere da tutto il mondo.';
            this.loading = true;
            try {
                const response = await axios.post(this.store.openAIUrl, {
                    model: this.store.openAIModel,
                    messages: [
                        {
                            role: "user",
                            content: `Dammi ${this.numOfMedia} ${this.mediaTypes.join(' o ')} correlati a ${title} di ${author}. ${lang} Solo opere uscite negli ultimi ${this.age} anni. Qui la descrizione del libro: ${description}`,
                        },
                    ],
                    temperature: this.store.openAITemperature
                }, {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${this.store.openAIKey} `,
                    },
                });
                const data = response.data.choices[0].message.content
                console.log(data)
                this.response = data




            } catch (error) {
                console.error("Error making API call:", error);

            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        const singleBookId = this.$route.params.id;
        this.singleBook = this.store.searchResults.find(book => book.id === singleBookId)
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="comeback_button ms-3 mt-2">
            <router-link class="text-black text-decoration-none"
                :to="{ name: 'single-book', params: this.$route.params.id }">
                <div class="btn btn-dark">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
            </router-link>
        </div>

        <div class="bg-danger text-white rounded p-2 warning_message m-2">Warning! This technology is in an experimental
            phase. The
            information may
            be inaccurate, always verify before using them

        </div>
        <div class="text_box w-50 m-auto">
            <h3 class="text-center mt-2">Search Related Media</h3>
            <form @submit.prevent="openAICall()">
                <div class="mb-3 d-flex flex-column align-items-center">
                    <label for=" mediaType" class="form-label fw-bold">Media Type:</label>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="books" v-on:change="updateMediaTypes"
                            value="libri" />
                        <label class="form-check-label" for="books">Books</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="movies" v-on:change="updateMediaTypes"
                            value="film" />
                        <label class="form-check-label" for="movies">Movies</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="albums" value="album"
                            v-on:change="updateMediaTypes" />
                        <label class="form-check-label" for="albums">Albums</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" value="tv show" class="form-check-input" id="tv-show"
                            v-on:change="updateMediaTypes" />
                        <label class="form-check-label" for="tv-show">TV Shows</label>
                    </div>

                </div>

                <div class="mb-3 w-50 m-auto">
                    <label for="numOfMedia" class="form-label fw-bold">Number of Media:</label>
                    <select class="form-select" v-model="numOfMedia">
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>

                <div class="mb-3 w-50 m-auto">
                    <label for="language" class="form-label fw-bold">Language:</label>
                    <select class="form-select" v-model="language">
                        <option value="italian">Italian</option>
                        <option value="world">Worldwide</option>
                    </select>
                </div>

                <div class="mb-3 w-50 m-auto">
                    <label for="age" class="form-label fw-bold">Media Age: (until 2021)</label>
                    <select class="form-select" v-model="age">
                        <option value="5">Last 5 years</option>
                        <option value="10">Last 10 years</option>
                        <option value="20">Last 20 years</option>
                        <option value="50">Last 50 years</option>
                        <option value="100">Last 100 years</option>
                        <option value="200">Always</option>

                    </select>
                </div>
                <div class="d-flex justify-content-end me-5">
                    <button type="submit" class="btn btn-dark">Search Related Media</button>
                </div>
            </form>
        </div>
        <div v-if="loading" class="d-flex justify-content-center mt-3 gap-3 align-items-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <span>L'operazione potrebbe richiedere qualche secondo...</span>
        </div>
        <div v-if="response" class="text-center mt-3">
            <h3>Ecco a te!</h3>
            <div class="m-auto social_post_response mb-5">
                <p>{{ response }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>
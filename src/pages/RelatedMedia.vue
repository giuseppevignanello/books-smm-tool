
<script>
import { store } from "../store.ts"
export default {
    data() {


        return {
            store,
            numOfMedia: 0,
            language: "italian",
            mediaTypes: [],
            age: 0
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
            console.log(this.numOfMedia);
            console.log(this.language);
            console.log(this.mediaTypes);
            console.log(this.age)
            this.loading = true;
            // try {
            //     const response = await axios.post(this.store.openAIUrl, {
            //         model: this.store.openAIModel,
            //         messages: [
            //             {
            //                 role: "user",
            //                 content: ``,
            //             },
            //         ],
            //         temperature: this.store.openAITemperature
            //     }, {
            //         headers: {
            //             "Content-type": "application/json",
            //             Authorization: `Bearer ${this.store.openAIKey}`,
            //         },
            //     });
            //     const data = response.data.choices[0].message.content
            //     console.log(data)
            //     this.response = data




            // } catch (error) {
            //     console.error("Error making API call:", error);

            // } finally {
            //     this.loading = false;
            // }
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
        <div class="comeback_button ms-3 mt-3">
            <router-link class="text-black text-decoration-none"
                :to="{ name: 'single-book', params: this.$route.params.id }">
                <div class="btn btn-dark">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
            </router-link>
        </div>
        <h3 class="text-center mt-2">Search Related Media</h3>
        <form @submit.prevent="openAICall()">
            <div class="mb-3 d-flex flex-column align-items-center">
                <label for=" mediaType" class="form-label fw-bold">Media Type:</label>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="books" v-on:change="updateMediaTypes"
                        value="books" />
                    <label class="form-check-label" for="books">Books</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="movies" v-on:change="updateMediaTypes"
                        value="movies" />
                    <label class="form-check-label" for="movies">Movies</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="albums" value="albums"
                        v-on:change="updateMediaTypes" />
                    <label class="form-check-label" for="albums">Albums</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" value="tv-show" class="form-check-input" id="tv-show"
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
</template>


<style lang="scss" scoped></style>

<script>

import axios from 'axios';
import { store } from '../store.ts';
export default {
    data() {
        return {
            socials: [
                'Instagram',
                'Facebook',
                'Linkedin',
                'X',
                'YouTube'
            ],
            singleBook: {},
            response: "",
            loading: false,
            loadingTextList: ["L'operazione potrebbe richiedere qualche secondo...", "Sto scrivendo il post", "Non scappare...", "Ancora un momentino..."],
            loadingIndex: 0,
            loadingText: "",
            store
        }
    },
    methods: {

        async openAICall(social) {
            const description = this.singleBook.volumeInfo.description;
            const title = this.singleBook.volumeInfo.title;
            const author = this.singleBook.volumeInfo.authors[0];
            this.loading = true;
            setInterval(() => {
                if (this.loadingIndex <= this.loadingTextList.length) {
                    this.loadingIndex++;
                    this.loadingText = this.loadingTextList[this.loadingIndex];
                } else {
                    this.loadingIndex = 0;
                    this.loadingText = this.loadingTextList[this.loadingIndex];
                }
            }, 2000);
            try {
                const response = await axios.post(this.store.openAIUrl, {
                    model: this.store.openAIModel,
                    messages: [
                        {
                            role: "user",
                            content: `Immagina di essere un social media manager e scrivi un post ${social} completo sul libro ${title} di ${author}. Qui ti invio la sinossi del libro: ${description}.`,
                        },
                    ],
                    temperature: this.store.openAITemperature
                }, {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${this.store.openAIKey}`,
                    },
                });
                const data = response.data.choices[0].message.content
                this.response = data




            } catch (error) {
                console.error("Error making API call:", error);

            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        this.loadingText = this.loadingTextList[this.loadingIndex];

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
        <h2 class="text-center display-5 fw-semibold mt-3">What social media do you need this post for?</h2>
        <div class="d-flex justify-content-center">
            <ul class="list-unstyled text-center d-md-flex justify-content-center flex-wrap mt-3 social_icon_container ">
                <li v-for="social in  socials ">
                    <div @click="openAICall(social)" class="d-flex  align-items-center gap-2 my-2 mx-3 social_icon">
                        <div class="social_icon_img d-flex align-items-center">
                            <img :src="'/img/' + social + '.png'" alt="">
                        </div>
                        <div class="text-center fs-3">
                            {{ social }}
                        </div>
                    </div>
                </li>

            </ul>
        </div>
        <div v-if="loading" class="d-flex justify-content-center mt-3 gap-3 align-items-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <span>{{ loadingText }}</span>
        </div>
        <div v-if="response" class="text-center mt-3">
            <h3>Here you are!</h3>
            <div class="m-auto social_post_response mb-5">
                <p>{{ response }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>
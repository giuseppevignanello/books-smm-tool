
<script>
export default {
    data() {


        return {
            socials: [
                'Instagram',
                'Facebook',
                'Linkedin',
                'X',
                'YouTube'
            ]
        }
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
            <ul class="list-unstyled text-center d-flex flex-wrap mt-3 social_icon_container ">
                <li v-for="social in  socials " class="d-flex  align-items-center gap-2 my-2 mx-3 social_icon">
                    <div class="social_icon_img d-flex align-items-center">
                        <img :src="'/img/' + social + '.png'" alt="">
                    </div>
                    <div class="text-center fs-3">
                        {{ social }}
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>
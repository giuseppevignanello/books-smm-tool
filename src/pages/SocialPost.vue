
<script>
export default {
    data() {


        return {}
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
        <h3 class="text-center">What social media do you need this post for?</h3>
        <ul class="list-unstyled text-center mt-3">
            <li class="display-6 my-4 social_icon">
                <i class="fa-brands fa-instagram fa-xl"></i> Instagram
            </li>
            <li class="display-6 my-4 social_icon">
                <i class="fa-brands fa-facebook fa-xl"></i> Facebook
            </li>
            <li class="display-6 my-4 social_icon">
                <i class="fa-brands fa-linkedin fa-xl"></i> Linkedin
            </li>
            <li class="display-6 my-4 social_icon">
                <i class="fa-brands fa-tiktok fa-xl"></i> Tiktok
            </li>
            <li class="display-6 my-4 social_icon">
                <i class="fa-brands fa-youtube fa-xl"></i> Youtube
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped></style>
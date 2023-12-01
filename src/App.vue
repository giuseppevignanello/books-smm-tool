
<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";


export default defineComponent({
  components: {
    AppHeader,
    AppMain
  },
  data() {

    return {
      apiUrlBase: "https://www.googleapis.com/books/v1/volumes?q=",
      apiKey: "AIzaSyBJRWR4g442X0LJRco_-qyM-c2tAx_hMqs",

    };
  },
});
</script>


<template>
  <div>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss" scoped></style>
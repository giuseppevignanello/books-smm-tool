
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

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from "./components/AppHeader.vue";


export default defineComponent({
  components: {
    AppHeader,
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
    <router-view></router-view>

  </div>
</template>

<style lang="scss" scoped></style>
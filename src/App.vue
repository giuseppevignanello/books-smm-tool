
<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from "./components/AppHeader.vue";
import SideBar from "./components/SideBar.vue"


export default defineComponent({
  components: {
    AppHeader,
    SideBar,
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
    <div class="d-flex gap-5">
      <SideBar></SideBar>
      <router-view></router-view>
    </div>


  </div>
</template>

<style lang="scss" scoped></style>
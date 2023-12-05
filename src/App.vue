
<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from "./components/AppHeader.vue";
import SideBar from "./components/SideBar.vue";
import AppFooter from "./components/AppFooter.vue";


export default defineComponent({
  components: {
    AppHeader,
    SideBar,
    AppFooter
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
    <div>
      <div class="d-flex gap-5">
        <SideBar></SideBar>
        <router-view></router-view>

      </div>
      <AppFooter></AppFooter>
    </div>




  </div>
</template>

<style lang="scss" scoped></style>
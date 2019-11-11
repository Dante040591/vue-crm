<template>
  <div class="app-main-layout">
    <Navbar @click="isOpenNavbar = !isOpenNavbar"/>

    <Sidebar v-model="isOpenNavbar" />

    <main class="app-content" :class="{full: !isOpenNavbar}">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="/record" class="btn-floating btn-large blue">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";

export default {
  data: () => ({
    isOpenNavbar: true
  }),
  components: {
    Navbar,
    Sidebar
  }
};
</script>
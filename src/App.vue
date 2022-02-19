<template>
  <HeaderNav />
  <HomeData />
  <FooterNav />
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import HomeData from "./components/HomeData.vue";
import FooterNav from "./components/FooterNav.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
    HomeData,
    FooterNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

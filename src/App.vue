<template>
  <v-app id="app">
    <v-main>
      <Navbar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  font-family: 'iransans', sans-serif;
  text-align: center;
  background-color: #FFFFFF;
}
</style>
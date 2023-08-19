<template>
  <div>
    <router-link to="/test">test</router-link>
    <router-link to="/helloWorld">Hello</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
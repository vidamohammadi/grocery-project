<template>
  <div>
    <v-app-bar
        color="white"
        dense>
      <v-toolbar-title>
        <v-icon style="color: green" size="30px">mdi-cart</v-icon>
        <span style="color: green">e</span>
        <span style="color: black">Grocery</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon style="color: coral" size="20px">mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon style="color: green" size="20npm run servepx">mdi-cart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar"
}
</script>

<style scoped>

</style>
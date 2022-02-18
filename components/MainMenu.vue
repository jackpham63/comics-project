<template>
  <v-container>
    <v-toolbar
      dark
      color="red"
      dense
      rounded
      shaped
    >
      <v-toolbar-title>Logo</v-toolbar-title>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <!--span class="subheading">My Home</span>-->
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="category in categories"
                       :key="category"  >
        <v-btn text>
          {{category}}
        </v-btn>
        <!--      <v-divider vertical></v-divider>-->
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>
<script>
export default {
  name: "MainMenu",
  data: () => ({
    categories:[
      'ACTION',
      'COMEDY',
      'DRAMA',
      'FANTASY',
      'ROMANCE',
      'SCHOOL LIFE',
      'SUPERNATURAL',
      'SHOUJO',
      'SHOUNEN',
    ],
  }),
}
</script>

<style scoped>

</style>

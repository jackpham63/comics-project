<template>
  <v-col cols="3">
    <v-sheet rounded="lg">
      <v-list color="transparent">
        <v-list-item
          v-for="category in categories"
          :key="category"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ category }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item
          link
          color="grey lighten-4"
        >
          <v-btn
            rounded
            color="primary"
            dark
          >
            All Manga
          </v-btn>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "MangaSmall",data: () => ({
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

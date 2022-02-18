  <template>
    <v-main class="red lighten-3">
      <v-container class="red">
        <v-row class="white ">
        <MangaLarge/>
          <MangaSmall/>
        </v-row>
      </v-container>
    </v-main>
  </template>
  <script>
  import MangaLarge from "@/components/MangaLists/MangaLarge";
  import MangaSmall from "@/components/MangaLists/MangaSmall";
  export default {
    name:'MangaList',
    components: {MangaSmall, MangaLarge},

  }
  </script>
  <style scoped>
  </style>

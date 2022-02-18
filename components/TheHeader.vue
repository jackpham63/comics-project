<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="black  "
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar>
          <img
          src="https://t4.ftcdn.net/jpg/03/03/25/95/360_F_303259500_YRo4yGlHJ57sPVIHyE9bg5I1Plw3miuB.jpg"
          alt="Admin"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-responsive max-width="260">

          <v-text-field
            dense
            flat
            hide-details
            solo-inverted
            rounded
            dark
            placeholder=" Search manga ..."
          >

          </v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <TheCarousels/>
    <MainMenu/>
    <MangaList/>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'Lastest Updates',
      'Ranking',
      'Browse',
    ],
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

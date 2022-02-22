<template>
  <v-app-bar
    app
    color="black  "
    flat
  >
    <v-container class="py-0 fill-height">
      <v-avatar>
        <img
          src="https://t4.ftcdn.net/jpg/03/03/25/95/360_F_303259500_YRo4yGlHJ57sPVIHyE9bg5I1Plw3miuB.jpg"
          alt="Admin"></v-avatar>
      <section class="ml-3">
        <v-btn text>
          Home
        </v-btn>
        <v-btn text>
          Lastest Updates
        </v-btn>
        <v-btn text>
          Ranking
        </v-btn>
        <v-btn text>
          Browse
        </v-btn>
        <NuxtLink :to="{name: 'users-About'}">
          <v-btn text>
            About
          </v-btn>
        </NuxtLink>
      </section>
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
      <v-spacer></v-spacer>
      <v-card
        class="d-flex flex-row-reverse"
        flat
        tile
      >
        <v-btn class="red--text" @click="$store.dispatch('fireTest')">
          Login/ SignIn
        </v-btn>
      </v-card>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopHeader",
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

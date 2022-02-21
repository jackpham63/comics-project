<template>
<v-col cols="3 " >  <v-app id="inspire">
    <v-container
      fluid
      class="pa-0"
    >
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
        >
          <v-card>
            <v-toolbar>
              <v-tabs
                dark
                background-color="primary"
                grow
              >
                <v-tab>
                  Popular
                </v-tab>
                <v-tab>
                  New
                </v-tab>
              </v-tabs>
            </v-toolbar>
            <v-list two-line>
              <template v-for="n in 6">
                <v-list-item
                  :key="n"
                >
                  <v-list-item-avatar color="grey darken-1"  rounded>
                    <img
                      src="https://t4.ftcdn.net/jpg/03/03/25/95/360_F_303259500_YRo4yGlHJ57sPVIHyE9bg5I1Plw3miuB.jpg"
                      alt="Admin"
                    >
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>A Story About Treating a Female Knight Who Has Never Been Treated as a Woman as a Woman</v-list-item-title>
                    <v-list-item-subtitle>
                      Vol.01 Ch.131
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider
                  v-if="n !== 6"
                  :key="`divider-${n}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-app>  </v-col>
</template>

<script>
export default {
  name: "MangaSmall",data: () => ({
    cards: ['Today'],
    drawer: null,

  }),
}
</script>

<style scoped>

</style>

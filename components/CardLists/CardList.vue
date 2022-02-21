<template>
  <v-app>
    <v-container fluid  >
      <h1 class="mb-5 yellow--text">Top Tranding</h1>
      <v-layout row fill-height >
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-card dark color="primary" class="rounded-0 ma-1" >
            <v-card-text class="pa-1">
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
              <v-card-title class="py-0" ><a class="red--text">Cafe Badilico</a></v-card-title>
                <v-row
                  align="center"
                  class="ma-1"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="grey&#45;&#45;text ms-4">
                    4.5 (413)
                  </div>
                </v-row>
                <div class="text-subtitle-1">
                  Chapter ...
                </div>
            </v-card-text>
          </v-card>
          <v-card dark color="primary" class="rounded-0 ma-1" >
            <v-card-text class="pa-1">
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
              <v-card-title class="py-0" ><a class="red--text">Cafe Badilico</a></v-card-title>
              <v-row
                align="center"
                class="ma-1"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="grey&#45;&#45;text ms-4">
                  4.5 (413)
                </div>
              </v-row>
              <div class="text-subtitle-1">
                Chapter ...
              </div>
            </v-card-text>
          </v-card>
          <v-card dark color="primary" class="rounded-0 ma-1" >
            <v-card-text class="pa-1">
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
              <v-card-title class="py-0" ><a class="red--text">Cafe Badilico</a></v-card-title>
              <v-row
                align="center"
                class="ma-1"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="grey&#45;&#45;text ms-4">
                  4.5 (413)
                </div>
              </v-row>
              <div class="text-subtitle-1">
                Chapter ...
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name:'CardList',
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

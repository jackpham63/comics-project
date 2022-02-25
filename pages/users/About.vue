<template>
  <v-app light>
    <v-content>
      <TopHeader/>
      <section>
        <v-parallax src="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">“Life is not a game of luck. If you wanna win, work hard.” </h1>
            <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Sora | No Game No Life</div>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to share your amazing stuff</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Reach the world</div>
                    </v-card-title>
                    <v-card-text>
                      Show your stuff to the whole community of Endorfine not only to your mum or your friends. We love making good content viral. In this moment Endorfine is used by artists who are not famous but that want to share their works to the world. Unfortunately with other social networks this is hard, slow and sometime expensive.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Reach the world</div>
                    </v-card-title>
                    <v-card-text>
                      Show your stuff to the whole community of Endorfine not only to your mum or your friends. We love making good content viral. In this moment Endorfine is used by artists who are not famous but that want to share their works to the world. Unfortunately with other social networks this is hard, slow and sometime expensive.
                    </v-card-text>
                  </v-card>
                </v-flex><v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Reach the world</div>
                  </v-card-title>
                  <v-card-text>
                    Show your stuff to the whole community of Endorfine not only to your mum or your friends. We love making good content viral. In this moment Endorfine is used by artists who are not famous but that want to share their works to the world. Unfortunately with other social networks this is hard, slow and sometime expensive.
                  </v-card-text>
                </v-card>
              </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <TheFooter></TheFooter>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "About",
  data: function() {
  },
  methods: {
    subscribe: function() {
      this.subscribed = !this.subscribed;
    }
  },
};
</script>

<style scoped>

.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>

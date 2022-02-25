<template>
<!--  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white&#45;&#45;text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white&#45;&#45;text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white&#45;&#45;text pt-0">
        Copyrights and trademarks for the manga, and other promotional materials are held by their respective owners and their use is allowed under the fair use clause of the Copyright Law. © 2018 MangaFox. Current Time is GMT 07:47 AM.
        Our Email: service@mangafox.com   service@fanfox.net
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white&#45;&#45;text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>-->

  <v-footer class="footer">
    <v-container>
      <v-row class="py-0 py-md-15">

        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Address</h4>
          <p class="mt-10">71 Amsteroum Avenue Cronish Night, NY 35098</p>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Phone</h4>
          <p class="mt-10 mb-0">Reception : +205 123 4567</p>
          <p>Office : +207 235 7890</p>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Email</h4>
          <p class="mt-10 mb-0">
            Office : <a class="dark-link" href="/">info@wrappixel.com</a>
          </p>
          <p>
            Site :
            <a class="dark-link" href="https://www.wrappixel.com/"
            >wrappixel.com</a
            >
          </p>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Social</h4>

          <div class="social-icons mt-10">
            <a href="#">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-google-plus"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-youtube"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </v-col>
      </v-row>
      <div class="footer-bottom-bar font-14">
        <div class="d-block d-md-flex align-center">
          <p>
            All Rights Reserved by
            <a href="https://www.wrappixel.com/" class="link">wrappixel.com</a>
          </p>
          <div class="ml-auto">
            <div class="d-flex align-center">
              <a href="/" class="link px-4">Terms of Use</a>
              <a href="/" class="link px-4">Legal Disclaimer</a>
              <a href="/" class="link px-4">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>

</template>

<script>
export default {
  name: "TheFooter",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}

</script>

<style >

</style>

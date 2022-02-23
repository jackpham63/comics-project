<template>
  <v-menu
    min-width="180"
    offset-y
    bottom
    left
    nudge-bottom="10">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mr-0"
        icon
        v-bind="attrs"
        v-on="on">
        <v-icon
          style="font-size: 28px"
          >mdi-account</v-icon>
      </v-btn>
    </template>
    <v-list >
      <div class="text-h5 grey--text text--darken-3 px-4 pt-4">John Smith</div>
      <div class="subtitle-2 primary--text font-weight-regular px-4">{{$nuxt.$fire.auth.currentUser.email}}</div>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in account"
          :key="i">
          <v-list-item-icon class="mr-4">
            <v-icon
              :color="item.color"
              v-text="item.icon">
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title  v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <div class="d-flex justify-center my-3">
     <signout/>
      </div>
    </v-list>
  </v-menu>
</template>
<script>
import Signout from "@/pages/auth/signout";
export default {
  name: "TheProfile",
  data: () => ({
    account: [
      { text: 'Profile', icon: 'mdi-account', color: 'textColor' },
    ],
  }),
  components: {Signout}
}
</script>
<style scoped>
</style>

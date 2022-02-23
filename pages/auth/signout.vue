<template>
<div>
  <v-card
    class="d-flex flex-row-reverse"
    flat
    tile
  >
    <v-btn class="red--text" @click="$router.push('/auth/signout')" >
      SIGN OUT
    </v-btn>
  </v-card>
</div>
</template>

<script>
export default {
  name: "signout",
  asyncData() {
    $nuxt.$fire.auth.signOut()
  },
  method:{
  }
}
</script>

<style scoped>

</style>

<template>
    <v-col>
      <v-sheet class="white "
        min-height="70vh"
        rounded="rounded-0"
      >
        <CardList></CardList>
      </v-sheet>
    </v-col>
</template>

<script>
import CardList from "@/components/CardLists/CardList";
export default {
  name: "MangaLarge",
  components: {CardList}
}
</script>

<style scoped>

</style>

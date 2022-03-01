<template>
  <v-app light>
    <v-content>
      <TopHeader/>
      <v-container style="height: 100vh;">
        <div class="tables-basic">
          <h1 class="page-title mt-10 mb-6">Update Profile</h1>
          <v-divider
            inset
          ></v-divider>
          <v-row>
            <v-col cols="12">
              <v-form @submit.prevent="onSubmit">
                <h2 v-if="!group">New User Group</h2>
                <h2 v-else>Update User Group</h2>
                <notifications group="foo"></notifications>
                <p></p>
                <v-text-field
                  label="New User Group"
                  clearable
                  single-line
                  hide-details
                  v-model="name"
                ></v-text-field>
                <v-btn
                  depressed
                  color="error"
                  type="submit"
                  @click="doNotification"
                >
               Update
                </v-btn>

              </v-form>
            </v-col>

          </v-row>
        </div>
      </v-container>
      <TheFooter></TheFooter>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "userProfile"
}
</script>

<style scoped>

</style>

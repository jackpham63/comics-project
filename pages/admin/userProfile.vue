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
              <v-form @submit.prevent="updateProfile">
               <div>
                 <v-text-field
                   type="text"
                   name="fullName"
                   label="Update Name"
                   v-model="fullNames"
                 ></v-text-field>
               </div>
                <div>
                  <v-text-field
                    type="text"
                    name="email"
                    label="Update Email "
                    v-model="emails"
                  >
                  </v-text-field>
                </div>
                <v-btn
                  depressed
                  color="error"
                  type="submit"
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
  name: "userProfile",
  data() {
    return {
      emails: "",
      fullNames: "",
    }
  },
  mounted: function () {
    const user = this.$store.$fire.auth.currentUser
    console.log(user)
    if (user) {
      this.emails = user.email
      this.fullNames = user.uid
      console.log("test mail", user.email)
    }
  },
  methods: {
/*    updateProfile() {
      this.$store.dispatch('updateProfile', {email: this.email, fullName: this.fullName})
    },*/
    jobsDone() {
      this.$swal({
        title: 'Profile updated successfuly',
        icon: 'success'
      })
    },
  },
  // If data gone after page reload
  computed: {
 /*   userData () {
      return this.$store.getters.user
    }*/
  },
/*  watch: {
    userData (value) {
      if (value) {
        this.email = value.email
      }
    }
  },*/
}
</script>

<style scoped>

</style>

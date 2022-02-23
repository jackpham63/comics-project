<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="5" class=" d-none d-md-none d-lg-flex">
          <div class="d-flex justify-center">
            <v-img  class=" justify-center" src="https://images.unsplash.com/photo-1627672360124-4ed09583e14c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" contain></v-img>
          </div>
        </v-col>
        <v-col cols="12" lg="7" class=" d-flex align-center justify-center">
          <v-row no-gutters class="align-start">
            <v-col cols="12" class="login-part d-flex align-center justify-center flex-column">
              <div class="login-wrapper pt-md-4 pt-0">
                <v-tabs grow>
                  <v-tabs-slider></v-tabs-slider>
                  <!--LOGIN-->
                  <v-tab :href="`#tab-login`">
                    LOGIN
                  </v-tab>
                  <!--SIGNUP-->
                  <v-tab :href="`#tab-newUser`">
                    New User
                  </v-tab>
                  <!--                  CONTROL-->
                  <v-tab-item :value="'tab-login'" >
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
<!--                          FUNCTION SIGN IN WITH GOOGLE-->
                          <!--                          test and update later-->
                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium my-10">MANGAFOX ACCOUNT</p>
                            <v-btn height="45" block color="red" elevation="0" class="google text-capitalize" @click="signInWithGoogle">
                              Sign in with Google</v-btn>
                          </v-col>
                          <v-col cols="12" class="d-flex align-center my-8">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>
                          <v-col class="yellow--text d-flex align-center justify-center">
                            <H1>SIGNUP</H1>
                          </v-col>
<!--                          LOGIN AUTH-->
                          <v-form>
                            <v-col>
                              <v-text-field
                                value="phuocphamtran63@gmail.com"
                                label="Email Address"
                                required
                                v-model="auth.email"
                                :rules="auth.emailRules"
                              ></v-text-field>
                              <v-text-field
                                type="password"
                                label="Password"
                                hint="At least 6 characters"
                                required
                                v-model="auth.password"
                                :rules="auth.passRules"
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                class="text-capitalize"
                                color="primary"
                                @click="login"
                                large
                              >
                                Login</v-btn>
                              <v-btn large text class="text-capitalize primary--text" @click="forgotPassword" >Forget Password</v-btn>
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
<!--                  CREATE NEW USERS-->
                  <v-tab-item :value="'tab-newUser'" >
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium mt-10">Welcome!</p>
                            <p class="login-slogan display-1 text-center font-weight-medium mb-10">Create your account</p>
                          </v-col>
                          <v-form>
                            <v-col>
                              <v-text-field
                                v-model="auth.createFullName"
                                label="Full Name"
                                required
                              ></v-text-field>
                              <v-text-field
                                v-model="auth.createEmail"
                                :rules="auth.emailRules"
                                label="Email Address"
                                required
                              ></v-text-field>
                              <v-text-field
                                v-model="auth.createPassword"
                                :rules="auth.passRules"
                                type="password"
                                label="Password"
                                hint="At least 6 characters"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                large
                                block
                                :disabled="auth.createFullName.length === 0 || auth.createEmail.length === 0 || auth.createPassword === 0"
                                color="primary"
                                @click="login"
                              >
                                Create your account</v-btn>
                            </v-col>
                          </v-form>

                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
                </v-tabs>
                <v-snackbar
                  :timeout="4000"
                  v-model="snackbar"
                  absolute
                  bottom
                  center
                >
                  {{ snackbarText }}
                </v-snackbar>
              </div>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'signin',
   data() {
     return {
       snackbar: false,
       snackbarText: 'Again',
       auth:{
         /*check */
         email: 'phamhongphuoc@gmail.com',
         emailRules: [
           v => !!v || 'E-mail is required',
           v => /.+@.+/.test(v) || 'E-mail must be valid',
         ],
         /*check password*/
         password: '123456789',
         passRules: [
           v => !!v || 'Password is required',
           v => v.length >= 6 || 'Min 6 characters'
         ],
          createFullName: 'Pham Hong Phuoc',
         createEmail: 'phamhongphuoc@gmail.com',
         createPassword: '123456',
       },
     }
   },
    methods: {
      login(){
        let that = this
        this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
          .catch(function (error){
            that.snackbarText = error.message
            that.snackbar = true
          }).then((user) => {
          console.log('user')
          //we are signed in
        console.log(user)
         that.$router.push('/')
        })
      },
      forgotPassword() {
        let that = this
        this.$fire.auth.sendPasswordResetEmail(this.auth.email)
          .then(function (){
            that.snackbarText = 'reset link sent to ' + that.auth.email
            that.snackbar = true
          })
          .catch(function (error) {
            that.snackbarText = error.message
            that.snackbar = true
          })
      },
      async signInWithGoogle() {
        let that = this
        var provider = new this.$fireModule.auth.GoogleAuthProvider();
        // You can add or remove more scopes here provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        let authData = await this.$fire.auth.signInWithPopup(provider)
        that.authData.then((loggedResult)=>{
          console.log("done", loggedResult)
        })
        that.$router.push('/')
      }
    },
}
</script>



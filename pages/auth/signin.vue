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
<!--                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium my-10">MANGAFOX ACCOUNT</p>
                            <v-btn height="45" block color="red" elevation="0" class="google text-capitalize">
                              Sign in with Google</v-btn>
                          </v-col>-->
<!--                          <v-col cols="12" class="d-flex align-center my-8">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>
                          <v-col class="yellow&#45;&#45;text d-flex align-center justify-center">
                            <H1>SIGNUP</H1>
                          </v-col>-->
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
                              >
<!--
                                @click="login"
                                large
                                :disabled="password.length === 0 || email.length === 0"-->
                                Login</v-btn>
                              <v-btn large text class="text-capitalize primary--text" @click="forgotPassword" >Forget Password</v-btn>
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
<!--                  CREATE NEW USERS-->
<!--                  <v-tab-item :value="'tab-newUser'" >
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
                                v-model="createFullName"
                                label="Full Name"
                                required
                              ></v-text-field>
                              <v-text-field
                                v-model="createEmail"
                                :rules="emailRules"
                                label="Email Address"
                                required
                              ></v-text-field>
                              <v-text-field
                                v-model="createPassword"
                                :rules="passRules"
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
                                :disabled="createFullName.length === 0 || createEmail.length === 0 || createPassword === 0"
                                color="primary"
                                @click="login"
                              >
                                Create your account</v-btn>
                            </v-col>
                          </v-form>

                          <v-col cols="12" class="d-flex align-center my-4">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>
                          <v-col>

                            <v-btn height="45" block color="red" elevation="0" class="google text-capitalize">
                              Sign in with Google</v-btn>
                          </v-col>

                          <v-btn height="45" block color="white" elevation="0" class="google text-capitalize">
                            <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                            Sign in with Google</v-btn>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>-->
                </v-tabs>
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
  /*data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error){
          that.snackbarText = error.message
          that.snackbar = true
        }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/')
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
    }
  }*/

   data() {
     return {
       auth:{
         /*check */
         email: 'phuocphamtran63@gmail.com',
         emailRules: [
           v => !!v || 'E-mail is required',
           v => /.+@.+/.test(v) || 'E-mail must be valid',
         ],
         /*check password*/
         password: '12345678910',
         passRules: [
           v => !!v || 'Password is required',
           v => v.length >= 6 || 'Min 6 characters'
         ]
         /* createFullName: 'Pham Hong Ph',
         createEmail: 'phamhongphuoc@gmail.com',
         createPassword: '123456',*/
       },

     }
   },
    methods: {
      login(){
       /*window.localStorage.setItem('authenticated', true);
        this.$router.push('/dashboard');*/
        let that = this
        this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
          .catch(function (error){
            /*that.snackbarText = error.message
            that.snackbar = true*/
            console.log("Signin Fail with ",error)
          }).then((user) => {
          //we are signed in
        console.log("SIGNIN SUCCESS")
         that.$router.push('/')
        })
      }
    },
   // created() {
   //   if (window.localStorage.getItem('authenticated') === 'true') {
   //     this.$router.push('/dashboard');
   //   }
   // }
}


//test







</script>



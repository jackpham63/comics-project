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
                    <v-form @submit.prevent="onSignUp">
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
                                @click="onSignUp"
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
import $fireModule from "firebase/compat";

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
      jobsDone(){
        this.group = null
        this.name = ""
      },
      //login
      login(){
        let that = this
        this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
          .then((user)=>{
            const authUser = {
              id: user.user.uid,
              email: user.user.email,
              name: user.user.displayName,
            }
            return $fireModule.database().ref('groups').orderByChild('name').equalTo('Administrator').once('value')
            .then((ugroupSnap)=>{
              if(ugroupSnap.exists()){
                authUser.role = 'admin'
              }else{
                authUser.role = 'customer'
              }
            })
            .catch((error)=>{
              console.log('bi loi dang nhap roi', error)
              that.snackbarText = error.message
              that.snackbar = true
            })
          })
          that.$router.push('/')
      },
      //signup with email & password
      onSignUp(){
        const signUpData = {
          fullName: this.auth.createFullName,
          email: this.auth.createEmail,
          password: this.auth.createPassword
        }
        console.log("Signup with email",signUpData.email )
        console.log("Signup with name",signUpData.fullName )
   /*     this.$store.dispatch('signUpUser', signUpData)*/
        let newUser = null
        $fireModule.auth().createUserWithEmailAndPassword(signUpData.email, signUpData.password)
          .then((user)=>{
            newUser = user
            console.log("test full name", signUpData.fullName)
            console.log("email dang ky", signUpData.email)
            console.log("mat khau dang ky", signUpData.password)
            console.log("dangky-account",user)
            const pro = user.user.providerData[0];
            console.log("thong tin account dang ky  ",pro)
            const currentUser = {
              id: user.user.uid,
              email: signUpData.email,
              name: signUpData.fullName,
              photoURL: pro.photoURL,
            }
            console.log("current user", currentUser)
          })
        .then(()=>{
          const userData = {
            email: signUpData.email,
            fullName: signUpData.fullName,
            createdAt: new Date().toISOString()
          }
          console.log("userData", userData)
          $fireModule.database().ref(`users/${newUser.user.uid}`).set(userData)
          console.log("dangkythanhcong OKE")
          this.$router.push('/')
        })
        .then(()=> {
          return $fireModule.database().ref('groups').orderByChild('name').equalTo('Customer').once('value')
            .then(snapShot=>{
              const groupKey = Object.keys(snapShot.val())[0]
              let groupedUser = {}
              groupedUser[newUser.user.uid] = signUpData.fullName
              return $fireModule.database().ref(`userGroups/${groupKey}`).update(groupedUser)
            })
        })
      },
      //forgot password sent email
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

      //sign in and check login with google
      async signInWithGoogle() {
        let that = this
        const provider= new this.$fireModule.auth.GoogleAuthProvider();
        // You can add or remove more scopes here provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const authData = await this.$fire.auth.signInWithPopup(provider).then((loggedResult)=>{
          const providerData = loggedResult.user.providerData[0];
          if(loggedResult.additionalUserInfo.isNewUser){
            const { email, displayName: fullName, photoURL, uid } = providerData;
            const data = {
              email: email,
              fullName: fullName,
              photoURL: photoURL,
              uid: uid,
            };
          $fireModule.database()
            .ref('Users')
            .push(data)
            .then((result)=>{
              data.id = result.id;
              console.log("add result",data);
            })
          }else{
            console.log("Dang nhap google khong thanh cong")
          }
          console.log("done", loggedResult)
          that.$router.push('/')
        })
      }
    },
}
</script>



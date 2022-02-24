import $fireModule from "firebase/compat";

export const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)
      //redirect from here
      this.$router.push({
        path: '/auth/signin',
      })
    } else {
      const { uid, email } = authUser
      state.commit('SET_USER', {
        uid,
        email,
      })
    }
  },
  fireTest(){
    const payload = {
      one: 'Apple',
      two: 'Oranges'
    }
      $fireModule.database().ref('testdb').push(payload)
      .then(()=>{
        console.log("thanhcong")
      })
      .catch(error => {
        console.log('ERROR', error)
      })
  },
  /*signUpUser() {
    let newUser = null
    const signUpData = {
      fullName: this.auth.createFullName,
      email: this.auth.createEmail,
      password: this.auth.createPassword
    }
    $fireModule.auth.createUserWithEmailAndPassword(signUpData.email,signUpData.password)
      .then(user =>{
        console.log("Signup with email",signUpData.email )
        console.log("Signup with name",signUpData.fullName )
        newUser = user
        user.updateProfile({displayName: signUpData.fullName})
        const currentUser = {
          id: user.uid,
          email: user.email,
          name: user.fullName,
          role: "consumer"
        }
        console.log('USER', currentUser)
      })
      .then(()=>{
        const userData = {
          email: signUpData.email,
          fullName: signUpData.fullName,
          createdAt: new Date().toISOString()
        }
        $fireModule.database().ref(`users/${newUser.uid}`).push(userData)
      })

  }*/
}
export const state = () => ({
  user: null,

})
const mutations = {

  SET_USER(state, user) {
    state.user = user
  },
}
export const getters = {


}
export default {
  state,
  actions,
  mutations,
  getters,
}

import $fireModule from "firebase/compat";
const actions = {
  async loginUser({commit},payload){
    $fireModule.auth().signInWithEmailAndPassword(payload.email,payload.password)
      .then((user)=>{
        const authUserData = {
          id: user.user.uid,
          email: user.user.email,
          name: user.user.displayName,
        }
         return $fireModule.database().ref('groups').orderByChild('name').equalTo('Administrator').once('value')
         .then((snapShot)=>{
           const groupKey = Object.keys(snapShot.val())[0]
           return $fireModule.database().ref(`userGroups/${groupKey}`).child(`${authUserData.id}`).once('value')
             .then((ugroupSnap) => {
               if(ugroupSnap.exists()){
                 authUserData.role = 'admin'
               }else{
                 authUserData.role = 'customer'
               }
               console.log("SUCCESS LOGIN")
               this.$router.replace('/')
             })
         })
         .catch((error)=>{
           console.log('bi loi dang nhap roi', error)
           this.snackbarText = error.message
           this.snackbar = true
         })
      })
  },
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
}
const state = () => ({
  user: null,
})
const mutations = {
setUser(state,payload){
  state.user = payload
},
  SET_USER(state, user) {
    state.user = user
  },
}
const getters = {
user(state){
  return state.user
},
  loginStatus(state){
  return state.user !== null && undefined !== state.user
  },
}
export default {
  state,
  actions,
  mutations,
  getters,

}

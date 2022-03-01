import $fireModule from "firebase/compat";
import { getAuth, updateProfile } from "firebase/auth";
const actions = {

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
}
export default {
  state,
  actions,
  mutations,
  getters,
}

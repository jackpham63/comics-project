import $fireModule from "firebase/compat";

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
}
const state = () => ({
  user: null,

})
const mutations = {

  SET_USER(state, user) {
    state.user = user
  },
}
const getters = {


}
export default {
  state,
  actions,
  mutations,
  getters,
}

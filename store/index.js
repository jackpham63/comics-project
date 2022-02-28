import $fireModule from "firebase/compat";
import { getAuth, updateProfile } from "firebase/auth";
const actions = {
  signUpUser({commit},payload){
    console.log("tesst data", payload)
   $fireModule.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) =>{
          console.log("dangkythanhcong", user)
          const proData = user.user.multiFactor.user[0];
          if(user.additionalUserInfo.isNewUser){
            const { email } = proData;
            const data = {
              email: email,

            };
            $fireModule.database()
              .ref('Users')
              .push(data)
              .then((result)=>{
                data.id = result.id;
                console.log("add result",data);
              })
          }else{

          }
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
}
export default {
  state,
  actions,
  mutations,
  getters,
}

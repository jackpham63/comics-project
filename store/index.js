import $fireModule from "firebase/compat";
import { getAuth, updateProfile } from "firebase/auth";
const actions = {
  async signUpUser({commit}, payload) {
    $fireModule.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response)=>{
       /* newUser=user
        console.log("oke oke ", user)
        const auth = getAuth();*/
        $fireModule.auth().currentUser.updateProfile({
          displayName: payload.name,

        })
          .then(   ()=>{
            const currentUser = {
              id : response.uid ,
              email: payload.email,
              name: payload.name,
          }
        })
          .then((oke)=>{

          const data = {
            email: email,
            fullName: fullName,
            photoURL: photoURL,
            uid: uid,
          };
          $fireModule.database()
            .ref('groups')
            .push(userData)
        })
      })
/*/!*    updateProfile(auth.currentUser, {
      displayName: payload.name
    }).then(() => {
      const currentUser = {
        id : newUser.uid ,
        email: payload.email,
        name: payload.name,
      }

      console.log("user", currentUser)
      commit('setUser', currentUser)
    })
      .then( () => {
        const userData = {
          email: payload.email,
          name: payload.name,
          createdAt: new Date().toISOString()
        }
        console.log(userData)
          $fireModule.database().ref("add").push(userData)
/!*        $fireModule.database().ref("add").push(currentUser)*!/}*!/

      )*/
      /*   .then(()=>{
           const userData = {
             email: payload.email,
             name: payload.name,
             createdAt: new Date().toISOString()
           }
           $fireModule.database().ref(`users/${newUser.uid}`).set(userData).then(r => {

           })
         })*/
      .catch((error) => {

      });

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

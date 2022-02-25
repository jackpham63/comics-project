import $fireModule from "firebase/compat";

const state = () => ({
  groups: []
})
const mutations = {
  loadGroups(state,payload){
    state.groups.push(payload)
  }
}
const actions = {
  createGroup({commit}, payload){
    $fireModule.database().ref('groups').push(payload)
      .then(()=>{
        console.log('SUCCESS')
      })
      .catch( error =>{
        console.log('ERROR', error)
      })
  },
  getGroups({commit}){
    $fireModule.database().ref('groups').on('child_added',
      snapShot => {
      let item = snapShot.val()
        item.key = snapShot.key
        commit('loadGroups', item)
      }
      )
  }
}
const getters = {
  groups(state){
    return state.groups
  }
}


export default {
  state,
  actions,
  mutations,
  getters,
}

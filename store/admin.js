import $fireModule from "firebase/compat";

const state = () => ({
  groups: []
})
const mutations = {
  loadGroups(state,payload){
    state.groups.push(payload)
  },
  updateGroup(state, payload) {
    const i = state.groups.indexOf(payload.group)
    state.groups[i].name = payload.name
  },
  removeGroup(state, payload) {
    const i = state.groups.indexOf(payload.group)
    state.group.splice(i,1)
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
  updateGroup({commit}, payload){
    $fireModule.database().ref(`groups/${payload.group.key}`).update({name: payload.name})
      .then(()=>{
        const groupData = {
          group : payload.group,
          name : payload.name
        }
        commit('updateGroup', groupData)
        console.log('UPDATE SUCCESS')
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
  },
  removeGroup({commit},payload){
    $fireModule.database().ref(`groups/${payload.group.key}`).remove()
      .then(()=>{
      commit('removeGroup', payload)
      })
      .catch(error => {
        console.log(error)
      })
  },

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

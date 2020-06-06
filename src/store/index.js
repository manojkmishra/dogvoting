import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {dogs: [
    { id: 0, name: 'Dog1', vote: 0, percentage: 0 },
    { id: 1, name: 'Dog2', vote: 0, percentage: 0 },
    { id: 2, name: 'Dog3', vote: 0, percentage: 0 },
    { id: 3, name: 'Dog4', vote: 0, percentage: 0 },
    { id: 4, name: 'Dog5', vote: 0, percentage: 0 }
] , totalvotes:0,
  },
  getters: {    
    dogs: state => {   return state.dogs;  },
  },
  mutations: {vote: (state, payload) => {
    const index = state.dogs.findIndex(dog => dog.id === payload);
    state.dogs[index].vote++; 
    state.totalvotes++;
    for (let j=0;j< state.dogs.length; j++) 
    {let per= (100 * state.dogs[j].vote)/state.totalvotes;
      state.dogs[j].percentage=per;
    }
  },
  },
  actions: {voteAction(store, payload) {
    store.commit('vote', payload)
  },
  },
  modules: {  }
})

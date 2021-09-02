import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCount(state,payload){
      payload.count++
    },
    addCart(state,payload){
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions:{
    addCart(context,payload){
      let oldproduct = context.state.cartList.find(item => item.id == payload.id)

      if(oldproduct){
        context.commit('addCount',oldproduct)
      }else{
        payload.count = 1
        context.commit('addCart',payload)
      }
    }
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  }
})
export default store
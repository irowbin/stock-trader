import {Database} from '../../data/storage';

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, payload) {
        state.stocks = payload
    },
    'RND_STOCKS'(state) {
        state.stocks.forEach(s => {
            s.price = Math.round(s.price * (1 + Math.random() - 0.5))
        })
    }
}

const actions = {
    buyStock: ({commit}, payload) => {
        commit('portfolio/BUY_STOCK', payload, {root: true})
    },
    initStocks: ({commit}, payload) => {
        commit('SET_STOCKS', payload ? payload : Database)
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS')
    }
}

const getters = {
    stocksData: state => state.stocks
}

export default {
    state,
    actions,
    mutations,
    getters
}


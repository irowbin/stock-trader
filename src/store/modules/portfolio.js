const state = {
    funds: 1000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, {id, qty, price}) {
        const index = state.stocks.findIndex(s => s.id === id);
        index > -1
            ? state.stocks[index].qty += qty
            : state.stocks.push({id: id, qty: qty, price: price});
        state.funds -= price * qty;
    },
    'SELL_STOCK'(state, {id, qty, price}) {
        const index = state.stocks.findIndex(s => s.id === id);
        index > -1 && state.stocks[index].qty > qty
            ? state.stocks[index].qty -= qty
            : state.stocks.splice(index, 1);
        state.funds += price * qty;
    },
    'SET_PORTFOLIO'(state, payload){
        console.log((payload))
        state.funds = payload.funds;
        state.stocks = payload.stockPortfolio;
    }
}

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order)
    },
    setPortfolio({commit}, payload){
        commit('SET_PORTFOLIO',payload)
    }
}

const getters = {
    stockPortfolio(state, getters, rootState, rootGetters) {
        return state.stocks.map(s => {
            const record = rootGetters['stock/stocksData'].find(e => e.id === s.id);
            return {
                id: s.id,
                qty: s.qty,
                price: s.price,
                name: record.name
            }
        })
    },
    funds: (state) => state.funds
}

export default {
    state,
    mutations,
    actions,
    getters
}
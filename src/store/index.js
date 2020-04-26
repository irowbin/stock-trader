import Vue from 'vue'
import Vuex from 'vuex'
import StockModule from './modules/stocks'
import PortfolioModule from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        stock: {...StockModule, namespaced: true},
        portfolio: {...PortfolioModule, namespaced: true}
    }
})

<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link to="/portfolio" tag="li" class="nav-item" active-class="active">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link to="/stocks" tag="li" class="nav-item" active-class="active">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <strong class="navbar-text float-right text-danger mr-5">Funds: {{funds | currencyFilter}}</strong>
            <form class="form-inline my-2 my-lg-0">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="onRandomize">End Day</a>
                    </li>
                    <li class="nav-item dropdown navbar-right " :class="{'show':showDropdown}">
                        <a class="nav-link dropdown-toggle" href="#" @click.prevent="showDropdown = !showDropdown">
                            Save & Load
                        </a>
                        <div class="dropdown-menu " :class="{'show':showDropdown}">
                            <a class="dropdown-item" href="#" @click="onSaveData">Save Data</a>
                            <a class="dropdown-item" href="#" @click="onLoadData">Load Data</a>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </nav>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import axios from 'axios';

    const baseUrl = 'https://irobin-466f2.firebaseio.com/';
    export default {
        name: "Header",
        data() {
            return {
                showDropdown: false
            }
        },
        computed: {
            ...mapGetters('portfolio', ['funds', 'stockPortfolio']),
            ...mapGetters('stock', ['stocksData']),
        },
        methods: {
            ...mapActions('stock', {
                onRandomize: 'randomizeStocks',
                onSetStock: 'initStocks'
            }),
            ...mapActions('portfolio', {
                onSetPortfolio: 'setPortfolio'
            }),
            onSaveData() {
                const data = {
                    funds: this.funds,
                    stocks: this.stocksData,
                    stockPortfolio: this.stockPortfolio
                };
                axios.put(`${baseUrl}/data.json`, data)
            },
            onLoadData() {
                axios.get(`${baseUrl}/data.json`).then(response => {
                    if (!response.data) return;
                    const d = response.data;
                    this.onSetStock(d.stocks);
                    this.onSetPortfolio({...d});
                    this.showDropdown = false;
                    console.log(d)
                })
            }
        }
    }
</script>

<style scoped>

</style>
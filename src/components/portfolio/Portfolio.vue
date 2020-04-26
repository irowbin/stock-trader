<template>
    <div class="row mt-4">
        <div class="col-md-6" :key="index" v-for="(stock, index) in stocks">
            <app-stock :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock';
    import {mapGetters} from 'vuex';

    export default {
        name: "Portfolio",
        components: {
            'app-stock': Stock
        },
        computed: {
            ...mapGetters('portfolio',{
                stocks: 'stockPortfolio'
            })
        }
    }
</script>

<style scoped>

</style>
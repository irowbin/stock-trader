<template>
    <div class="row mt-4">
        <div class="col-md-6" :key="index" v-for="(stock, index) in stocks">
            <app-stock :stock="stock"></app-stock>
        </div>
    </div>

</template>

<script>
    import Stock from './Stock'

    export default {
        name: "Stocks",
        components: {
            'app-stock': Stock
        },
        computed: {
            stocks() {
                return this.$store.getters['stock/stocksData']
            }
        }
    }
</script>

<style scoped>

</style>
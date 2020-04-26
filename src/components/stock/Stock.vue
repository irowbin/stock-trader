<template>
    <div class="card border-info mb-3">
        <div class="card-header">
            <h4>{{stock.name}} <small class="small">(PRICE {{stock.price}})</small></h4>
        </div>
        <div class="card-body text-dark">
            <div class="float-left" >
                <input v-model="qty" type="number" class="form-control" placeholder="QTY" :class="{'is-invalid':insufficient}">
                <span v-if="insufficient" class="invalid-feedback"> You have insufficient fund. </span>
            </div>
            <div class="float-right">
                <button :disabled="insufficient || qty <=0 || Number.isNaN(qty)" class="btn btn-outline-success" type="button"
                        @click="buyOrder">Buy
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        name: "Stock",
        props: ['stock'],
        data() {
            return {
                qty: null
            }
        },
        methods: {
            buyOrder() {
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    qty: this.qty
                };
                this.qty = null;
                this.$store.dispatch('stock/buyStock', order)
            }
        },
        computed: {
            ...mapGetters('portfolio',['funds']),
            insufficient(){
                return this.stock.price * this.qty > this.funds;
            }
        }

    }
</script>

<style scoped>

</style>
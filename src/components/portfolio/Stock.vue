<template>
    <div class="card border-success mb-3">
        <div class="card-header">
            <h4>{{stock.name}} <small class="small">(Price: {{stock.price}} QTY: {{stock.qty}})</small></h4>
        </div>
        <div class="card-body text-dark">
            <div class="float-left">
                <input v-model="qty" type="number" class="form-control" placeholder="QTY" :class="{'is-invalid':insufficientQty}">
                <span v-if="insufficientQty" class="invalid-feedback">Not enough stocks</span>
            </div>
            <div class="float-right">
                <button :disabled="insufficientQty || qty <=0 || Number.isNaN(qty)" class="btn btn-outline-success" type="button"
                        @click="sellSock">Sell
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import {mapActions} from 'vuex';
    export default {
        name: "Stock",
        props: ['stock'],
        data() {
            return {
                qty: 0
            }
        },
        methods: {
            ...mapActions('portfolio',{
                onSellStock: 'sellStock'
            }),
            sellSock() {
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    qty: this.qty
                };
                this.qty = 0;
                this.onSellStock(order)
            }
        },
        computed:{
            insufficientQty(){
                return this.qty > this.stock.qty;
            }
        }

    }
</script>

<style scoped>

</style>
<template>
    <div class="row mt-4">
        <div class="col-md-8 offset-2 mt-1">Trade or view your Portfolio</div>
        <div class="col-md-8 offset-2 mt-1">You may Save & Load your data</div>
        <div class="col-md-8 offset-2 mt-1">Click on `End Day` to begin a new day</div>
        <div class="col-md-8 offset-2 mt-1">Your Funds: <strong>{{funds | currencyFilter}} </strong> </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'Home',
        computed:{
            ...mapGetters('portfolio',['funds'])
        }
    }
</script>

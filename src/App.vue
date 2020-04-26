<template>
    <div id="app" class="container pt-3" style="box-shadow: 0 0 10px 0 #959595; height: 98vh">
        <app-header></app-header>
        <transition name="component-fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>
<script>
    import Header from './components/Header'

    export default {
        components: {
            'app-header': Header
        },
        created() {
            this.$store.dispatch('stock/initStocks');
        }
    }
</script>
<style scoped>
    .component-fade-enter-active {
       animation: slide-left 300ms ease-in forwards;
    }
    .component-fade-leave-active {
        animation: slide-right 300ms ease-in forwards;
    }

    @keyframes slide-left {
        from{
            transform: translateX(-10px);
            opacity: 0;
        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-right {
        from{
            transform: translateX(0);
            opacity: 1;
        }
        to{
            transform: translateX(10px);
            opacity: 0;
        }
    }
</style>

<template>
    <div id="example">
        <countTo
                :startVal='startVal'
                :endVal='endVal'
                :duration='1000'
                :autoplay='autoplay'
                ></countTo>
    </div>
</template>
<style>
    #example {
        margin: 100px auto;
        width: 600px;
    }

</style>
<script>
    import countTo from 'vue-count-to';

    export default {
        components: {countTo},
        data() {
            return {
                startVal: 0,
                endVal: 2017,
                useEasing:false,
                autoplay:true,
            }
        },
        methods: {

        }
    }

</script>

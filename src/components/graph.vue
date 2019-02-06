<template>
    <div id="graph" class="card">
        <span class="cardTitle">{{ title }}</span>
        <chart style="height:80%; width: 95%; padding: 1em;" :data="data"></chart>
    </div>
</template>

<script>
import chart from "./linechart.js";

export default {
    name: "lineChart",
    props: ['title', 'data'],
    components: {
        chart
    },
    data() {
        return {
            sliderValue: 0
        }
    }
}
</script>

<style lang="scss">

    #graph {
        grid-area: first;
        flex-flow: column;
    }
    
</style>
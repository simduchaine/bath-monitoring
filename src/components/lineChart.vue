<template>
    <div id="lineChart" class="card">
        <span class="cardTitle">{{ title }}</span>
    </div>
</template>

<script>


export default {
    name: "lineChart",
    props: ['title'],
    data() {
        return {
            sliderValue: 0
        }
    }
}
</script>

<style lang="scss">

    #lineChart {
        grid-area: first;
    }
    
</style>
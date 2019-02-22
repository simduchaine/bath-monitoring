<template>
    <div id="graph" class="card">
        <span class="cardTitle">{{ title }}</span>
        <chart v-if="loaded" style="height:80%; width: 95%; padding: 1em;" :chart-data="datacollection" :options="options"></chart>
    </div>
</template>

<script>
import chart from "./linechart.js";

export default {
    name: "lineChart",
    props: ["title", "labels", "tempArray", "humidArray", "loaded"],
    components: {
        chart
    },
    data() {
        return {
            sliderValue: 0,
            datacollection: null,
            options: null
        }
    },
    mounted() {
        this.fillData();
        this.fillOptions();
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: this.labels,
                datasets: [
                    {
                    label: "Humidity %",
                    borderColor: "#8864CE",
                    backgroundColor: "#8864CE",
                    fill: false,
                    data: this.humidArray,
                    yAxisID: "y1"
                    },
                    {
                    label: "Temperature (°C)",
                    borderColor: "#3B81BC",
                    backgroundColor: "#3B81BC",
                    fill: false,
                    data: this.tempArray,
                    yAxisID: "y2"
                    }
                ]
            }
        },
        fillOptions() {
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                fontFamily: "Chivo",
                scales: {
                    yAxes: [
                    {
                        id: "y1",
                        type: "linear",
                        position: "left",
                        gridLines: {
                            color: "#7271801c"
                        }
                    },
                    {
                        id: "y2",
                        type: "linear",
                        position: "right",
                        gridLines: {
                            display: false
                        }
                    }
                    ],
                    xAxes: [
                    {
                        gridLines: {
                            color: "#7271801c"
                        }
                    }
                    ]
                }
            }
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
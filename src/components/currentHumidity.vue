<template>
    <div id="currentHumidity" class="card">
        <span class="cardTitle">{{ title }} <font-awesome-icon icon="thermometer-half" class="icon" /></span>
        <div class="actualData">{{ data }}%</div>
        <circle-slider 
                v-model="sliderValue"
                class="circle-slider" 
                :side=215 
                :circle-width=5
                :progress-width=6 
                :knob-radius=10
                circle-color="#FE6D84" 
                knob-color="#C4C4C4" 
                progress-color="#8864CE">
            </circle-slider>
        <div class="setPoint">
            <button @click="setValue()">Set to {{ sliderValue }}%</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "currentHumidity",
    props: ["title", "data", "setPoint"],
    data() {
        return {
            sliderValue: this.setPoint
        }
    },
    watch: {
        setPoint: function (newVal) {
            this.sliderValue = newVal;
        }
    },
    methods: {
        setValue() {
            this.$emit("setvalue", this.sliderValue);
        }
    }

}
</script>

<style lang="scss">

    #currentHumidity {
        grid-area: third;

        .actualData,
        .icon {
            color: $purple;
        }
    }
    
</style>
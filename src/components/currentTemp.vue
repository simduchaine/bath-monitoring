<template>
    <div id="currentTemp" class="card">
        <span class="cardTitle">{{ title }}  <font-awesome-icon icon="snowflake" class="icon" /></span>
        <div class="actualData">{{ data }}°C</div>
        <circle-slider
            class="circle-slider" 
            v-model="sliderValue" 
            :min=0
            :max=35
            :side=215
            :circle-width=5
            :progress-width=6
            :knob-radius=10
            circle-color="#FE6D84" 
            knob-color="#C4C4C4" 
            progress-color="#3B81BC">
        </circle-slider>
        <div class="setPoint">
            <button @click="setValue()">Set to {{ sliderValue }}°C</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "currentTemp",
    props: ["title", "data", "setPoint" ],
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

    #currentTemp {
        grid-area: second;

        .actualData,
        .icon {
            color: $blue;
        }

    }
    
</style>
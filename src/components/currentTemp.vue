<template>
    <div id="currentTemp" class="card">
        <span class="cardTitle">{{ title }}</span>
        <div class="actualData">{{ data }}°C</div>
        <circle-slider 
            class="circle-slider" 
            v-model="setPoint" 
            min="0"
            max="35"
            side="250"
            circle-width="5" 
            progress-width="6" 
            knob-radius="10"
            circle-color="#FE6D84" 
            knob-color="#C4C4C4" 
            progress-color="#3B81BC">
        </circle-slider>
        <span>Set Point: {{ setPoint }}°C</span>
    </div>
</template>

<script>
export default {
    name: "currentTemp",
    props: ["title", "data", "setPoint" ],
    data() {
        return {
            sliderValue: 0
        }
    }
}
</script>

<style lang="scss">

    #currentTemp {
        grid-area: second;

        .actualData {
            color: $blue;
        }
    }
    
</style>
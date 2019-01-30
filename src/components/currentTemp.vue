<template>
    <div id="currentTemp" class="card">
        <span class="cardTitle">{{ title }}</span>
        <div class="actualData">{{ actualData }}°C</div>
        <circle-slider 
            class="circle-slider" 
            v-model="sliderValue" 
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
        {{ sliderValue }}
    </div>
</template>

<script>
export default {
    name: "currentTemp",
    props: ['title'],
    data() {
        return {
            sliderValue: 0,
            actualData: 0
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
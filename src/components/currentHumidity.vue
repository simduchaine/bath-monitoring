<template>
    <div id="currentHumidity" class="card">
        <span class="cardTitle">{{ title }}</span>
        <div class="actualData">{{ actualData }}%</div>
        <circle-slider 
                v-model="sliderValue"
                class="circle-slider" 
                side="250"  
                circle-width="5" 
                progress-width="6" 
                knob-radius="10"
                circle-color="#FE6D84" 
                knob-color="#C4C4C4" 
                progress-color="#8864CE">
            </circle-slider>
        {{ sliderValue }}
    </div>
</template>

<script>
export default {
    name: "currentHumidity",
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

    #currentHumidity {
        grid-area: third;

        .actualData {
            color: $purple;
        }
    }
    
</style>
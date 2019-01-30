<template>
  <div id="dashboard">
    <line-chart title="Humidity, Temperature"></line-chart>
    <current-temp title="Current Temperature"></current-temp>
    <current-humidity title="Current Humidity"></current-humidity>
  </div>
</template>

<script>
import currentTemp from "@/components/currentTemp.vue";
import currentHumidity from "@/components/currentHumidity.vue";
import lineChart from "@/components/lineChart.vue";

export default {
  name: "dashboard",
  components: {
    currentTemp,
    currentHumidity,
    lineChart
  }
};
</script>

<style lang="scss">
#dashboard {
  display: grid;
  grid-template-rows: 52% auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "first first"
    "second third";
  grid-row-gap: 1.5em;
  grid-column-gap: 1.5em;
  width: 85%;
  padding: 0 0 3em;
}

.card {
  background-color: $darkPurple;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.cardTitle {
  align-self: flex-start;
  padding: 1.5em 0 0 1.5em;
}

.actualData {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 46px;
}


</style>

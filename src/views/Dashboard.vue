<template>
  <div id="dashboard">
    <graph title="Humidity, Temperature" :labels="labels" :tempArray="tempArray" :humidArray="humidArray" :loaded="loaded"></graph>
    <current-temp title="Current Temperature" :data="tempData" :setPoint="getTempSetPoint" @setvalue="SetTempValue"></current-temp>
    <current-humidity title="Current Humidity" :data="humidData" :setPoint="getHumidSetPoint" @setvalue="SetHumidValue"></current-humidity>
    <flash-message class="flash-message"></flash-message>
  </div>
</template>

<script>
import moment from "moment";
import { dbData } from "../main.js"

import currentTemp from "@/components/currentTemp.vue";
import currentHumidity from "@/components/currentHumidity.vue";
import graph from "@/components/graph.vue";

require('vue-flash-message/dist/vue-flash-message.min.css');

export default {
  name: "dashboard",
  components: {
    currentTemp,
    currentHumidity,
    graph
  },
  data() {
    return {
      tempData: 0,
      getTempSetPoint: 0,
      getHumidSetPoint: 0,
      humidData: 0,
      labels: [],
      tempArray: [],
      humidArray: [],
      loaded: false
    }
  },
  created() {
    dbData.on('value', (snapshot) => {
      this.tempData = snapshot.child("arduinoData/actualTemp").val();
      this.humidData = snapshot.child("arduinoData/actualHumidity").val();
      this.getTempSetPoint = snapshot.child("arduinoData/tempSetpoint").val();
      this.getHumidSetPoint = snapshot.child("arduinoData/humiditySetpoint").val();
    }); 
    dbData.child("dataOverTime").limitToLast(50).on("child_added", (data) => { //database.ref("dataOverTime")
      //let date = moment(data.val().timestamp).format('L');
      this.labels.push(data.val().timestamp);
      this.tempArray.push(data.val().Temp);
      this.humidArray.push(data.val().Humidity);
      this.loaded = true;
    })
  },
  methods: {
    SetTempValue(value) {
      dbData.child("arduinoData/tempSetpoint").set(value, error => {
        if (error) {
          // The write failed...
          this.flash('Setting Temperature Failed!', 'error');
        } else {
          // Data saved successfully!
          this.flash('Temperature correctly set!', 'success', {
            timeout: 2000
          });
        }
      });
    },
    SetHumidValue(value) {
      dbData.child("arduinoData/humiditySetpoint").set(value, error => {
        if (error) {
          // The write failed...
          this.flash('Setting Humidity Failed!', 'error');
        } else {
          // Data saved successfully!
          this.flash('Humidity correctly set!', 'success', {
            timeout: 2000
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
#dashboard {
  display: grid;
  grid-template-rows: 51% auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "first first"
    "second third";
  grid-row-gap: 1.2em;
  grid-column-gap: 1.5em;
  width: 80%;
  padding: 0 4em 2.5em;
}

.card {
  background-color: $darkPurple;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
}

.cardTitle {
  align-self: flex-start;
  padding: 1.5em 0 0 1.5em;
  font-size: 13px;
}

.actualData,
.circle-slider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 46px;
}

.icon {
  padding-left: 0.3em;
}

.setPoint {
  display: block;
  width: 100%;
  align-self: flex-end;
  text-align: center;
  margin: 0 auto 1.5em;
}

button {
  background-color: #535468;
  color: $white;

  &:hover {
    background-color: $purpleGray;
  }
}

.flash-message {
  position: absolute;
  bottom: 5%;
  left: 30%;
  width: 51%;
  text-align: center;
}


</style>

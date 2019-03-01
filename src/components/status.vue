<template>
    <div class="status">
        <div>
            <span :class="{green: isDehumidifierEmpty}"></span><p>DEHUMIDIFIER STATUS</p>  
        </div>
        <div>
            <span :class="{green: isHumidifierFull}"></span><p>HUMIDIFIER STATUS</p>
        </div>
    </div>
</template>

<script>
import { dbData } from "../main.js"

export default {
    data() {
        return {
            isHumidifierFull: false,
            isDehumidifierEmpty: false
        }
    },
    created() {
        dbData.on('value', (snapshot) => {
            this.isHumidifierFull = snapshot.child("arduinoData/DehumidifierFull").val();
            this.isDehumidifierEmpty = snapshot.child("arduinoData/HumidifierEmpty").val();
        });
    }
}
</script>

<style lang="scss">
.status {
    position: absolute;
    bottom: 15%;
    padding: 0 2em;
    
    p, span {
        display: inline-block;
    }
    
    span {
        height: 15px;
        width: 15px;
        background-color: #FE6D84;
        border-radius: 50%;
        margin-right: 0.5em;
    }

    p {
        margin: 0.4em 0;
    }

    .green {
        background-color: #378830;
    }
}
    
</style>
